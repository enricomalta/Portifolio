export interface ContactFormData {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  [key: string]: unknown;
}

export function validateEmail(email?: string) {
  if (typeof email !== 'string') {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function sanitizeString(str?: string) {
  if (typeof str !== 'string') {
    return '';
  }

  return str
    .trim()
    .slice(0, 1000)
    .replace(/[<>]/g, '')
    .replace(/<[^>]*>/g, '');
}

export function validatePhoneNumber(phone?: string) {
  if (typeof phone !== 'string') {
    return false;
  }

  const phoneRegex = /^(?:\+55\s?)?(?:\(?\d{2}\)?[-\s]?)?9?(\d{4}[-\s]?\d{4})$/;
  const cleanPhone = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && cleanPhone.length >= 10;
}

export function validateContactForm(data: ContactFormData) {
  const errors: string[] = [];

  if (!data.fullName || !sanitizeString(data.fullName)) {
    errors.push('Nome completo é obrigatório');
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Email inválido');
  }

  if (!data.phone || !validatePhoneNumber(data.phone)) {
    errors.push('Número de telefone inválido');
  }

  if (!data.subject || !sanitizeString(data.subject)) {
    errors.push('Assunto é obrigatório');
  }

  if (!data.message || !sanitizeString(data.message)) {
    errors.push('Mensagem é obrigatória');
  }

  if (typeof data.message === 'string' && sanitizeString(data.message).length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function sanitizeContactData(data: ContactFormData) {
  return {
    fullName: sanitizeString(data.fullName),
    email: typeof data.email === 'string' ? data.email.toLowerCase().trim() : '',
    phone: typeof data.phone === 'string' ? data.phone.replace(/\D/g, '') : '',
    subject: sanitizeString(data.subject),
    message: sanitizeString(data.message),
  };
}
