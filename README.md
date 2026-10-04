# Portfólio (tema anime/Pokémon, roxo e preto)

Site estático em HTML, CSS e JavaScript puros. Sem backend, sem banco de dados e sem dependências.

## Como executar localmente
Abra o `index.html` no navegador (duplo clique). No Linux Mint também funciona: `xdg-open index.html`.

## Onde editar (tudo em `js/script.js`, no objeto `DATA` do topo)
| O que | Onde |
|---|---|
| Nome, cargo, descrição e frase | `name`, `role`, `description`, `heroTech` (tecnologias da Home) |
| Foto/avatar | `avatar` (coloque a imagem em `assets/images/` e use `"assets/images/avatar.jpg"`) |
| Texto do "Sobre mim" | `about` e `aboutTags` |
| Habilidades e níveis | `skills` (campo `level` de 1 a 10; `null` deixa vazio) |
| Experiências | `experience` |
| Projetos | `projects` (`github` e `demo` vazios desativam o botão) |
| Formação, cursos, certificações | `education` |
| GitHub, LinkedIn, e-mail, WhatsApp | `contact` |

Tudo marcado com `[EDITE]` ou `[EXEMPLO]` é placeholder (aparece com borda tracejada). Os níveis das habilidades estão vazios de propósito: preencha com o que você realmente domina.

Cores: variáveis no começo de `css/style.css`.

## Publicar
**GitHub Pages:** crie um repositório, envie os arquivos (`index.html` na raiz) e vá em *Settings → Pages → Deploy from a branch → main / root*. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

**Vercel:** em vercel.com, importe o repositório do GitHub. Como é um site estático, não precisa de configuração (Framework Preset: *Other*).
