# Koltrex — Sistema de Marca

> Arquivo de referência para Claude Code (ou qualquer dev/AI) aplicar a identidade visual da **Koltrex** em qualquer interface, site, app ou material que você construir.
> Cole este arquivo no diretório raiz do projeto como `KOLTREX-BRAND.md` ou `docs/brand.md`, e instrua o agente: *"Use o sistema descrito em KOLTREX-BRAND.md em tudo que for visual."*

---

## 0. Como usar este arquivo

Quando você for criar ou modificar uma interface, peça ao Claude Code algo como:

> *"Aplique o sistema de marca da Koltrex (ver KOLTREX-BRAND.md) nesse componente/página. Use os tokens de cor, tipografia e padrões de layout descritos lá. Respeite as regras do logo e os do's & don'ts."*

O agente deve:

1. **Sempre** usar os tokens CSS deste documento — nunca inventar cores ou pesos novos.
2. **Sempre** usar Outfit (display/UI) + Geist Mono (labels/dados) como única dupla tipográfica.
3. **Sempre** seguir a proporção de cor 60·30·7·3 (Onyx · Mist · Voltage · Plasma).
4. **Nunca** usar emoji ou ícones aleatórios — placeholders são preferíveis.
5. **Sempre** respeitar a área de respiro (2X) ao redor do logo.

---

## 1. Essência

| Atributo | Valor |
|---|---|
| **Nome** | Koltrex |
| **Fórmula** | Kˣ (K elevado a X) |
| **Tagline curto** | "Elevando você a outro nível" |
| **Tagline B2B** | "Elevando sua empresa a outro nível" |
| **Personalidade** | Tecnológico, futurista, limpo, ágil, profissional — Apple-cool, Jobs-era |
| **Voz** | Direta, técnica, confiante. Sem fluff. Mostra os números. |
| **Setor** | Sites sob medida + SaaS / frameworks (B2B + B2C) |

### 3 princípios fundadores

1. **Limpo, sempre.** Espaço em branco é parte do produto. Menos elementos, mais impacto.
2. **Técnico, não frio.** Mono para metadados, sans para fala. Mostre os números.
3. **Cor é evento.** 90% da marca vive em preto/branco/cinza. Voltage e Plasma marcam momentos — nunca decoração.

---

## 2. Paleta de cores (tokens)

### 2.1 Neutros (8 tons)

| Token | HEX | RGB | Uso |
|---|---|---|---|
| `--onyx` | `#0A0A0B` | 10, 10, 11 | Base / fundo escuro / texto principal |
| `--carbon` | `#161618` | 22, 22, 24 | Superfície escura elevada |
| `--graphite` | `#2A2A2E` | 42, 42, 46 | Divisor / ícone / sombra de UI |
| `--ash` | `#6B6B72` | 107, 107, 114 | Texto secundário / mute |
| `--silver` | `#C8C8CC` | 200, 200, 204 | Texto sobre escuro |
| `--mist` | `#ECECEE` | 236, 236, 238 | Superfície clara / divisor |
| `--paper` | `#F7F7F8` | 247, 247, 248 | Fundo claro padrão |
| `--white` | `#FFFFFF` | 255, 255, 255 | Contraste máximo |

### 2.2 Acentos (2 cores — só para momentos)

| Token | HEX | RGB | Pantone | Uso |
|---|---|---|---|---|
| `--voltage` | `#FF2D3A` | 255, 45, 58 | Red 032 C | Acento primário · ação · destaque · "novo" |
| `--plasma` | `#7C4DFF` | 124, 77, 255 | Violet 2665 C | Acento secundário · profundidade · "premium" |

### 2.3 Proporção obrigatória (60 · 30 · 7 · 3)

```
ONYX     ████████████████████████████████████████████████████████████  60%
MIST     ██████████████████████████████                                30%
VOLTAGE  ███████                                                        7%
PLASMA   ███                                                            3%
```

- **Onyx (60%):** fundo principal de seções "feature", headers, footers, hero, blocos escuros.
- **Mist (30%):** alternância entre seções, fundos claros, surfaces.
- **Voltage (7%):** UM elemento por tela — botão primário, label "novo", linha de destaque.
- **Plasma (3%):** ainda mais raro — badge de premium, gradient sutil, secundário.

### 2.4 CSS Variables (copie no `:root`)

```css
:root {
  /* Neutrals */
  --onyx: #0A0A0B;
  --carbon: #161618;
  --graphite: #2A2A2E;
  --ash: #6B6B72;
  --silver: #C8C8CC;
  --mist: #ECECEE;
  --paper: #F7F7F8;
  --white: #FFFFFF;

  /* Accents */
  --voltage: #FF2D3A;
  --plasma: #7C4DFF;

  /* Semantic aliases */
  --bg: var(--paper);
  --bg-dark: var(--onyx);
  --surface: var(--white);
  --surface-dark: var(--carbon);
  --text: var(--onyx);
  --text-muted: var(--ash);
  --text-on-dark: var(--mist);
  --text-on-dark-muted: var(--silver);
  --border: rgba(10,10,11,0.08);
  --border-dark: rgba(255,255,255,0.08);
  --accent: var(--voltage);
  --accent-2: var(--plasma);
}
```

### 2.5 Tailwind config (se usar Tailwind)

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        onyx:     '#0A0A0B',
        carbon:   '#161618',
        graphite: '#2A2A2E',
        ash:      '#6B6B72',
        silver:   '#C8C8CC',
        mist:     '#ECECEE',
        paper:    '#F7F7F8',
        voltage:  '#FF2D3A',
        plasma:   '#7C4DFF',
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
};
```

---

## 3. Tipografia

**Duas famílias, sem exceção.** Não importe outras fontes.

### 3.1 Fontes (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### 3.2 Outfit (display + corpo + UI)

- **Pesos usados:** 400 (regular), 500 (medium), 600 (semibold — display), 700 (bold), 800 (extrabold — opcional).
- **Letter-spacing padrão para títulos:** `-0.045em` (apertado).
- **Letter-spacing para corpo:** 0 ou `-0.01em`.

### 3.3 Geist Mono (labels, metadata, números, código)

- **Pesos usados:** 400, 500, 600.
- **Use sempre uppercase + tracking 0.08–0.16em** para labels de seção.
- **Use lowercase** para código, URLs, identificadores técnicos.

### 3.4 Escala tipográfica

| Nome | Tamanho/Altura | Peso | Tracking | Uso |
|---|---|---|---|---|
| `display` | 88 / 82 | 600 | -0.04em | Hero, slogan |
| `h1` | 56 / 53 | 600 | -0.03em | Title de página |
| `h2` | 36 / 40 | 600 | -0.025em | Section title |
| `h3` | 24 / 30 | 500 | -0.02em | Subhead |
| `body-l` | 17 / 26 | 400 | 0 | Lede / parágrafo grande |
| `body` | 14 / 22 | 400 | 0 | Corpo padrão |
| `label` | 11 (mono) | 400 | 0.12em UPPER | Labels de UI / categorias |

### 3.5 CSS classes prontas

```css
.font-display { font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 88px; line-height: 0.92; letter-spacing: -0.04em; }
.font-h1      { font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 56px; line-height: 0.95; letter-spacing: -0.03em; }
.font-h2      { font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 36px; line-height: 1.1; letter-spacing: -0.025em; }
.font-h3      { font-family: 'Outfit', sans-serif; font-weight: 500; font-size: 24px; line-height: 1.25; letter-spacing: -0.02em; }
.font-body-l  { font-family: 'Outfit', sans-serif; font-weight: 400; font-size: 17px; line-height: 1.5; }
.font-body    { font-family: 'Outfit', sans-serif; font-weight: 400; font-size: 14px; line-height: 1.55; }
.font-label   { font-family: 'Geist Mono', monospace; font-weight: 400; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
.font-mono    { font-family: 'Geist Mono', monospace; }
```

---

## 4. Logo — o Kˣ

A marca é uma **fórmula matemática**: K elevado a X. Tudo o que toca a Koltrex é multiplicado.

### 4.1 Construção

- **K** em Outfit Semibold (600), letter-spacing -0.045em.
- **ˣ** como SVG inline com `stroke-linecap: round` (estilo marcador, pontas arredondadas).
- O ˣ fica no canto **superior-esquerdo** do K, parcialmente sobreposto.

### 4.2 SVG do ˣ (use sempre este)

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M22 22 L78 78" stroke="currentColor" stroke-width="18" stroke-linecap="round"/>
  <path d="M78 22 L22 78" stroke="currentColor" stroke-width="18" stroke-linecap="round"/>
</svg>
```

### 4.3 Componente HTML do logo (primário)

```html
<span class="koltrex-mark">
  <span class="k">K</span>
  <span class="x">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22 22 L78 78" stroke="currentColor" stroke-width="18" stroke-linecap="round"/>
      <path d="M78 22 L22 78" stroke="currentColor" stroke-width="18" stroke-linecap="round"/>
    </svg>
  </span>
</span>

<style>
.koltrex-mark {
  display: inline-block; position: relative;
  font-family: 'Outfit', sans-serif; font-weight: 600;
  font-size: 200px; line-height: 1; letter-spacing: -0.045em;
  color: currentColor;
}
.koltrex-mark .k {
  display: inline-block; position: relative;
  padding-right: 0.05em;
}
.koltrex-mark .x {
  position: absolute;
  top: -0.05em; left: -0.32em;
  width: 0.34em; height: 0.34em;
  display: inline-flex; align-items: center; justify-content: center;
}
.koltrex-mark .x svg { width: 100%; height: 100%; display: block; }
</style>
```

Para mudar o tamanho: só ajuste `font-size` na `.koltrex-mark`. Tudo escala junto.

### 4.4 Wordmark (assinatura completa)

```html
<span class="koltrex-wordmark">
  koltre<span class="lift">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22 22 L78 78" stroke="currentColor" stroke-width="18" stroke-linecap="round"/>
      <path d="M78 22 L22 78" stroke="currentColor" stroke-width="18" stroke-linecap="round"/>
    </svg>
  </span>
</span>

<style>
.koltrex-wordmark {
  font-family: 'Outfit', sans-serif; font-weight: 600;
  letter-spacing: -0.045em; font-size: 96px; line-height: 1;
  color: currentColor; display: inline-block; position: relative;
}
.koltrex-wordmark .lift {
  display: inline-block;
  width: 0.42em; height: 0.42em;
  vertical-align: 0.5em;
  margin-left: 0.02em;
}
.koltrex-wordmark .lift svg { width: 100%; height: 100%; display: block; }
</style>
```

### 4.5 Regras de uso do logo

**FAÇA:**
- Use Onyx sobre fundo claro ou Mist sobre fundo escuro.
- Mantenha respiro mínimo de **2X** ao redor (X = altura da haste vertical do K).
- Use Voltage para destacar o logo em momentos específicos (lançamento, hero).
- Tamanho mínimo: 16px de altura (favicon). Ideal: 32px+ em web, 64px+ em social.

**NÃO FAÇA:**
- Não distorça (não estique, não comprima).
- Não rotacione.
- Não aplique sombras, brilhos ou efeitos.
- Não use só contorno (outline).
- Não use cores fora da paleta (sem verde, azul, amarelo).
- Não coloque sobre fundos sem contraste ou imagens "ruidosas".

### 4.6 Favicon (recomendação)

Use **Kˣ Badge** (símbolo dentro de quadrado arredondado Onyx) em 512×512 PNG. O brand kit completo já gera essa versão.

### 4.7 Marca d'água

Três modos oficiais:
1. **Canto inferior direito** (18–25% opacidade) — fotos, screenshots
2. **Central grande** (4–8% opacidade) — mockups, casos de estudo
3. **Selo lateral** (rotação 90°, mono, "powered by koltrex") — vídeos, banners

---

## 5. Layout & Spacing

### 5.1 Grid base

- **Unidade:** 8px.
- **Spacing tokens:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- **Container max-width:** 1280px (padrão), 1440px (full-bleed).
- **Container padding lateral:** 48px (desktop), 24px (mobile).

### 5.2 Tokens de spacing

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  --radius-sm: 4px;   /* cards de UI / inputs */
  --radius-md: 8px;   /* botões grandes / containers */
  --radius-lg: 12px;  /* mockups / stories */
  --radius-pill: 100px; /* botões pílula / tags */
}
```

### 5.3 Padrão de seção

```html
<section style="padding: 120px 0;">
  <div class="container" style="max-width: 1280px; margin: 0 auto; padding: 0 48px;">
    <div class="section-head" style="display: flex; gap: 24px; align-items: baseline; margin-bottom: 64px;">
      <span class="font-label">01 — Categoria</span>
      <span style="flex: 1; border-top: 1px solid var(--border); align-self: center;"></span>
      <span class="font-label">Meta direita</span>
    </div>
    <h2 class="font-h1">Título da seção.</h2>
    <p class="font-body-l" style="color: var(--ash); max-width: 640px; margin-top: 24px;">Lede / descrição curta da seção.</p>
    <!-- conteúdo -->
  </div>
</section>
```

---

## 6. Componentes

### 6.1 Botão primário

```html
<button class="btn-primary">
  Começar projeto <span style="color: var(--voltage); margin-left: 6px;">→</span>
</button>

<style>
.btn-primary {
  appearance: none; border: 1px solid var(--onyx); background: var(--onyx);
  color: var(--white); border-radius: 100px;
  padding: 12px 18px; font-family: 'Outfit', sans-serif;
  font-size: 13px; font-weight: 500; letter-spacing: -0.01em;
  cursor: pointer; transition: all 0.15s ease;
  display: inline-flex; align-items: center; gap: 6px;
}
.btn-primary:hover { background: var(--voltage); border-color: var(--voltage); color: var(--onyx); }
</style>
```

### 6.2 Botão secundário (ghost sobre escuro)

```css
.btn-ghost {
  background: transparent; color: var(--mist);
  border: 1px solid var(--border-dark);
  /* resto igual ao primary */
}
```

### 6.3 Card padrão

```css
.card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 32px;
}
.card.dark {
  background: var(--onyx);
  border-color: var(--border-dark);
  color: var(--mist);
}
```

### 6.4 Tag / chip

```css
.tag {
  font-family: 'Geist Mono', monospace; font-size: 10px;
  padding: 4px 8px; background: var(--mist); color: var(--graphite);
  border-radius: 2px; letter-spacing: 0.08em; text-transform: uppercase;
}
```

### 6.5 Input

```css
.input {
  font-family: 'Outfit', sans-serif; font-size: 15px;
  padding: 12px 14px; border: 1px solid var(--border);
  border-radius: 4px; background: var(--white);
  color: var(--onyx); width: 100%;
}
.input:focus { outline: none; border-color: var(--onyx); }
```

### 6.6 Divider

```html
<div style="height: 1px; background: var(--border); margin: 32px 0;"></div>
```

### 6.7 Stat block

```html
<div>
  <div class="font-label">Tempo médio</div>
  <div style="font-family: 'Geist Mono', monospace; font-size: 48px; font-weight: 500; letter-spacing: -0.04em; margin-top: 8px;">3.2s</div>
</div>
```

---

## 7. Padrões visuais (patterns)

Quatro texturas oficiais para fundos de seção ou mockups. Use **com moderação** — para criar profundidade, nunca para chamar atenção.

### 7.1 Dot grid (claro)

```css
.bg-dotgrid {
  background-color: var(--paper);
  background-image: radial-gradient(circle at center, rgba(10,10,11,0.18) 0, rgba(10,10,11,0.18) 1px, transparent 1.5px);
  background-size: 16px 16px;
}
```

### 7.2 Linhas + Kˣ fantasma (claro)

```css
.bg-grid-mark {
  background: var(--white);
  background-image:
    linear-gradient(90deg, var(--border) 1px, transparent 1px),
    linear-gradient(0deg, var(--border) 1px, transparent 1px);
  background-size: 24px 24px;
  position: relative;
}
/* Adicione o logo .koltrex-mark dentro com color: rgba(10,10,11,0.06) */
```

### 7.3 Grid escuro (radial mask) — para heros

```css
.bg-hero-dark {
  background: var(--onyx); position: relative; overflow: hidden;
}
.bg-hero-dark::before {
  content: ""; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%);
  pointer-events: none;
}
```

---

## 8. Voz & copy

### 8.1 Tom

- **Direto.** "Sites em 3 dias. Hospedagem inclusa." (não: "Nós entregamos sites de forma rápida e prática.")
- **Técnico.** Mostre números (uptime, tempo, versão). Use mono.
- **Confiante.** Sem hedging. "Construímos." não "Tentamos construir."
- **Sem fluff.** Cortar adjetivos vazios ("incrível", "amazing", "fantástico").

### 8.2 Padrões úteis

| Categoria | Exemplo Koltrex |
|---|---|
| Headline | "Sites e ferramentas que elevam negócios reais." |
| Lede | "Construímos sites sob medida e SaaS para empresas que precisam sair do template." |
| CTA primário | "Começar projeto →" |
| CTA ghost | "Ver trabalho" |
| Label de seção | `01 — TRABALHO` / `02 — PROCESSO` |
| Tag de status | `NOVO`, `BETA`, `V1.2.0`, `2026` |
| Métrica | `3.2s`, `12×`, `99.99% uptime` |

### 8.3 Não use

- Emoji 🎉 ✨ 💡 (use placeholders se precisar de glifo).
- Frases de efeito vazias: "Transformamos sua marca", "Levamos sua empresa ao próximo nível" (use "Outro nível" como assinatura, não como filler).
- Aspas decorativas, ornamentos.
- Gradients aleatórios (só os definidos nos patterns).

---

## 9. Aplicações sociais (referência rápida)

| Canal | Formato | Tratamento |
|---|---|---|
| **Instagram avatar** | 1080×1080 | Logo Kˣ centralizado, fundo Onyx, mark Mist |
| **IG post (square)** | 1080×1080 | Onyx + radial Plasma sutil, headline Outfit 600, tag mono no topo, mark no canto |
| **IG story** | 1080×1920 | Onyx OU Voltage solid, kicker mono Voltage, headline Outfit 600 |
| **IG highlight cover** | 1080×1920 | Onyx ou Mist ou Voltage solid, Kˣ centralizado |
| **Banner site (hero)** | 1920×1080 | Onyx, grid pattern com radial mask, Kˣ grande à direita |
| **OG image** | 1200×630 | Mesmo do banner |
| **Email signature** | mark + wordmark Onyx sobre fundo branco + linha mono com role/url |
| **Cartão de visita** | 88×50mm | Frente: Kˣ centralizado em Onyx. Verso: branco, mono com nome/contato + Kˣ no canto |
| **Favicon** | 512×512 | Kˣ em Onyx com radius ~18% |

---

## 10. Checklist para Claude Code

Antes de finalizar qualquer interface, verifique:

- [ ] Usa **somente** as 10 cores definidas (8 neutros + 2 acentos)
- [ ] Proporção de cor respeita 60·30·7·3 (90% neutro)
- [ ] **Outfit** para display/UI, **Geist Mono** apenas para labels/dados/código
- [ ] Letter-spacing apertado em títulos (-0.025 a -0.045em)
- [ ] Labels em uppercase com tracking 0.08–0.16em + Geist Mono
- [ ] Logo `Kˣ` usa o SVG do ˣ com `stroke-linecap: round`
- [ ] Respiro mínimo de 2X ao redor do logo
- [ ] Botões pílula (`border-radius: 100px`) com hover Voltage
- [ ] Cards com `border-radius: 4px`, border 1px sutil
- [ ] Nenhum emoji, ícone genérico ou gradient inventado
- [ ] Cantos retos quando possível; **arredondamento é exceção**, não regra
- [ ] Espaçamento múltiplo de 8 (8, 16, 24, 32, 48, 64, 96, 128)
- [ ] Copy direto, técnico, sem fluff — mostre números

---

## 11. Recursos do brand kit

Arquivos disponíveis no projeto Koltrex Brand Kit:

| Recurso | Local |
|---|---|
| Brand book completo | `Koltrex Brand Kit.html` (seção 11 — Downloads) |
| 16 logos PNG (Pillar + Power + Wordmark + Badge × 4 fundos) | Section 11 — grupo "Logos" — ↓ Baixar PNG |
| 3 marcas d'água | Section 11 — grupo "Marca d'água" |
| 4 patterns | Section 11 — grupo "Patterns" |
| IG avatar / post / story | Section 11 — grupo "Social" |
| Banner site + favicon | Section 11 — grupo "Web" |
| **Tudo em ZIP** | Section 11 — botão "Baixar tudo" no final |

---

**Versão:** Koltrex Brand System v1.0 — 2026
**Mantido por:** time Koltrex
**Dúvidas / atualizações:** brand@koltrex.dev
