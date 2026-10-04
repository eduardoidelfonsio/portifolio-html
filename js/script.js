
/* =====================================================================
   PORTFÓLIO — TODOS OS SEUS DADOS FICAM NO OBJETO "DATA" ABAIXO.
   O restante do arquivo apenas desenha a página.
   ===================================================================== */

const DATA = {

  /* ---- Identidade (Home) ---- */

  name: "José Eduardo",

  role: "Estudante de Sistemas de Informação | Desenvolvedor em formação",

  heroTech: ["Python", "SQL", "Git", "HTML", "CSS"],

  description:
    "Estudante de Sistemas de Informação no IFCE – Campus Crato, com interesse em desenvolvimento de software, bancos de dados e criação de projetos práticos.",

  avatar: "assets/eu.jpg",

  trainerLevel: "4º semestre",

  xpPercent: 40,


  /* ---- Navegação ---- */

  nav: [
    ["home", "Início"],
    ["sobre", "Sobre"],
    ["habilidades", "Habilidades"],
    ["experiencia", "Experiência"],
    ["projetos", "Projetos"],
    ["formacao", "Formação"],
    ["contato", "Contato"]
  ],


  /* ---- Sobre mim ---- */

  about: [
    "Curso Sistemas de Informação no IFCE – Campus Crato e estou no 4º semestre.",

    "Tenho interesse principalmente em desenvolvimento de software, programação e bancos de dados.",

    "Busco transformar o conhecimento adquirido na faculdade em projetos práticos e continuar desenvolvendo minhas habilidades na área de tecnologia."
  ],

  aboutTags: [
    "Desenvolvimento de software",
    "Bancos de dados",
    "Python",
    "SQL",
    "Projetos práticos"
  ],


  /* ---- Habilidades ----
     level: número de 1 a 10.
     rank: classificação exibida junto ao nível.
     */

  skills: [

    /* Programação */

    {
      type: "Programação",
      icon: "🐍",
      name: "Python",
      level: 7,
      rank: "Intermediário"
    },

    {
      type: "Programação",
      icon: "☕",
      name: "Java",
      level: 5,
      rank: "Básico / Intermediário"
    },

    {
      type: "Programação",
      icon: "🌐",
      name: "HTML",
      level: 5,
      rank: "Básico / Intermediário"
    },

    {
      type: "Programação",
      icon: "🎨",
      name: "CSS",
      level: 5,
      rank: "Básico / Intermediário"
    },


    /* Banco de dados */

    {
      type: "Banco de dados",
      icon: "🗄️",
      name: "SQL",
      level: 7,
      rank: "Intermediário"
    },

    {
      type: "Banco de dados",
      icon: "🐬",
      name: "MySQL",
      level: 7,
      rank: "Intermediário"
    },

    {
      type: "Banco de dados",
      icon: "🪶",
      name: "SQLite",
      level: 7,
      rank: "Intermediário"
    },

    {
      type: "Banco de dados",
      icon: "🦭",
      name: "MariaDB",
      level: 5,
      rank: "Básico / Intermediário"
    },


    /* Ferramentas */

    {
      type: "Ferramentas",
      icon: "🔀",
      name: "Git",
      level: 4,
      rank: "Básico"
    },

    {
      type: "Ferramentas",
      icon: "🐙",
      name: "GitHub",
      level: 4,
      rank: "Básico"
    },

    {
      type: "Ferramentas",
      icon: "🧩",
      name: "VS Code",
      level: 7,
      rank: "Intermediário"
    },

    {
      type: "Ferramentas",
      icon: "🐧",
      name: "Linux",
      level: 6,
      rank: "Intermediário"
    },

    {
      type: "Ferramentas",
      icon: "🪟",
      name: "Windows",
      level: 6,
      rank: "Intermediário"
    },


    /* Outras */

    {
      type: "Outras",
      icon: "📊",
      name: "Excel",
      level: 5,
      rank: "Básico / Intermediário"
    },

    {
      type: "Outras",
      icon: "📝",
      name: "Word",
      level: 4,
      rank: "Básico"
    },

    {
      type: "Outras",
      icon: "🔧",
      name: "Manutenção de computadores",
      level: 7,
      rank: "Intermediário"
    }

  ],


  /* ---- Experiência ---- */

  experience: [

    {
      when: "2023 — atual",

      title: "Manutenção de computadores",

      place: "Atuação autônoma",

      text:
        "Atuação sob demanda com formatação, instalação do Windows e programas, configuração de drivers, limpeza e manutenção física, montagem e desmontagem de computadores e diagnóstico de problemas."
    }

  ],


  /* ---- Projetos ---- */

  projects: [

    {
      name: "ContaUp",

      status: "Projeto pessoal",

      desc:
        "Aplicação de controle financeiro desenvolvida para registrar e organizar receitas e despesas.",

      tech: [
        "Python",
        "SQLite"
      ],

      github: "",

      demo: ""
    },


    {
      name: "Sistema de Assistência Técnica",

      status: "Em desenvolvimento",

      desc:
        "Sistema para gerenciamento de uma assistência técnica, com cadastro de clientes, equipamentos e serviços.",

      tech: [
        "Python",
        "MariaDB"
      ],

      github: "",

      demo: ""
    },


    {
      name: "Loja de Games",

      status: "Projeto pessoal",

      desc:
        "Projeto web desenvolvido para praticar estruturação de páginas, organização de conteúdo e estilização.",

      tech: [
        "HTML",
        "CSS"
      ],

      github: "",

      demo: ""
    }

  ],


  /* ---- Formação e certificações ---- */

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
   A PARTIR DAQUI: código que desenha a página
   NÃO PRECISA EDITAR
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

const isPlaceholder = s =>
  /\[EDITE\]|\[EXEMPLO\]/.test(s);


/* =========================================================
   HOME
   ========================================================= */

function renderHome() {

  document.title = `${DATA.name} | Portfólio`;

  $("brand").textContent = DATA.name;

  $("hero-name").textContent = DATA.name;

  $("hero-role").textContent = DATA.role;

  $("hero-desc").textContent = DATA.description;

  $("hero-tech").innerHTML =
    DATA.heroTech
      .map(t => `<span class="chip">${esc(t)}</span>`)
      .join("");

  $("t-name").textContent = DATA.name;

  $("t-level").textContent = DATA.trainerLevel;

  const initials = DATA.name
    .split(" ")
    .map(w => w[0])
    .slice(0, 2)
    .join("");

  $("avatar").innerHTML =
    DATA.avatar
      ? `<img src="${esc(DATA.avatar)}" alt="Foto de ${esc(DATA.name)}">`
      : esc(initials);

  const certs =
    DATA.education.filter(e => e.kind !== "Formação").length;

  const stats = [
    ["Tecnologias", DATA.skills.length],
    ["Projetos", DATA.projects.length],
    ["Experiências", DATA.experience.length],
    ["Cursos e certificações", certs]
  ];

  $("stats").innerHTML =
    stats
      .map(([k, v]) =>
        `<div><dt>${k}</dt><dd>${v}</dd></div>`
      )
      .join("");

  setTimeout(
    () => $("xp-fill").style.width = DATA.xpPercent + "%",
    300
  );
}


/* =========================================================
   SOBRE
   ========================================================= */

function renderAbout() {

  $("about").innerHTML =
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
   HABILIDADES
   ========================================================= */

function renderSkills(filter = "Todas") {

  const cats = [
    "Todas",
    ...new Set(DATA.skills.map(s => s.type))
  ];

  $("tabs").innerHTML =
    cats
      .map(c =>
        `<button
          class="${c === filter ? "on" : ""}"
          data-c="${esc(c)}"
        >
          ${esc(c)}
        </button>`
      )
      .join("");

  $("tabs")
    .querySelectorAll("button")
    .forEach(
      b => b.onclick = () => renderSkills(b.dataset.c)
    );

  $("skills").innerHTML =
    DATA.skills
      .filter(
        s =>
          filter === "Todas" ||
          s.type === filter
      )
      .map(s => {

        const lv =
          Number.isInteger(s.level)
            ? Math.max(0, Math.min(10, s.level))
            : null;

        const pips =
          Array
            .from(
              { length: 10 },
              (_, i) =>
                `<i class="${lv !== null && i < lv ? "f" : ""}"></i>`
            )
            .join("");

        const label =
          lv !== null
            ? `Lv. ${lv}${s.rank ? " · " + s.rank : ""}`
            : (s.rank || "Nível a definir");

        return `
          <article class="card glass skill">

            <div class="row">

              <span
                class="icon"
                aria-hidden="true"
              >
                ${s.icon}
              </span>

              <div>

                <h3>
                  ${esc(s.name)}
                </h3>

                <p class="cat">
                  ${esc(s.type)}
                </p>

              </div>

            </div>

            <div
              class="pips"
              aria-hidden="true"
            >
              ${pips}
            </div>

            <div class="lv">
              ${esc(label)}
            </div>

          </article>
        `;

      })
      .join("");
}


/* =========================================================
   EXPERIÊNCIA
   ========================================================= */

function renderTimeline() {

  $("timeline").innerHTML =
    DATA.experience
      .map(e =>
        `<li>

          <div class="card glass ${isPlaceholder(e.when + e.text) ? "placeholder" : ""}">

            <h3>
              ${esc(e.title)}
            </h3>

            ${
              e.place
                ? `<p class="place">${esc(e.place)}</p>`
                : ""
            }

            <span class="when">
              ${esc(e.when)}
            </span>

            <p>
              ${esc(e.text)}
            </p>

          </div>

        </li>`
      )
      .join("");
}


/* =========================================================
   PROJETOS
   ========================================================= */

function renderProjects() {

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

  $("projects").innerHTML =
    DATA.projects
      .map(p =>
        `<article
          class="card glass project ${isPlaceholder(p.name) ? "placeholder" : ""}"
        >

          <span class="status">
            Status: ${esc(p.status)}
          </span>

          <h3>
            ${esc(p.name)}
          </h3>

          <p>
            ${esc(p.desc)}
          </p>

          <div class="tech">
            ${p.tech.map(esc).join(" • ")}
          </div>

          <div class="actions">
            ${btn("GitHub", p.github)}
            ${btn("Demo", p.demo)}
          </div>

        </article>`
      )
      .join("");
}


/* =========================================================
   FORMAÇÃO
   ========================================================= */

function renderEducation() {

  $("education").innerHTML =
    DATA.education
      .map(e =>
        `<article
          class="card glass ${isPlaceholder(e.title) ? "placeholder" : ""}"
        >

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

  $("contact").innerHTML =
    DATA.contact
      .map(c =>
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

  $("footer").textContent =
    `© ${new Date().getFullYear()} ${DATA.name}`;
}


/* =========================================================
   NAVEGAÇÃO
   ========================================================= */

function renderNav() {

  $("nav").innerHTML =
    DATA.nav
      .map(
        ([id, label]) =>
          `<a href="#${id}">
            ${esc(label)}
          </a>`
      )
      .join("");

  const links =
    [...$("nav").querySelectorAll("a")];

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
            $("nav").querySelector(".active");

          if (on) {

            $("nav").scrollTo({
              left: on.offsetLeft - 16,
              behavior: "smooth"
            });

          }

        }),

      {
        rootMargin: "-45% 0px -50% 0px"
      }
    );

  DATA.nav.forEach(
    ([id]) => io.observe($(id))
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
  renderNav
].forEach(fn => fn());