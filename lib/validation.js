export function formatPhone(value) {
  let v = value.replace(/\D/g, '');
  if (v.startsWith('1') && v.length > 10) v = v.slice(1);
  if (v.length > 10) v = v.slice(0, 10);
  let f = '';
  if (v.length > 0) f = '(' + v.slice(0, 3);
  if (v.length >= 4) f += ') ' + v.slice(3, 6);
  if (v.length >= 7) f += '-' + v.slice(6, 10);
  return f;
}

export function formatPrice(value) {
  const v = value.replace(/[^0-9]/g, '');
  if (v) return parseInt(v, 10).toLocaleString();
  return '';
}

export function validateEmail(email) {
  if (!email) return true; // email is optional
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
}
