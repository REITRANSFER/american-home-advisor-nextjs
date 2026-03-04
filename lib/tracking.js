export function captureUTMParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const tracking = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid', 'msclkid', 'ttclid'].forEach(param => {
    const val = params.get(param);
    if (val) tracking[param] = val;
  });
  return tracking;
}
