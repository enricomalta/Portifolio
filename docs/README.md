# Portfólio - Next.js

Portfólio moderno com integração ao Firebase Firestore e API backend segura com rate limit.

## 🚀 Instalação

### 1. Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as variáveis do Firebase Admin SDK:

```env
# Firebase Admin SDK (Backend - Next.js API)
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu-project-id
FIREBASE_PRIVATE_KEY_ID=sua-private-key-id
FIREBASE_PRIVATE_KEY="sua-private-key"
FIREBASE_CLIENT_EMAIL=seu-client-email

# Firebase Client SDK (Frontend)
NEXT_PUBLIC_FIREBASE_API_KEY=sua-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=seu-app-id

# Rate Limit Configuration
RATE_LIMIT_REQUESTS=5
RATE_LIMIT_WINDOW_MS=3600000
```

### 3. Iniciar o Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📋 Estrutura do Projeto

```
portifolio/
├── app/                      # App Router (Next.js 13+)
│   ├── api/
│   │   └── contact/
│   │       └── route.js      # API para salvar contatos
│   ├── sobre/
│   │   └── page.js          # Página Sobre
│   ├── globals.css          # Estilos globais
│   ├── layout.js            # Layout principal
│   └── page.js              # Página inicial
├── lib/
│   ├── firebase-admin.js    # Configuração Firebase Admin SDK
│   ├── rate-limit.js        # Implementação de rate limit
│   └── validation.js        # Validações e sanitizações
├── public/
│   ├── img/                 # Imagens
│   ├── fonts/               # Fontes customizadas
│   └── js/
│       ├── section.js       # Scripts de navegação
│       └── email.js         # Handler do formulário de contato
├── .env.local               # Variáveis de ambiente (NÃO commitar)
├── next.config.js           # Configuração do Next.js
└── package.json             # Dependências
```

## 🔒 Segurança

### Firestore Zero Trust
O Firestore está configurado em modo zero trust (nenhum acesso direto). Todas as operações passam pela API backend que usa o Admin SDK.

### Rate Limit
- Máximo de 5 requisições por IP a cada hora
- Configurável via `.env.local`
- Implementado em memória (servidor)

### Validações
- Validação de email
- Validação de telefone (BR)
- Sanitização de strings (XSS protection)
- Limite de caracteres
- Verificação de comprimento mínimo

## 📝 Usando a API de Contato

### Request
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fullName: 'Seu Nome',
    email: 'seu@email.com',
    phone: '(11) 99999-9999',
    subject: 'Assunto da mensagem',
    message: 'Sua mensagem aqui...',
  }),
});

const data = await response.json();
```

### Response (Sucesso)
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!",
  "id": "doc-id"
}
```

### Response (Erro)
```json
{
  "success": false,
  "error": "Descrição do erro"
}
```

## 🗄️ Estrutura do Firestore

Collection: `contacts`

Documento:
```javascript
{
  fullName: string,
  email: string,
  phone: string,
  subject: string,
  message: string,
  ipAddress: string,
  userAgent: string,
  createdAt: string (ISO 8601),
  status: 'new' | 'read' | 'responded'
}
```

## 🔐 Regras do Firestore

Configure as regras do Firestore para zero trust:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

A API backend usando Admin SDK tem permissão total.

## 📦 Build e Deploy

### Build
```bash
npm run build
```

### Iniciar em Produção
```bash
npm run start
```

## 🔧 Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | ID do projeto Firebase | `portifolio-d8431` |
| `FIREBASE_PRIVATE_KEY_ID` | ID da chave privada | Obtém no Firebase Console |
| `FIREBASE_PRIVATE_KEY` | Chave privada (Admin SDK) | `-----BEGIN PRIVATE KEY-----...` |
| `FIREBASE_CLIENT_EMAIL` | Email do serviço | `firebase-adminsdk-...@...iam.gserviceaccount.com` |
| `RATE_LIMIT_REQUESTS` | Máximo de requisições | `5` |
| `RATE_LIMIT_WINDOW_MS` | Janela de tempo (ms) | `3600000` (1 hora) |

## 📚 Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)

## 👨‍💻 Autor

Enrico Malta

## 📄 Licença

MIT
