// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Bolão Inssanos',
            description: 'O Inssanos é uma plataforma web completa de gestão de bolões de loterias da Caixa desenvolvida com foco em segurança financeira, experiência do usuário e escalabilidade. Trata-se de um sistema full-stack que permite aos usuários participarem de bolões, gerenciarem suas cotas, realizarem transações financeiras seguras e interagir com um painel administrativo robusto. O projeto foi construído utilizando tecnologias modernas e implementa práticas de segurança rigorosas, essenciais para aplicações que lidam com dados sensíveis e transações monetárias.',
            tech: 'Next.js, React, TypeScript, Tailwind CSS, Firebase/Firestore, shadcn/ui, Jest, Zod, React Hook Form, Mercado Pago, Socket.io, Chart.js, Recharts, Radix UI, PostCSS',
            deploy: 'V1.3.9 Disponível em produção, hospedado na Vercel.',
            link: 'https://www.bolaoinssanos.com.br',
            whitepaper: '/projects/bolao.html'
        },
        {
            title: 'Sabor de Memórias',
            description: 'O Sabor de Memórias é uma plataforma de presentes personalizados que une uma caneca física com uma experiência digital exclusiva. O cliente monta o presente no site, personaliza com fotos, mensagem e mídia, finaliza o pagamento e recebe uma caneca com QR Code. Esse QR Code leva para uma página única criada para aquele momento. Tecnicamente, o projeto roda em Next.js, usa Firebase para armazenar pedidos e Mercado Pago para processar os pagamentos. É um produto que mistura e-commerce, personalização e experiência afetiva em um único fluxo.',
            tech: 'Next.js 15, React 19, App Router, Node.js, Express, Firebase Admin, Firestore, Firebase Storage, Mercado Pago, Mercado Envios, Axios, JavaScript, HTML, CSS, Vercel',
            deploy: 'v0.9 Em desenvolvimento Pre Release.',
            link: 'https://www.sabordememorias.com',
            whitepaper: '/projects/sabor.html'
        },
        {
            title: 'SonharAI',
            description: 'O SonharAI é uma plataforma web de registro e interpretação de sonhos com IA. O usuário registra sonhos e entradas de diário, o sistema estrutura essas informações, cruza contexto emocional e gera análises interpretativas com profundidade variável conforme o plano. O produto tem uma jornada completa de aquisição, autenticação, análise, histórico, painel de acompanhamento e monetização por assinatura. Tecnologicamente, ele foi construído como um SaaS moderno em Next.js com Firebase, integrações de pagamento e uma camada de segurança já relativamente madura para operação real.',
            tech: 'Next.js + React + TypeScript no frontend/backend, Firebase no auth e banco, OpenRouter para IA, Stripe e Mercado Pago para pagamentos, Tailwind + Radix na UI.',
            deploy: 'v0.8.9 Beta disponível.',
            link: 'https://www.sonharia.com.br',
            whitepaper: '/projects/sonharai.html'
        },
        {
            title: 'AI.On',
            description: 'Sistema de gerenciamento de prazos processuais para advogados, com geração automatizada de petições e utilização de chatbot para atendimento e esclarecimento de dúvidas de clientes. Integrações com APIs do PJe, e-Proc, Jusbrasil e CNJ, além de sistemas de notificações por e-mail, SMS e WhatsApp (Meta API), incluindo funcionalidades de atendimento e agendamento automatizado. Plataforma equipada com analisador de textos focado em identificação de sentimentos, contradições e inconsistências. Possui também análise do histórico de decisões do magistrado, correlacionando processos anteriores com o caso atual para identificar padrões decisórios, fundamentações recorrentes e teses frequentemente utilizadas. Inclui analisador de petições adversárias, ferramentas de transcrição de áudio, reconhecimento facial em vídeos, identificação de interlocutores, transcrição com marcação temporal exata e atribuição de falas por pessoa. Conta ainda com análise de prints, documentos e imagens, utilizando inteligência artificial para extração de informações relevantes e apoio à elaboração de petições, pareceres e estratégias processuais.',
            tech: 'Node.js, Next.js, Firebase, OpenAI API, PJ-E API',
            deploy: 'v0.3 Em desenvolvimento.',
            link: null,
            whitepaper: null
        },
        {
            title: 'NaRegua',
            description: '',
            tech: 'Node.js, Next.js, Firebase, OpenAI API, PJ-E API',
            deploy: '',
            link: null,
            whitepaper: null
        },
        {
            title: 'GoodPDF',
            description: '',
            tech: 'Node.js, Next.js, Firebase, OpenAI API, PJ-E API',
            deploy: '',
            link: null,
            whitepaper: null
        },
        {
            title: 'AracBot',
            description: 'AracBot é um sistema avançado de análise e previsão automática de preços de Bitcoin. Ele coleta dados em tempo real de 6 fontes diferentes (técnicas, fundamentais e sentimento de mercado), processa 30+ indicadores técnicos com machine learning e gera previsões precisas para os próximos 24 horas. O sistema funciona continuamente, atualizando previsões a cada hora, validando automaticamente sua acurácia e armazenando um histórico completo de dados para análise de desempenho. Utiliza algoritmos de ensemble (Random Forest + Gradient Boost) para garantir máxima precisão nas previsões de direção e preço alvo. Ideal para traders, analistas e pesquisadores que desejam tomar decisões informadas pelo dados. Oferece múltiplos modos de operação: coleta contínua de dados, backtesting em histórico, simulação (paper trading) e análise de performance. Com avisos de segurança rigorosos e modos demo para testes seguros, é um projeto experimental pronto para produção com suporte completo a APIs da Binance.',
            tech: 'Python 3.8+, pandas, numpy, scikit-learn, TA-Lib, scipy, matplotlib, seaborn, requests, feedparser, python-dotenv, joblib, SQLite, Random Forest, Gradient Boosting, Binance API, Deribit API, CoinGecko API, RSS Feeds, yfinance',
            deploy: 'v0.7 Protótipo em testes antes de lançamento.',
            link: null,
            whitepaper: null
        },
        {
            title: 'AutoGOV.BR',
            description: 'Sistema de reconhecimento facial para geração de senha gov em guiches de autoatendimento, utilizando AI(Machine Learning) para reconhecimento facial e validação de documentos com back-end robusto para alta criticidade e segurança. Projeto desenvolvido em parceria com a DataPrev + Inss(Concendente do Estagio).',
            tech: 'Python, TensorFlow, Flask',
            deploy: 'v0.9 Protótipo em testes antes de lançamento.',
            link: null,
            whitepaper: null
        },
        {
            title: 'MidnightBrasil',
            description: 'Projeto desenvolvido em Lua para servidor de GTA5 (FiveM) client-side e server-side com sistema de economia, corridas, veículos personalizados e interações sociais. O servidor oferece uma experiência imersiva e dinâmica para os jogadores, com foco em realismo e diversão e integração de IA.',
            tech: 'Lua, MySQL, JavaScript, React, HTML, CSS',
            deploy: 'v0.4 Em desenvolvimento.',
            link: 'https://discord.gg/6E8GUSnEaW',
            whitepaper: '/projects/midnight.html'
        },
        {
            title: 'TonFlower',
            description: 'Jogo NFT blockchain da rede Ton feito para rodar em webapps do telegram com transações, chaves de idempotência, sistema de auth conectado a wallet, back-end altamente tratado para criticidade com regras de negocio praticas de segurança zod e honeyspot banco de dados com security acess apenas no servidor. ',
            tech: 'JavaScript Vanilla, MySQL',
            deploy: 'v0.8 Em desenvolvimento.',
            link: 'https://t.me/TonFlowerLandBot',
            whitepaper: '/projects/tonflower.html'
        },
    ];

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');
    const modalDeploy = document.getElementById('modal-deploy');
    const modalLink = document.getElementById('modal-link');
    const modalWhitePapper = document.getElementById('modal-white-papper');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const project = projects[index];
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalTech.textContent = 'Tech stack: ' + project.tech;
            modalDeploy.textContent = 'Deploy: ' + project.deploy;
            if (project.link) {
                modalLink.href = project.link;
                modalLink.style.display = 'inline';

                modalWhitePapper.href = project.whitepaper;
                modalWhitePapper.style.display = 'inline';
            } else {
                modalLink.style.display = 'none';
                modalWhitePapper.style.display = 'none';
            }

            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});
