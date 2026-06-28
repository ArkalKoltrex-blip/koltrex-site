# Koltrex

Site institucional da **Koltrex** — e workspace do **ArkhTrex Framework**.

> **Site:** landing page estática (HTML/CSS/JS vanilla) que apresenta os serviços
> e converte em contato via WhatsApp. Deploy na Railway, `index.html` na raiz.
>
> **ArkhTrex Framework:** o sistema operacional do negócio dentro do Claude Code —
> dá ao projeto memória, identidade visual e skills prontas de marketing, SEO,
> anúncios e operação.

---

## O site

| Arquivo | Papel |
|---|---|
| `index.html` | Landing page (entrada do deploy — **não mover da raiz**) |
| `style.css` | Design system próprio (tokens da marca) |
| `script.js` · `hero3d.js` | Interações e animação 3D do hero |
| `package.json` | `serve` estático para a Railway |
| `assets/` | Logos, fotos, fontes, patterns, social, web |

Rodar localmente:

```bash
npx serve .
```

---

## O ArkhTrex Framework

O Claude Code lê o contexto do negócio no início de cada conversa e usa skills
prontas pra executar tarefas. Tudo definido em [`CLAUDE.md`](CLAUDE.md).

### Estrutura

```
.claude/skills/   16 skills (/carrossel, /seo, /anuncio-google, /criar-chatbot…)
_memoria/         empresa · estrategia · preferencias · briefing
identidade/       design-guide + sistema de marca (BRAND, INSTAGRAM)
dados/ marketing/ saidas/ scripts/   saídas geradas e versionadas
```

### Skills disponíveis

**Sistema:** `/abrir` (carrega contexto) · `/salvar` (commit + push) ·
`/atualizar` (atualiza memória) · `/novo-projeto` (isola trabalho de cliente) ·
`/mapear-rotinas` (descobre processos repetíveis) · `/instalar` (setup inicial)

**Conteúdo & SEO:** `/carrossel` (1080×1350 na marca) · `/publicar-tema`
(blog + carrossel + legendas) · `/seo` (workflow de 8 passos) ·
`/responder-avaliacoes` · `/aprovar-post` · `/criar-chatbot`

**Anúncios:** `/anuncio-google` (campanhas em CSV) · `/relatorio-ads`
(relatórios de Google/Meta)

**Dia a dia:** `/analisar-dados` (CSV/XLSX/PDF) · `/email-profissional`

---

## Marca

Identidade dark tech / SaaS premium. Detalhes em
[`identidade/design-guide.md`](identidade/design-guide.md).

- **Cores (60·30·7·3):** Onyx `#0A0A0B` · Mist `#ECECEE` · Voltage `#FF2D3A` · Plasma `#7C4DFF`
- **Tipografia:** Outfit (display/UI) + Geist Mono (labels/dados)
- **Logo:** Kˣ
