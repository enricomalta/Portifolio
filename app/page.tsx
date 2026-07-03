import Script from 'next/script';

export default function Home() {
    return (
        <>
      <header className="header">
        <a href="#home" className="logo">
          <span className="logo-mark">EM</span>
          <span className="logo-copy">Enrico Malta</span>
        </a>

        <div className="bx bx-menu" id="menu-icon"></div>

        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
          <a href="/sobre">Sobre</a>
          <a href="#contact">Contato</a>
          <span className="active-nav"></span>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-grid">
          <div className="home-content">
            <div className="text-animation">
              <h3>Full-stack, automação, criptografia, IA e software crítico</h3>
            </div>
            <p>
              Desenvolvo aplicações web, mobile e desktop, sistemas de automação e produtos com foco em performance, segurança, experiência do usuário e clareza técnica.
            </p>

            <div className="hero-highlights">
              <div className="hero-pill">
                <i className="bx bx-shield-quarter"></i>
                <span>Segurança e arquitetura</span>
              </div>
              <div className="hero-pill">
                <i className="bx bx-code-alt"></i>
                <span>Documentação e padrões</span>
              </div>
              <div className="hero-pill">
                <i className="bx bx-code-alt"></i>
                <span>Entrega full-stack</span>
              </div>
              <div className="hero-pill">
                <i className="bx bx-line-chart"></i>
                <span>Produtos orientados a resultado</span>
              </div>
            </div>

            <div className="btn-box">
              <a href="#contact" className="btn">Fale Comigo</a>
              <a href="#projects" className="btn">Ver Projetos</a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <strong>8+</strong>
                <span>produtos e protótipos publicados</span>
              </div>
              <div className="stat-card">
                <strong>Full-stack</strong>
                <span>web, automação, IA e integrações</span>
              </div>
              <div className="stat-card">
                <strong>Foco</strong>
                <span>performance, UX e qualidade de código</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card hero-panel-intro">
              <span className="panel-label">Perfil</span>
              <h2>Desenvolvedor com visão de negócio e profundidade técnica.</h2>
              <p>
                Procuro os problemas do seu negócio e busco soluções ou maior agilidade nos fluxos. Atuação em frontend, backend, automação, integrações críticas e produtos com monetização real.
              </p>
            </div>

            <div className="hero-panel-card hero-panel-stack">
              <span className="panel-label">Stack principal</span>
              <ul className="stack-list">
                <li>JavaScript, TypeScript, Python, Lua</li>
                <li>Next.js, React, Node.js, Firebase</li>
                <li>APIs, automação, IA e software corporativo</li>
              </ul>
            </div>

            <div className="hero-panel-card hero-panel-availability">
              <span className="panel-label">Disponibilidade</span>
              <div className="availability-row">
                <span className="availability-dot"></span>
                <p>Disponível para projetos, freelas e oportunidades estratégicas.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-sci">
          <a href="https://www.linkedin.com/in/enrico-malta1/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/enricomalta" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
        </div>

        <div className="home-imgHover">
          <img src="#" alt="" />
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="heading">Minhas<span> Habilidades</span></h2>
        <p className="section-intro">Tecnologias e competências que sustentam a entrega de produtos robustos, escaláveis e bem resolvidos.</p>

        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Coding Skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>JavaScript <span>100%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>Lua <span>100%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>Python <span>100%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>C# <span>60%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>C++ <span>10%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-column">
            <h3 className="title">Soft Skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>Trabalho em Equipe</h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>Capacidade de adaptação</h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>Gerenciamento do Tempo</h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>Pensamento analítico e lógico</h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>Comunicação efetiva</h3>
                  <div className="bar"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="heading">Meus Projetos<span> WEB</span></h2>
        <p className="section-intro">Seleção de produtos com foco em experiência, arquitetura, automação e integração com serviços reais.</p>

        <div className="projects-row">
          <div className="project-card">
            <span className="project-tag">Sistema de Pagamentos</span>
            <img src="/img/bolao.png" alt="Logo Bolão Insanos" />
            <h3>Bolão Inssanos</h3>
            <p>Plataforma completa de bolões com operação financeira, dashboards e stack moderna.</p>
          </div>
          <div className="project-card">
            <span className="project-tag">E-commerce</span>
            <img src="/img/sabordememorias.png" alt="Logo Sabor de Memórias" />
            <h3>Sabor de Memórias</h3>
            <p>Experiência híbrida entre presente físico e jornada digital personalizada.</p>
          </div>
        </div>

        <div className="projects-row">
          <div className="project-card">
            <span className="project-tag">IA Integração</span>
            <img src="/img/sonharai.png" alt="Logo SonharAI" />
            <h3>SonharAI</h3>
            <p>Registro de sonhos com análise inteligente, histórico, assinatura e painel do usuário.</p>
          </div>
          <div className="project-card">
            <span className="project-tag">Legal Tech</span>
            <img src="/img/aion.png" alt="Logo AI.On" />
            <h3>AI.On</h3>
            <p>Gestão de prazos e automação para advocacia com integrações e IA aplicada.</p>
          </div>
        </div>

        <div className="projects-row">
          <div className="project-card">
            <span className="project-tag">Automação</span>
            <img src="/img/naregua.png" alt="Logo NaRegua" />
            <h3>NaRegua</h3>
            <p>Agendamento automatizado, monitoramento de finanças para barbeiros.</p>
          </div>
          <div className="project-card">
            <span className="project-tag">Motor de Processamento</span>
            <img src="/img/goodpdf.png" alt="Logo GoodPDF" />
            <h3>GoodPDF</h3>
            <p>Ferramenta para processamento e manipulação de documentos PDF gratuita.</p>
          </div>
        </div>

        <div className="projects-row">
          <div className="project-card">
            <span className="project-tag">Algoritmo Logistica</span>
            <img src="/img/smartroute.png" alt="Logo SmartRoute" />
            <h3>SmartRoute</h3>
            <p>Ferramenta gratuita com algoritmo para otimização de rotas e logística.</p>
          </div>
          <div className="project-card">
            <span className="project-tag">Motor de Processamento</span>
            <img src="/img/goodpdf.png" alt="Logo GoodPDF" />
            <h3>GoodPDF</h3>
            <p>Ferramenta para processamento e manipulação de documentos PDF gratuita.</p>
          </div>
        </div>

        <h2 className="heading"><span>Softwares</span></h2>
        <div className="projects-row">
          <div className="project-card">
            <span className="project-tag">Data</span>
            <img src="/img/aracbot.png" alt="Logo AracBot" />
            <h3>AracBot</h3>
            <p>Análise preditiva de mercado com múltiplas fontes, indicadores e machine learning.</p>
          </div>
          <div className="project-card">
            <span className="project-tag">GovTech</span>
            <img src="/img/autogov.png" alt="Logo AutoGOV.BR" />
            <h3>AutoGOV.BR</h3>
            <p>Reconhecimento facial e validação documental para cenários críticos de atendimento.</p>
          </div>
        </div>

        <h2 className="heading"><span>Jogos</span></h2>
        <div className="projects-row">
          <div className="project-card">
            <span className="project-tag">FiveM</span>
            <img src="/img/midnight.jpg" alt="Logo Midnight Brasil" />
            <h3>Midnight Brasil</h3>
            <p>Servidor GTA RP com sistemas próprios, economia, interação social e expansão contínua.</p>
          </div>

          <div className="project-card">
            <span className="project-tag">Web3</span>
            <img src="/img/tonflower.png" alt="Logo TonFlower" />
            <h3>TonFlower</h3>
            <p>Game blockchain para Telegram com autenticação, transações e regras seguras de backend.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2 className="heading">Um pouco sobre o <span>Enrico</span></h2>

        <div className="about-img">
          <img src="/img/myphoto.jpg" alt="Foto do Enrico" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <p>
            Minha trajetória combina desenvolvimento prático, construção de produto, estudo contínuo e experiência em ambientes que exigem autonomia, clareza técnica e responsabilidade na execução.
          </p>

          <div className="btn-box btns">
            <a href="/sobre" className="btn">Saiba Mais</a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Vamos trabalhar<span> Juntos</span></h2>
        <p className="section-intro">Entre em contato comigo para discutir seu projeto e como posso ajudar.</p>

        <form>
          <div className="input-box">
            <div className="input-field">
              <input type="text" name="fullName" placeholder="Nome Completo" required />
            </div>
            <div className="input-field">
              <input type="email" name="email" placeholder="Seu Email" required />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="tel" name="phone" placeholder="Número de Telefone" required />
            </div>
            <div className="input-field">
              <input type="text" name="subject" placeholder="Assunto do Email" required />
            </div>
          </div>

          <div className="textarea-field">
            <textarea name="message" placeholder="Sua Mensagem" required></textarea>
          </div>

          <div className="btn-box btns">
            <button type="submit" className="btn">Enviar Mensagem</button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Enrico | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href="#home"><i className="bx bx-up-arrow-alt"></i></a>
        </div>
      </footer>

      <Script src="/js/section.js" strategy="lazyOnload" />
      <Script src="/js/email.js" strategy="lazyOnload" />
    </>
  );
}

