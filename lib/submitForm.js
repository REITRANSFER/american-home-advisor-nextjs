const WEBHOOK_URL = 'https://n8n.srv1197128.hstgr.cloud/webhook/85395732890';

// ─── Lead scoring (universal pattern matcher for AHA) ───────────────────
function _scoreField(value, mapping) {
  if (!value) return 0;
  const v = String(value).toLowerCase();
  for (const key in mapping) {
    if (v.indexOf(key) !== -1) return mapping[key];
  }
  return 0;
}
function calculateLeadScore(d) {
  const t = _scoreField(d.timeline, {
    'asap': 3, '7 days': 3, 'within 7': 3, 'immediate': 3,
    '2 weeks': 2, 'within 14': 2,
    '30 days': 1,
    '60 days': 0, '3-6 months': 0, 'flexible': 0, 'no rush': 0, 'exploring': 0
  });
  const r = _scoreField(d.reason || d.motivation, {
    'foreclosure': 3, 'pre-foreclosure': 3, 'behind': 3,
    'inherit': 2, 'medical': 2, 'hardship': 2, 'tax lien': 2, 'delinquent': 2, 'repairs': 2,
    'other': 1,
    'relocation': 0, 'divorce': 0, 'separation': 0, 'downsizing': 0, 'life change': 0, 'health': 0
  });
  const c = _scoreField(d.condition, {
    'poor': 1, 'distressed': 1, 'severe': 1, 'major repairs': 1, 'major': 1, 'not livable': 1, 'significant work': 1, 'damage': 1, 'needs repairs': 1,
    'fair': 0, 'livable': 0, 'dated': 0, 'cosmetic': 0, 'minor': 0, 'good': 0, 'excellent': 0, 'move-in': 0, 'updated': 0
  });
  return Math.min(10, t + r + c);
}
function isQualifiedForMeta(d) {
  const pt = String(d.propertyType || '').toLowerCase();
  const okType = pt.indexOf('single') !== -1 || pt.indexOf('multi') !== -1 || pt.indexOf('duplex') !== -1;
  const listed = String(d.listed || d.listedOnMarket || d.marketStatus || 'not-listed').toLowerCase();
  const okListed = listed.indexOf('not') !== -1 || listed.indexOf('no -') !== -1 || listed === 'not-listed';
  return okType && okListed;
}
function leadQuality(score) {
  if (score >= 6) return 'premium';
  if (score >= 2) return 'standard';
  return 'low';
}
function disqualifyReasonFor(d) {
  const pt = String(d.propertyType || '').toLowerCase();
  if (pt.indexOf('single') === -1 && pt.indexOf('multi') === -1 && pt.indexOf('duplex') === -1) return 'property_type';
  const listed = String(d.listed || d.listedOnMarket || 'not-listed').toLowerCase();
  if (listed.indexOf('not') === -1 && listed.indexOf('no') === -1) return 'listed';
  return 'unknown';
}
// ──────────────────────────────────────────────────────────────────────

export async function submitFormData(formData, trackingData = {}) {
  const score = calculateLeadScore(formData);
  const quality = leadQuality(score);
  const qualified = isQualifiedForMeta(formData);
  const dqReason = qualified ? null : disqualifyReasonFor(formData);
  const eventId = `lead-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
  const payload = {
    ...formData,
    ...trackingData,
    qualified,
    lead_score: score,
    lead_quality: quality,
    disqualify_reason: dqReason,
    meta_event_id: eventId,
    meta_event_name: qualified ? 'Lead' : 'LeadLowIntent',
    meta_value: qualified ? score * 25 : 0,
  };

  // Fire weighted Meta Pixel event (browser-side; CAPI is a separate later phase)
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      if (qualified) {
        window.fbq('track', 'Lead', {
          value: score * 25, currency: 'USD',
          content_name: 'American Home Advisors Survey', content_category: 'real_estate',
          lead_score: score, lead_quality: quality,
        }, { eventID: eventId });
      } else {
        window.fbq('trackCustom', 'LeadLowIntent', {
          content_name: 'American Home Advisors Survey', content_category: 'real_estate',
          disqualify_reason: dqReason, lead_score: score,
        }, { eventID: eventId });
      }
    }
  } catch (e) { console.error('scoring error:', e); }

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Form submission error:', err);
  }
}
