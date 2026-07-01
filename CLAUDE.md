# Koltrex — rodando no ArkhTrex Framework

Este projeto é o **site institucional da Koltrex** e ao mesmo tempo um workspace
do **ArkhTrex Framework** (sistema operacional do negócio dentro do Claude Code).

A primeira metade deste arquivo são as regras de operação do framework (como o
Claude lê contexto, aprende com correções e mantém tudo atualizado). A segunda
metade é o contexto específico deste projeto (o site).

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem e
estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao sugerir
prioridades, formatos ou abordagens, considerar o foco atual descrito em
`estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo — que aponta para o
sistema de marca completo em `identidade/KOLTREX-BRAND.md` e o guia social em
`identidade/KOLTREX-INSTAGRAM.md`.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o
contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante em
`.claude/skills/`. Se encontrar, seguir as instruções da skill. Se não
encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o usuário
provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o padrão de
repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma instrução que
parece permanente (frases como "na verdade é assim", "não faça mais isso",
"prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar
mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato. Só perguntar quando
a informação tiver valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill nova,
mudança de foco, processo novo, ferramenta instalada, estrutura alterada),
perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro, só
adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe skill similar em `.claude/skills/` pra usar como base
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar o
   conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos), criar dentro
   da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---
---

# Contexto deste projeto — Site institucional Koltrex

```yaml
projeto: "Site institucional da Koltrex"
tipo: "Projeto próprio (não é cliente)"
descricao: "Site principal da Koltrex — apresenta serviços e gera contato via WhatsApp"
email: "koltrexnew@gmail.com"
contato_whatsapp: "+55 77 99975-1815"
```

## Tech stack
```yaml
linguagens:
  - HTML5 semântico
  - CSS3 vanilla (design system próprio)
  - JavaScript vanilla
fontes: "Google Fonts — Outfit (display/UI) + Geist Mono (labels/dados)"
build: "Nenhum — site estático puro"
deploy:
  plataforma: "Vercel"
  url: "https://koltrex.vercel.app/"
  repositorio: "GitHub (ArkalKoltrex-blip/koltrex-site)"
  entrada: "index.html na raiz"
  servidor: "serve (npm)"
```

## Serviços apresentados no site
```yaml
servicos:
  - { nome: "Landing Pages", status: "ativo" }
  - { nome: "Automação de WhatsApp", status: "em breve" }
  - { nome: "Operação Digital", status: "ativo" }
  - { nome: "App de Carrosséis", status: "em breve" }
```

## Estrutura de arquivos
```
koltrex/
├── index.html          ← landing page (raiz para deploy — NÃO mover)
├── style.css
├── script.js
├── hero3d.js
├── package.json        ← serve estático para Railway
├── assets/             ← logos, fotos, fontes, patterns, social, web
├── docs/visual/        ← referências e animações
│
├── CLAUDE.md           ← este arquivo (framework + contexto)
├── .claude/skills/     ← 17 skills do ArkhTrex (/carrossel, /seo, /prospectar, etc.)
├── _memoria/           ← empresa, estrategia, preferencias, briefing, tarefas
├── identidade/         ← design-guide + KOLTREX-BRAND + KOLTREX-INSTAGRAM
└── dados/ marketing/ saidas/ scripts/   ← saídas geradas pelo framework
```

## Histórico
```yaml
criado: "2026-05-17"
ultima_atualizacao: "2026-06-28"
marcos:
  - "2026-05-17: Landing page criada"
  - "2026-05-23: Repositório publicado no GitHub + deploy no Railway"
  - "2026-06-28: ArkhTrex Framework instalado no projeto"
```
