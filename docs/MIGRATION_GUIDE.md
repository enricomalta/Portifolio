# Guia de Migração para Next.js

## ✅ O que foi feito

### 1. Estrutura Next.js Criada
- ✅ App Router (Next.js 13+) configurado
- ✅ `app/layout.js` - Layout principal com Google Fonts
- ✅ `app/page.js` - Página inicial (Home)
- ✅ `app/sobre/page.js` - Página Sobre
- ✅ `app/globals.css` - Todos os estilos consolidados
- ✅ `next.config.js` - Configuração do Next.js

### 2. API Backend Segura
- ✅ `app/api/contact/route.js` - Endpoint POST para salvar contatos
- ✅ `lib/firebase-admin.js` - Inicialização do Firebase Admin SDK
- ✅ `lib/rate-limit.js` - Sistema de rate limit em memória
- ✅ `lib/validation.js` - Validações e sanitizações

### 3. Variáveis de Ambiente
- ✅ `.env.local` criado com estrutura correta
- ✅ Admin SDK credentials (Backend)
- ✅ Client SDK credentials (Frontend)
- ✅ Configuração de Rate Limit

### 4. Scripts do Cliente
- ✅ `public/js/section.js` - Menu e navegação
- ✅ `public/js/email.js` - Handler do formulário de contato
- ✅ `app/js/email.js` - Versão ES6 module

### 5. Documentação
- ✅ `README.md` - Instruções de instalação e uso
- ✅ Este arquivo de migração

---

## 🔧 Próximos Passos

### 1. Instalar Dependências
```bash
npm install
```

### 2. Verificar `.env.local`
Certifique-se que o arquivo `.env.local` está preenchido corretamente com suas credenciais Firebase:

```env
# Firebase Admin SDK
NEXT_PUBLIC_FIREBASE_PROJECT_ID=portifolio-d8431
FIREBASE_PRIVATE_KEY_ID=a346883729fd2d3cfe923377cbfd4d6ab4f10ea2
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@portifolio-d8431.iam.gserviceaccount.com

# Firebase Client SDK
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyB7By222EcdvYeqjnY1AQ9kmPPW2llu9Xs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=portifolio-d8431.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=portifolio-d8431
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=portifolio-d8431.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=308452273736
NEXT_PUBLIC_FIREBASE_APP_ID=1:308452273736:web:0b19087a425b03bcc9327d

# Rate Limit
RATE_LIMIT_REQUESTS=5
RATE_LIMIT_WINDOW_MS=3600000
```

### 3. Configurar Firestore Rules
No Firebase Console, configure as regras do Firestore para zero trust:

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

### 4. Completar Páginas HTML
As páginas foram criadas com a estrutura básica. Complete com:
- [ ] Adicionar seção de habilidades em `app/page.js`
- [ ] Adicionar seção de projetos em `app/page.js`
- [ ] Copiar imagens para `public/img/`
- [ ] Adicionar ícones/fonts para `public/fonts/`
- [ ] Personalizar conteúdo conforme necessário

### 5. Testar Localmente
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## 🔐 Segurança Implementada

### Rate Limit
- ✅ Máximo 5 requisições por IP a cada hora
- ✅ Implementado no servidor (Next.js API)
- ✅ Rastreamento por IP do cliente
- ✅ Resposta HTTP 429 quando limite excedido

### Validações
- ✅ Email: Validação de formato e limite de caracteres
- ✅ Telefone: Validação de formato brasileiro
- ✅ Nomes/Assunto: Limite mínimo e máximo de caracteres
- ✅ Mensagem: Mínimo 10 caracteres
- ✅ Sanitização de strings contra XSS

### Firestore
- ✅ Zero Trust: Sem acesso direto do cliente
- ✅ Admin SDK: Apenas API backend pode escrever
- ✅ Rastreamento: IP e User Agent salvos
- ✅ Timestamp: Registro automático de data/hora

---

## 📝 Fluxo do Formulário de Contato

1. **Frontend (Browser)**
   - Validação básica (js/email.js)
   - Envio para `/api/contact`

2. **Backend (Next.js API)**
   - Verificar Rate Limit (lib/rate-limit.js)
   - Validar dados (lib/validation.js)
   - Sanitizar entrada
   - Salvar no Firestore via Admin SDK (lib/firebase-admin.js)

3. **Firestore**
   - Collection: `contacts`
   - Documento com todos os campos
   - Status inicial: "new"

4. **Frontend (Resposta)**
   - Sucesso: Mensagem verde, limpar form
   - Erro: Mensagem vermelha, manter form

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Alternativas
- [ ] Netlify
- [ ] Railway
- [ ] Render
- [ ] Google Cloud Run

---

## 🐛 Troubleshooting

### Erro: "Firebase Admin SDK not initialized"
- Verificar se `.env.local` está preenchido
- Confirmar variáveis de ambiente no servidor
- Verificar se `FIREBASE_PRIVATE_KEY` tem quebras de linha corretas

### Erro: "Rate limit exceeded"
- Esperar 1 hora
- Ou modificar `RATE_LIMIT_REQUESTS` ou `RATE_LIMIT_WINDOW_MS` no `.env.local`

### Erro: "Email validation failed"
- Verificar formato de email
- Máximo 254 caracteres

### Erro: "Phone validation failed"
- Usar formato: (11) 99999-9999 ou 11999999999
- Mínimo 10 dígitos

---

## 📚 Referências

- [Next.js App Router](https://nextjs.org/docs/app)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

---

## 💡 Dicas

1. **Desenvolvimento Local**
   - Use `npm run dev` para desenvolvimento
   - Os logs da API aparecerão no terminal

2. **Firestore Console**
   - Monitore os documentos em tempo real
   - Verifique se os dados estão sendo salvos corretamente

3. **Variáveis de Ambiente**
   - `.env.local` é incluído no `.gitignore`
   - Não commitar credenciais
   - Para produção, usar variáveis do host

4. **Rate Limit**
   - Em produção, considerar usar Redis
   - Implementação atual é em memória (single instance)

---

Qualquer dúvida ou problema, consulte o README.md ou a documentação oficial.
