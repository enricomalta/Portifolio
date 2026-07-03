import Script from 'next/script';

export const metadata = {
  title: 'Sobre - Portfólio Enrico Malta',
  description: 'Conheça minha trajetória como pessoa e desenvolvedor',
};

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <a href="/" className="logo">
          <span className="logo-mark">EM</span>
          <span className="logo-copy">Enrico Malta</span>
        </a>

        <div className="bx bx-menu" id="menu-icon"></div>

        <nav className="navbar">
          <a href="/#home">Home</a>
          <a href="/#skills">Habilidades</a>
          <a href="/#projects">Projetos</a>
          <a href="/sobre" className="active">Sobre</a>
          <a href="/#contact">Contato</a>

          <span className="active-nav"></span>
        </nav>
      </header>

      {/* ABOUT SECTION - Trajetória como Pessoa */}
      <section className="about" id="about">
        <h2 className="heading">Minha trajetória como <span>Pessoa</span></h2>

        <div className="about-img">
          <img src="/img/myphoto.jpg" alt="Foto do Enrico" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <p>
            Desde criança, sempre fui uma pessoa muito curiosa e interessada em aprender coisas novas. Eu adorava explorar o mundo ao meu redor, fazer perguntas e buscar respostas. Essa curiosidade me levou a desenvolver uma paixão por tecnologia e programação, mas também me fez perceber que eu tinha um interesse genuíno em entender como as coisas funcionavam, não apenas na área de TI, mas em diversos aspectos da vida.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION - Trajetória como Desenvolvedor */}
      <section className="about" id="about-dev">
        <h2 className="heading">Minha trajetória como <span>Desenvolvedor</span></h2>

        <div className="about-content">
          <p>
            A minha história com tecnologia começou em 2010, quando eu ficava editando códigos no meu servidor de Minecraft pra jogar com os amigos. No começo era só testar e editar algumas coisas. Às vezes quebrava, às vezes conseguia criar coisas novas. Mas, aos poucos, isso foi virando prática e eu comecei a entender como a lógica da programação funcionava.
          </p>

          <p>
            Em 2016, criei o servidor de MTA DayZ e tive meu primeiro contato com Lua. Em 2020, fui pro Tibia. Na época estava tendo uma pandemia e muitas pessoas que jogaram Tibia na infância retornaram ao jogo, porque estava todo mundo em casa. Foi também nesse período que veio o boom das vagas de emprego de TI. Eu estava fazendo a faculdade de Direito, na metade do curso, e não queria simplesmente abandonar a faculdade pra começar uma faculdade de TI. Então comecei a estudar por conta própria e desenvolver 100% os projetos por conta própria, estudando em casa.
          </p>

          <p>
            Criei bots e scripts de automatização para servidores OTList, ou seja, servidores não oficiais da Cipsoft, dona do Tibia. Foi nessa época que parei de só mexer e editar código pronto e comecei a criar minhas próprias soluções do zero, entendendo de verdade como o código funcionava e toda a lógica da programação. Desenvolvi sistemas, scripts e bots 100% AFK, onde o jogador não precisava encostar no teclado ou no mouse. O robô era capaz de fazer todas as ações dentro do jogo, incluindo situações adversas que não estavam sob controle do jogador, como um player atacando e tentando matar o personagem. Se o jogador morresse, o bot fazia ele voltar pro local pra continuar upando; se acabassem as poções, ele identificava antes de acabar e saía da cave pra comprar mais, vendendo o loot também. Basicamente, era um robô imitando um ser humano, fazendo tudo que um jogador faria, o que era bem legal dentro dos servidores OTList.
          </p>

          <p>
            Em 2021, fui para o FiveM e comecei a desenvolver um servidor de GTA RP. Nesse servidor, criei scripts 100% do zero, usando Lua, JavaScript e alguns frameworks de Java, como React, Tailwind e JavaScript Vanilla com CSS. Ponto.
          </p>

          <p>
            Foi meu primeiro contato com desenvolvimento de forma profissional, lidando com demandas reais e prazos, onde tinham pessoas que dependiam do meu trabalho, já que eu era o único desenvolvedor do projeto. Além disso, foi meu primeiro contato com o back-end, pois eu era responsável por tantas funções client-side e server-side, lidando com sincronização em tempo real entre cliente e servidor, que é como o FiveM funciona.
          </p>

          <p>
            Aprendi a desenvolver também anti-cheats, que foi meu primeiro pontapé inicial no back-end. Foi quando comecei a entender como os hackers funcionavam e como blindar sistemas contra cheats. Não foi fácil no início, mas com o tempo e com a ajuda das IAs — no início do ChatGPT — isso me ajudou muito e foi o meu maior boom de desenvolvimento.
          </p>

          <p>
            Quando comecei a usar a IA para estudar, tive de fato aquela clareza mental. Muitas vezes pensei em desistir da TI, achando que não era pra mim, que era muito difícil. Mas ao entender como as coisas funcionavam e superar essas dificuldades, a IA foi aquela luz no fim do túnel. Na época, eu não fazia faculdade de TI, então não tinha professor pra tirar dúvidas, e muitas vezes não achava respostas nem no StackOverflow nem no fórum CFX, responsável pelo FiveM. Mesmo sendo bem documentado, era muito difícil desenvolver naquela época, porque não havia tanta informação disponível na internet. A utilização da IA nesse momento foi crucial pro meu desenvolvimento. Posso dizer que sem ela, eu não seria 80% do que sou hoje.
          </p>

          <p>
            Em 2024, dei um passo importante. Após finalizar minha faculdade de Direito em 2023, decidi começar uma faculdade de TI, porque já dominava o assunto, mas precisava do diploma pra entrar no mercado, que é o que o mercado pedia. Nesse mesmo ano, entrei na MRS, no primeiro período da faculdade de Engenharia de Software. Fiquei seis meses como estagiário desenvolvedor na área de automação e equipagem. Trabalhei com C++, C#, Java legado (Java 8), sistemas antigos com Microsoft Lite, manutenção de código e soluções de automação industrial.
          </p>

          <p>
            Depois da MRS, fui pro INSS, onde fiz um ano e meio de estágio desenvolvendo sistemas do AutoGov e outros internos, tipo o GTI, que controla a parte de TI nas agências de Juiz de Fora. Lá participei do desenvolvimento, manutenção e melhoria de sistemas, além de atuar no helpdesk do dia a dia, lidando com regras de negócio, integrações e demandas internas.
          </p>

          <p>
            Durante todos esses anos, também trabalhei em projetos meus, como o desenvolvimento de um jogo pra blockchain, um bot de automação pra trade de Bitcoin (com possibilidade de adaptar pra qualquer ativo), uma plataforma pra gerenciar bolões da Caixa e alguns pequenos SaaS que ainda estão em desenvolvimento, conforme estão na minha lista de projetos no portfólio.
          </p>

          <p>
            No final, eu uni a minha paixão por jogos com a vontade de aprender desenvolvimento. Desde criança, eu era o garoto prodígio da família e do meu bairro: sempre consertava computadores, resolvia problemas que muitas vezes eu nem sabia direito como solucionar, mas sempre pegava o problema e dava conta da solução.
          </p>

          <p>
            Acredito que a TI funciona basicamente assim: nem sempre existe um passo mágico ou uma receita pronta pra seguir. Muitas vezes a gente precisa improvisar, aprender o problema em tempo real e criar uma solução. E várias vezes também precisa ser criativo, fazendo aquelas gambiarras que acabam se tornando soluções permanentes, como eu costumo dizer.
          </p>

          <p>
            Isso me deu uma capacidade analítica grande de resolver problemas e gerenciar riscos, porque sempre estava lidando com situações que eram um mar aberto — eu nunca sabia o que poderia surgir dali pra frente. Com isso, construí uma base muito sólida, e a faculdade acabou sendo só um caminho pra chegar nos empregos, porque era necessário ter a comprovação acadêmica de que eu sou apto.
          </p>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Enrico | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href="#"><i className='bx bx-up-arrow-alt' ></i></a>
        </div>
      </footer>

      {/* Scripts */}
      <Script src="/js/section.js" strategy="lazyOnload" />
    </>
  );
}
