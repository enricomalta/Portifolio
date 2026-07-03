/**
 * Email/Contact Form Handler
 * Integrado com API de Next.js
 */

export async function submitContactForm(formData) {
  try {
    // Validação básica frontend (antes de enviar)
    const validation = validateFormLocally(formData);
    if (!validation.valid) {
      return {
        success: false,
        errors: validation.errors,
      };
    }

    // Mostrar loading state
    showLoadingState(true);

    // Fazer requisição para API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Tratar resposta
    const data = await response.json();

    if (!response.ok) {
      // Rate limit
      if (response.status === 429) {
        return {
          success: false,
          error: data.error || 'Muitas requisições. Tente novamente mais tarde.',
          retryAfter: data.retryAfter,
        };
      }

      // Erro de validação
      if (response.status === 400) {
        return {
          success: false,
          errors: data.errors || ['Dados inválidos'],
        };
      }

      // Erro genérico
      return {
        success: false,
        error: data.error || 'Erro ao enviar formulário',
      };
    }

    return {
      success: true,
      message: data.message,
      id: data.id,
    };
  } catch (error) {
    console.error('Erro ao submeter formulário:', error);
    return {
      success: false,
      error: 'Erro ao conectar com servidor. Verifique sua conexão.',
    };
  } finally {
    showLoadingState(false);
  }
}

/**
 * Validação básica do lado do cliente
 */
function validateFormLocally(data) {
  const errors = [];

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.push('Nome deve ter pelo menos 3 caracteres');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Email inválido');
  }

  if (!data.phone || data.phone.replace(/\D/g, '').length < 10) {
    errors.push('Telefone inválido (mínimo 10 dígitos)');
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Assunto deve ter pelo menos 3 caracteres');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validar formato de email
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Mostrar/ocultar estado de loading
 */
function showLoadingState(isLoading) {
  const submitButton = document.querySelector('.contact form .btn');
  if (!submitButton) return;

  if (isLoading) {
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    submitButton.style.opacity = '0.6';
  } else {
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar Mensagem';
    submitButton.style.opacity = '1';
  }
}

/**
 * Mostrar mensagem de erro
 */
export function showError(message) {
  const form = document.querySelector('.contact form');
  if (!form) return;

  // Remover mensagens anteriores
  const existingError = form.querySelector('.form-error');
  if (existingError) {
    existingError.remove();
  }

  // Criar elemento de erro
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  form.insertBefore(errorDiv, form.firstChild);

  // Remover após 5 segundos
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

/**
 * Mostrar mensagem de sucesso
 */
export function showSuccess(message) {
  const form = document.querySelector('.contact form');
  if (!form) return;

  // Remover mensagens anteriores
  const existingMessage = form.querySelector('.form-error, .form-success');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Criar elemento de sucesso
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success';
  successDiv.textContent = message;
  form.insertBefore(successDiv, form.firstChild);

  // Limpar formulário
  form.reset();

  // Remover após 5 segundos
  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

/**
 * Inicializar formulário
 */
export function initContactForm() {
  const form = document.querySelector('.contact form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Coletar dados do formulário
    const formData = {
      fullName: form.querySelector('input[name="fullName"]')?.value || '',
      email: form.querySelector('input[name="email"]')?.value || '',
      phone: form.querySelector('input[name="phone"]')?.value || '',
      subject: form.querySelector('input[name="subject"]')?.value || '',
      message: form.querySelector('textarea[name="message"]')?.value || '',
    };

    // Submeter formulário
    const result = await submitContactForm(formData);

    if (result.success) {
      showSuccess(result.message || 'Mensagem enviada com sucesso!');
    } else if (result.errors) {
      // Múltiplos erros
      showError(result.errors.join('\n'));
    } else {
      // Erro único
      showError(result.error);
    }
  });
}

// Inicializar ao carregar o DOM
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
}
