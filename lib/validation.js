// Validar email com regex
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Sanitizar string para evitar XSS
export function sanitizeString(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str
    .trim()
    .slice(0, 1000) // Limitar tamanho
    .replace(/[<>]/g, '') // Remover tags
    .replace(/[^\w\s\p{L}\p{N}áàâãéèêíïóôõöúçñ.,!?():\-'"/]/gu, ''); // Remover caracteres perigosos
}

// Validar número de telefone (BR)
export function validatePhoneNumber(phone) {
  const phoneRegex = /^(?:\+55\s?)?(?:\(?\d{2}\)?[-\s]?)?9?(\d{4}[-\s]?\d{4})$/;
  const cleanPhone = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && cleanPhone.length >= 10;
}

// Validar campos obrigatórios
export function validateContactForm(data) {
  const errors = [];

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

  if (sanitizeString(data.message).length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Sanitizar objeto inteiro
export function sanitizeContactData(data) {
  return {
    fullName: sanitizeString(data.fullName),
    email: data.email.toLowerCase().trim(),
    phone: data.phone.replace(/\D/g, ''),
    subject: sanitizeString(data.subject),
    message: sanitizeString(data.message),
  };
}
