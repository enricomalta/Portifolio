# Exemplos de Uso da API de Contato

## 1. JavaScript/Fetch

### Exemplo Básico
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fullName: 'João Silva',
    email: 'joao@example.com',
    phone: '(11) 99999-9999',
    subject: 'Quero trabalhar em um projeto',
    message: 'Tenho uma ideia de projeto que gostaria de discutir com você.',
  }),
});

const data = await response.json();
console.log(data);
```

### Com Tratamento de Erros
```javascript
async function sendContact(formData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.status === 429) {
      console.error('Rate limit excedido. Tente novamente mais tarde.');
      return false;
    }

    if (!response.ok) {
      console.error('Erro:', data.error || data.errors);
      return false;
    }

    console.log('Sucesso:', data.message);
    return true;
  } catch (error) {
    console.error('Erro de rede:', error);
    return false;
  }
}

// Usar
const success = await sendContact({
  fullName: 'Maria Santos',
  email: 'maria@example.com',
  phone: '(21) 98888-8888',
  subject: 'Consultoria de projeto',
  message: 'Preciso de ajuda para estruturar meu backend em Node.js',
});
```

## 2. cURL

### Requisição Básica
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "João Silva",
    "email": "joao@example.com",
    "phone": "(11) 99999-9999",
    "subject": "Proposta de Trabalho",
    "message": "Gostaria de iniciar um projeto de desenvolvimento web."
  }'
```

### Com Verificação de Status
```bash
curl -i -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Ana Costa",
    "email": "ana@example.com",
    "phone": "(31) 97777-7777",
    "subject": "Consultoria",
    "message": "Preciso de orientação técnica para meu projeto."
  }'
```

## 3. Node.js (axios)

```javascript
const axios = require('axios');

async function submitForm() {
  try {
    const response = await axios.post('http://localhost:3000/api/contact', {
      fullName: 'Pedro Oliveira',
      email: 'pedro@example.com',
      phone: '(85) 96666-6666',
      subject: 'Desenvolvimento de API',
      message: 'Preciso de uma API robusta para meu aplicativo mobile.',
    });

    console.log('Sucesso:', response.data);
  } catch (error) {
    if (error.response?.status === 429) {
      console.error('Rate limit excedido');
    } else {
      console.error('Erro:', error.response?.data?.error);
    }
  }
}

submitForm();
```

## 4. Python (requests)

```python
import requests
import json

url = "http://localhost:3000/api/contact"
headers = {"Content-Type": "application/json"}

data = {
    "fullName": "Lucas Ferreira",
    "email": "lucas@example.com",
    "phone": "(48) 95555-5555",
    "subject": "Automação de Processos",
    "message": "Gostaria de automatizar alguns processos internos da minha empresa."
}

try:
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 201:
        print("Sucesso:", response.json()["message"])
    elif response.status_code == 429:
        print("Rate limit excedido. Tente novamente mais tarde.")
    else:
        print("Erro:", response.json()["error"])
        
except Exception as e:
    print(f"Erro de rede: {e}")
```

## 5. Postman

1. **Criar Nova Requisição**
   - Método: POST
   - URL: `http://localhost:3000/api/contact`

2. **Headers**
   - Key: `Content-Type`
   - Value: `application/json`

3. **Body** (raw, JSON)
```json
{
  "fullName": "Teste Postman",
  "email": "teste@postman.com",
  "phone": "(99) 99999-9999",
  "subject": "Teste via Postman",
  "message": "Esta é uma mensagem de teste do Postman."
}
```

## Respostas da API

### ✅ Sucesso (201)
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!",
  "id": "document-id-gerado"
}
```

### ❌ Rate Limit (429)
```json
{
  "success": false,
  "error": "Muitas requisições. Tente novamente mais tarde.",
  "retryAfter": 3500
}
```

### ❌ Erro de Validação (400)
```json
{
  "success": false,
  "errors": [
    "Email inválido",
    "Telefone inválido (mínimo 10 dígitos)"
  ]
}
```

### ❌ Erro do Servidor (500)
```json
{
  "success": false,
  "error": "Erro ao processar sua requisição. Tente novamente mais tarde."
}
```

## Campos Obrigatórios

| Campo | Tipo | Validação | Exemplo |
|-------|------|-----------|---------|
| `fullName` | string | Mín 3 chars, máx 1000 | "João Silva" |
| `email` | string | Email válido, máx 254 | "joao@example.com" |
| `phone` | string | Mín 10 dígitos | "(11) 99999-9999" |
| `subject` | string | Mín 3 chars, máx 1000 | "Consultoria" |
| `message` | string | Mín 10 chars, máx 1000 | "Gostaria de..." |

## Rate Limit

- **Limite**: 5 requisições por hora
- **Rastreamento**: Por endereço IP do cliente
- **Código de Resposta**: 429 (Too Many Requests)
- **Header de Resposta**: `Retry-After` (segundos até retry)

## Dicas de Desenvolvimento

1. **Testar Localmente**
   ```bash
   npm run dev
   # Acesse http://localhost:3000/api/contact
   ```

2. **Ver Logs da API**
   - Os logs aparecem no terminal onde você rodou `npm run dev`
   - Útil para debugging

3. **Verificar Dados no Firestore**
   - Abra Firebase Console
   - Vá para Firestore → Collection `contacts`
   - Veja os documentos salvos em tempo real

4. **Testar Rate Limit**
   ```bash
   # Envie 6 requisições rapidamente para testar o limite
   for i in {1..6}; do
     curl -X POST http://localhost:3000/api/contact \
       -H "Content-Type: application/json" \
       -d '{"fullName":"Test","email":"test@test.com","phone":"11999999999","subject":"Test","message":"Test message"}'
   done
   ```

---

Para mais exemplos, consulte o arquivo `app/js/email.js` ou `public/js/email.js`
