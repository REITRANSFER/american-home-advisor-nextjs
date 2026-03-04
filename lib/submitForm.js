const WEBHOOK_URL = 'https://n8n.srv1197128.hstgr.cloud/webhook/85395732890';

export async function submitFormData(formData, trackingData = {}) {
  const payload = { ...formData, ...trackingData };
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
