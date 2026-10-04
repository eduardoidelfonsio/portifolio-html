/* =====================================================================
   PORTFÓLIO — TODOS OS SEUS DADOS FICAM NO OBJETO "DATA" ABAIXO.
   O restante do arquivo apenas desenha a página.
   ===================================================================== */

const DATA = {

  /* ---- Identidade (Home) ---- */

  name: "José Eduardo",

  role: "Estudante de Sistemas de Informação",

  meta: "4º semestre • IFCE – Campus Crato",

  description: "Focado em Python, SQL e desenvolvimento de projetos próprios.",

  heroTech: ["Python", "SQL", "Git", "HTML", "CSS"],

  avatar: "assets/eu.jpg",

  /* ---- Pokémon / imagens ---- */

  pokemon: {
    pokeball: "",

    sprites: {
      home: "assets/images/pokemon/sprite-home.png",
      skills: "assets/images/pokemon/sprite-skills.png",
      projects: "assets/images/pokemon/sprite-projects.png",
      contact: "assets/images/pokemon/sprite-contact.png"
    },

    balls: {
      about: "Foco atual: Python, SQL/MySQL, Git/GitHub, web, algoritmos e estruturas de dados.",
      projects: "Projetos próprios para praticar Python, CRUD, banco de dados e web.",
      footer: "Fim da rota. Se algum projeto te interessou, fala comigo."
    },

    toastKonami: "Código Konami! Um Pokémon selvagem apareceu."
  },

  /* ---- Navegação ---- */

  nav: [
    ["home", "Início"],
    ["sobre", "Sobre"],
    ["habilidades", "Tecnologias"],
    ["experiencia", "Experiência"],
    ["projetos", "Projetos"],
    ["formacao", "Formação"],
    ["contato", "Contato"]
  ],

  /* ---- Sobre mim ---- */

  about: [
    "Sou estudante de Sistemas de Informação no IFCE – Campus Crato e atualmente estou no 4º semestre. Tenho estudado principalmente Python, SQL, bancos de dados e desenvolvimento web, sempre tentando transformar o que aprendo em projetos próprios.",

    "O principal deles é o Central Estudos, um aplicativo desktop com Python, PySide6 e SQLite que estou criando para organizar meus estudos da faculdade.",

    "Também tenho experiência prática com computadores: manutenção, formatação, instalação de sistemas e programas, montagem e diagnóstico de problemas, além de aulas de informática."
  ],

  aboutTags: [
    "Desenvolvimento de software",
    "Bancos de dados",
    "Python",
    "SQL",
    "Projetos práticos"
  ],

  /* ---- Tecnologias ---- */

  skills: [
    {
      type: "Programação",
      icon: "🐍",
      name: "Python",
      desc: "Desenvolvimento de aplicações, funções, estruturas de dados e CRUD."
    },

    {
      type: "Programação",
      icon: "☕",
      name: "Java",
      desc: ""
    },

    {
      type: "Programação",
      icon: "📜",
      name: "JavaScript",
      desc: "Usado neste portfólio."
    },

    {
      type: "Programação",
      icon: "🎨",
      name: "HTML / CSS",
      desc: "Estrutura e estilização de páginas web."
    },

    {
      type: "Banco de dados",
      icon: "🗄️",
      name: "SQL / MySQL",
      desc: "Consultas, CRUD, relacionamentos e bancos de dados."
    },

    {
      type: "Banco de dados",
      icon: "🪶",
      name: "SQLite",
      desc: "Usado no Central Estudos e no ContaUp."
    },

    {
      type: "Banco de dados",
      icon: "🦭",
      name: "MariaDB",
      desc: "Usado no Sistema de Assistência Técnica."
    },

    {
      type: "Ferramentas",
      icon: "🔀",
      name: "Git / GitHub",
      desc: "Versionamento e organização de projetos."
    },

    {
      type: "Ferramentas",
      icon: "🧩",
      name: "VS Code",
      desc: ""
    },

    {
      type: "Ferramentas",
      icon: "🐧",
      name: "Linux",
      desc: ""
    },

    {
      type: "Ferramentas",
      icon: "🪟",
      name: "Windows",
      desc: ""
    },

    {
      type: "Conceitos",
      icon: "🧠",
      name: "Algoritmos",
      desc: ""
    },

    {
      type: "Conceitos",
      icon: "🧱",
      name: "Estruturas de dados",
      desc: ""
    },

    {
      type: "Outras",
      icon: "📊",
      name: "Excel",
      desc: ""
    },

    {
      type: "Outras",
      icon: "📝",
      name: "Word",
      desc: ""
    },

    {
      type: "Outras",
      icon: "🔧",
      name: "Manutenção de computadores",
      desc: "Formatação, instalação de sistemas e programas, drivers, limpeza, montagem e diagnóstico."
    }
  ],

  /* ---- Experiência ---- */

  experience: [
    {
      when: "2023 — atual",
      title: "Manutenção de computadores",
      place: "Atuação autônoma",
      text: "Atuação com manutenção e suporte básico em computadores, incluindo formatação, instalação de sistemas e programas, drivers, limpeza, montagem, desmontagem e diagnóstico de problemas."
    },

    {
      when: "",
      title: "Aulas de informática",
      place: "",
      text: "Experiência com aulas de informática."
    }
  ],

  /* ---- Projetos ---- */

  projects: [

    {
      name: "Central Estudos",
      status: "Em desenvolvimento",
      desc: "Aplicativo desktop criado para organizar meus estudos da faculdade.",
      tech: ["Python", "PySide6", "SQLite"],
      featured: true,
      note: "matérias, estudos, flashcards e organização acadêmica.",
      image: "assets/images/projects/central-estudos.png",
      github: "",
      demo: ""
    },

    {
      name: "ContaUp",
      status: "Projeto pessoal",
      desc: "Aplicação de controle financeiro para registrar e organizar receitas e despesas.",
      tech: ["Python", "SQLite"],
      featured: false,
      image: "assets/images/projects/contaup.png",
      github: "",
      demo: ""
    },

    {
      name: "Sistema de Assistência Técnica",
      status: "Em desenvolvimento",
      desc: "Sistema para gerenciar uma assistência técnica: clientes, equipamentos e serviços.",
      tech: ["Python", "MariaDB"],
      featured: false,
      image: "assets/images/projects/assistencia-tecnica.png",
      github: "",
      demo: ""
    },

    {
      name: "Loja de Games",
      status: "Projeto pessoal",
      desc: "Projeto web para praticar a estruturação e a estilização de páginas.",
      tech: ["HTML", "CSS"],
      featured: false,
      image: "assets/images/projects/loja-games.png",
      github: "",
      demo: ""
    },

    {
      name: "Meu Portfólio",
      status: "Publicado",
      desc: "Este portfólio, feito para apresentar meus projetos e minha evolução na área de tecnologia.",
      tech: ["HTML", "CSS", "JavaScript"],
      featured: false,
      image: "assets/images/projects/portfolio.png",
      github: "https://github.com/eduardoidelfonsio/portifolio-html",
      demo: ""
    }
  ],

  /* ---- Formação ---- */

  education: [

    {
      kind: "Formação",
      title: "Sistemas de Informação",
      place: "IFCE – Campus Crato",
      when: "Cursando — 4º semestre"
    },

    {
      kind: "Curso",
      title: "Excel 2016 Básico",
      place: "Fundação Bradesco – Escola Virtual",
      when: "2026 — 15 horas"
    }
  ],

  /* ---- Contato ---- */

  contact: [

    {
      label: "GitHub",
      icon: "🐙",
      url: "https://github.com/eduardoidelfonsio"
    },

    {
      label: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/josé-eduardo-509533370"
    },

    {
      label: "E-mail",
      icon: "✉️",
      url: "mailto:joseidelfonsio123@gmail.com"
    }
  ]
};


/* =====================================================================
   FUNÇÕES AUXILIARES
   ===================================================================== */

const $ = id => document.getElementById(id);

const esc = s =>
  String(s).replace(
    /[&<>"]/g,
    c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    }[c])
  );


/* =========================================================
   HOME
   ========================================================= */

function renderHome() {

  document.title =
    `${DATA.name} | Estudante de Sistemas de Informação`;

  const brand = $("brand");
  if (brand) {
    brand.textContent = DATA.name;
  }

  const heroName = $("hero-name");
  if (heroName) {
    heroName.textContent = DATA.name;
  }

  const heroRole = $("hero-role");
  if (heroRole) {
    heroRole.textContent = DATA.role;
  }

  const heroMeta = $("hero-meta");
  if (heroMeta) {
    heroMeta.textContent = DATA.meta;
  }

  const heroDesc = $("hero-desc");
  if (heroDesc) {
    heroDesc.textContent = DATA.description;
  }

  const heroTech = $("hero-tech");

  if (heroTech) {
    heroTech.innerHTML = DATA.heroTech
      .map(t => `<span class="chip">${esc(t)}</span>`)
      .join("");
  }

  const gh = DATA.contact.find(
    c => c.label === "GitHub"
  );

  const btnGithub = $("btn-github");

  if (btnGithub) {

    if (gh) {
      btnGithub.href = gh.url;
    } else {
      btnGithub.remove();
    }

  }

  const initials = DATA.name
    .split(" ")
    .map(w => w[0])
    .slice(0, 2)
    .join("");

  const avatar = $("avatar");

  if (avatar) {

    avatar.innerHTML = DATA.avatar
      ? `<img
          src="${esc(DATA.avatar)}"
          alt="Foto de ${esc(DATA.name)}"
          onerror="this.parentNode.textContent='${esc(initials)}'"
        >`
      : esc(initials);

  }
}


/* =========================================================
   SOBRE
   ========================================================= */

function renderAbout() {

  const about = $("about");

  if (!about) return;

  about.innerHTML =
    DATA.about
      .map(p => `<p>${esc(p)}</p>`)
      .join("") +

    `<div class="chips">
      ${DATA.aboutTags
        .map(t => `<span class="chip">${esc(t)}</span>`)
        .join("")}
    </div>`;
}


/* =========================================================
   TECNOLOGIAS
   ========================================================= */

function renderSkills(filter = "Todas") {

  const tabs = $("tabs");
  const skills = $("skills");

  if (!tabs || !skills) return;

  const cats = [
    "Todas",
    ...new Set(DATA.skills.map(s => s.type))
  ];

  tabs.innerHTML = cats
    .map(
      c =>
        `<button
          class="${c === filter ? "on" : ""}"
          data-c="${esc(c)}"
        >
          ${esc(c)}
        </button>`
    )
    .join("");

  tabs
    .querySelectorAll("button")
    .forEach(
      b =>
        b.onclick = () =>
          renderSkills(b.dataset.c)
    );

  skills.innerHTML =
    DATA.skills
      .filter(
        s =>
          filter === "Todas" ||
          s.type === filter
      )
      .map(
        s =>
          `<article class="card glass skill">

            <div class="row">

              <span
                class="icon"
                aria-hidden="true"
              >
                ${s.icon}
              </span>

              <div>
                <h3>${esc(s.name)}</h3>
                <p class="cat">${esc(s.type)}</p>
              </div>

            </div>

            ${
              s.desc
                ? `<p class="d">${esc(s.desc)}</p>`
                : ""
            }

          </article>`
      )
      .join("");
}


/* =========================================================
   EXPERIÊNCIA
   ========================================================= */

function renderTimeline() {

  const timeline = $("timeline");

  if (!timeline) return;

  timeline.innerHTML =
    DATA.experience
      .map(
        e =>
          `<li>

            <div class="card glass">

              <h3>${esc(e.title)}</h3>

              ${
                e.place
                  ? `<p class="place">${esc(e.place)}</p>`
                  : ""
              }

              ${
                e.when
                  ? `<span class="when">${esc(e.when)}</span>`
                  : ""
              }

              ${
                e.text
                  ? `<p>${esc(e.text)}</p>`
                  : ""
              }

            </div>

          </li>`
      )
      .join("");
}


/* =========================================================
   PROJETOS
   ========================================================= */

function renderProjects() {

  const projects = $("projects");

  if (!projects) return;

  const btn = (label, url) =>
    url
      ? `<a
          class="btn"
          href="${esc(url)}"
          target="_blank"
          rel="noopener"
        >
          ${label}
        </a>`

      : `<span
          class="btn off"
          aria-disabled="true"
        >
          ${label}
        </span>`;

  projects.innerHTML =
    DATA.projects
      .map(
        p =>
          `<article
            class="card glass project${
              p.featured ? " featured" : ""
            }"
          >

            <div class="shot">

              <span>
                Captura de tela em breve
              </span>

              ${
                p.image
                  ? `<img
                      src="${esc(p.image)}"
                      alt="Captura de tela de ${esc(p.name)}"
                      loading="lazy"
                      onerror="this.remove()"
                    >`
                  : ""
              }

            </div>

            <div class="pbody">

              <span class="status">
                Status: ${esc(p.status)}
              </span>

              <h3>${esc(p.name)}</h3>

              <p>${esc(p.desc)}</p>

              ${
                p.note
                  ? `<p class="learned">
                      <b>Recursos:</b>
                      ${esc(p.note)}
                    </p>`
                  : ""
              }

              <div class="tech">
                ${p.tech.map(esc).join(" • ")}
              </div>

              <div class="actions">

                ${btn("GitHub", p.github)}

                ${btn("Demo", p.demo)}

              </div>

            </div>

          </article>`
      )
      .join("");
}


/* =========================================================
   POKÉMON / EASTER EGGS
   ========================================================= */

function initPokemon() {

  const P = DATA.pokemon;

  const toast = $("toast");

  let timer;

  const say = msg => {

    if (!toast) return;

    toast.textContent = msg;

    toast.classList.add("on");

    clearTimeout(timer);

    timer = setTimeout(
      () =>
        toast.classList.remove("on"),
      3800
    );
  };


  /* Pokébolas */

  document
    .querySelectorAll("[data-ball]")
    .forEach(slot => {

      const msg =
        P.balls[slot.dataset.ball];

      if (!msg) return;

      slot.innerHTML =
        `<button
          class="ball"
          type="button"
          aria-label="Curiosidade"
        >
          ${
            P.pokeball
              ? `<img
                  src="${esc(P.pokeball)}"
                  alt=""
                >`
              : ""
          }
        </button>`;

      const button = slot.firstElementChild;

      if (button) {

        button.onclick = e => {

          const b = e.currentTarget;

          b.classList.remove("pop");

          void b.offsetWidth;

          b.classList.add("pop");

          say(msg);
        };

      }

    });


  /* Sprites */

  document
    .querySelectorAll(".sprite")
    .forEach(box => {

      const src =
        P.sprites[box.dataset.slot];

      if (!src) return;

      box.innerHTML =
        `<img
          src="${esc(src)}"
          alt=""
          loading="lazy"
          onerror="this.parentNode.remove()"
        >`;

      box.onclick = () => {

        box.classList.remove("hop");

        void box.offsetWidth;

        box.classList.add("hop");

      };

      if ("IntersectionObserver" in window) {

        const section =
          box.closest("section");

        if (section) {

          new IntersectionObserver(
            (entries, observer) => {

              if (entries[0].isIntersecting) {

                box.classList.add("seen");

                observer.disconnect();

              }

            },
            {
              threshold: 0.3
            }
          ).observe(section);

        }

      }

    });


  /* Código Konami */

  const code = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];

  let pos = 0;

  addEventListener(
    "keydown",
    e => {

      pos =
        e.key === code[pos]
          ? pos + 1
          : e.key === code[0]
            ? 1
            : 0;

      if (pos === code.length) {

        pos = 0;

        document.body.classList.toggle(
          "party"
        );

        say(P.toastKonami);

      }

    }
  );


  console.log(
    "%cJosé Eduardo — portfólio em HTML, CSS e JavaScript puros.",
    "color:#c4b5fd;font-weight:bold"
  );
}


/* =========================================================
   ANIMAÇÃO DAS SEÇÕES
   ========================================================= */

function initReveal() {

  if (
    !("IntersectionObserver" in window)
  ) return;

  const io =
    new IntersectionObserver(
      entries =>
        entries.forEach(e => {

          if (!e.isIntersecting) return;

          e.target.classList.add("in");

          io.unobserve(e.target);

        }),
      {
        threshold: 0.08
      }
    );

  document
    .querySelectorAll(
      "main section:not(#home)"
    )
    .forEach(section => {

      section.classList.add("reveal");

      io.observe(section);

    });
}


/* =========================================================
   FORMAÇÃO
   ========================================================= */

function renderEducation() {

  const education = $("education");

  if (!education) return;

  education.innerHTML =
    DATA.education
      .map(
        e =>
          `<article class="card glass">

            <span class="kind">
              ${esc(e.kind)}
            </span>

            <h3>
              ${esc(e.title)}
            </h3>

            <p>
              ${esc(e.place)}
            </p>

            <span class="when">
              ${esc(e.when)}
            </span>

          </article>`
      )
      .join("");
}


/* =========================================================
   CONTATO
   ========================================================= */

function renderContact() {

  const contact = $("contact");

  if (!contact) return;

  contact.innerHTML =
    DATA.contact
      .map(
        c =>
          `<a
            class="card glass"
            href="${esc(c.url)}"
            target="_blank"
            rel="noopener"
          >

            <span
              class="ic"
              aria-hidden="true"
            >
              ${c.icon}
            </span>

            <h3>
              ${esc(c.label)}
            </h3>

          </a>`
      )
      .join("");

  const footer = $("footer");

  if (footer) {
    footer.textContent =
      `© ${new Date().getFullYear()} ${DATA.name}`;
  }
}


/* =========================================================
   NAVEGAÇÃO
   ========================================================= */

function renderNav() {

  const nav = $("nav");

  if (!nav) return;

  nav.innerHTML =
    DATA.nav
      .map(
        ([id, label]) =>
          `<a href="#${id}">
            ${esc(label)}
          </a>`
      )
      .join("");

  const links =
    [...nav.querySelectorAll("a")];

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const io =
    new IntersectionObserver(
      entries =>
        entries.forEach(en => {

          if (!en.isIntersecting) return;

          links.forEach(a =>
            a.classList.toggle(
              "active",
              a.hash === "#" + en.target.id
            )
          );

          const on =
            nav.querySelector(".active");

          if (on) {

            nav.scrollTo({
              left:
                on.offsetLeft - 16,
              behavior: "smooth"
            });

          }

        }),
      {
        rootMargin:
          "-45% 0px -50% 0px"
      }
    );

  DATA.nav.forEach(
    ([id]) => {

      const section = $(id);

      if (section) {
        io.observe(section);
      }

    }
  );
}


/* =========================================================
   EXECUÇÃO
   ========================================================= */

[
  renderHome,
  renderAbout,
  renderSkills,
  renderTimeline,
  renderProjects,
  renderEducation,
  renderContact,
  renderNav,
  initPokemon,
  initReveal
].forEach(fn => {

  try {

    fn();

  } catch (error) {

    console.error(
      `Erro ao executar ${fn.name}:`,
      error
    );

  }

});