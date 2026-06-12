# Koltrex — Guia de Instagram para Claude Code

> Arquivo de referência para **gerar novos posts, stories e highlights** da Koltrex no Claude Code, no mesmo estilo dos templates já existentes.
> Use junto com `KOLTREX-BRAND.md` (que tem os tokens de cor, fontes e regras do logo). Este arquivo é o **complemento de Instagram**: dimensões, anatomia dos templates, código pronto e o método de exportar PNG.

---

## 0. Como pedir ao Claude Code

Coloque os dois arquivos na raiz do projeto:
- `KOLTREX-BRAND.md` (sistema de marca)
- `KOLTREX-INSTAGRAM.md` (este arquivo)

E peça algo como:

> *"Crie 1 post de feed (1080×1080) da Koltrex anunciando [X]. Use o template de Lançamento descrito em KOLTREX-INSTAGRAM.md, com os tokens e fontes de KOLTREX-BRAND.md. Gere o HTML + botão de download PNG."*

Ou pra fazer em lote:

> *"Gere 6 posts de carrossel da Koltrex sobre [tema], cada slide 1080×1080, seguindo o template de carrossel. Mantenha o sistema visual."*

O Claude Code deve **sempre**:
1. Usar os 10 tokens de cor e a dupla Outfit + Geist Mono.
2. Respeitar as dimensões exatas do canvas (1080×1080 ou 1080×1920).
3. Usar o componente do logo Kˣ (SVG do ˣ com `stroke-linecap: round`).
4. Manter o copy direto, técnico, sem fluff e sem emoji decorativo.
5. Usar **um** acento (Voltage ou Plasma) por peça — nunca os dois gritando juntos.

---

## 1. Dimensões oficiais

| Formato | Pixels | Aspect | Uso |
|---|---|---|---|
| **Post feed (quadrado)** | 1080 × 1080 | 1:1 | Posts normais, carrossel, stat, quote |
| **Post retrato** | 1080 × 1350 | 4:5 | Ocupa mais tela no feed (opcional) |
| **Story / Highlight / Reels cover** | 1080 × 1920 | 9:16 | Stories, capas de destaque |
| **Avatar** | 1080 × 1080 | 1:1 (exibido em círculo) | Foto de perfil |

> **Margem de segurança:** mantenha conteúdo importante a pelo menos **96px** das bordas em posts e **120px** no topo/base de stories (a UI do IG cobre essas zonas).

---

## 2. Anatomia de um template

Todo template Koltrex segue a mesma estrutura de 3 zonas:

```
┌──────────────────────────────────────┐
│  TOP   │ tag/label (mono) + Kˣ       │  → contexto (categoria, número, data)
│                                      │
│  MEIO  │ headline (Outfit 600)       │  → a mensagem principal, bem grande
│          ou número gigante           │
│                                      │
│  FOOT  │ meta (mono) + marca         │  → assinatura, CTA, url
└──────────────────────────────────────┘
```

- **Padding padrão:** 72px em posts 1080, 60px nas laterais de stories.
- **TOP e FOOT** sempre em Geist Mono uppercase, tracking 0.1–0.16em, tamanho 14–18px (escala 1080).
- **MEIO** é Outfit 600, o maior elemento da peça. Headlines de 72–120px; números de 360–460px.
- **Logo Kˣ** vive no FOOT (canto direito) ou TOP (canto direito), tamanho 44–56px.

---

## 3. Tokens (resumo — detalhe em KOLTREX-BRAND.md)

```css
:root {
  --onyx: #0A0A0B; --carbon: #161618; --graphite: #2A2A2E; --ash: #6B6B72;
  --silver: #C8C8CC; --mist: #ECECEE; --paper: #F7F7F8; --white: #FFFFFF;
  --voltage: #FF2D3A; --plasma: #7C4DFF;
}
```

**Fontes:**
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

**Quando usar cada fundo:**
| Fundo | Quando |
|---|---|
| **Onyx** (#0A0A0B) | Default. Maioria dos posts/stories. Sério, premium. |
| **Mist** (#ECECEE) | Variação clara — cases, processos, anúncios "soft". |
| **White** (#FFF) | Listas, passos, conteúdo "documento". |
| **Voltage** (#FF2D3A) | UM post de impacto — métrica, urgência, "novo". Raro. |
| **Plasma** (#7C4DFF) | Quotes, manifesto, momentos "premium". Mais raro ainda. |

Regra de ritmo no feed: **~6 Onyx/escuros : 2 claros : 1 acento.**

---

## 4. O logo Kˣ (cole sempre este componente)

```html
<span class="mark"><span class="k">K</span><span class="x">
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22 22 L78 78" stroke="currentColor" stroke-width="18" stroke-linecap="round"/>
    <path d="M78 22 L22 78" stroke="currentColor" stroke-width="18" stroke-linecap="round"/>
  </svg>
</span></span>

<style>
.mark { display:inline-block; position:relative; font-family:'Outfit',sans-serif; font-weight:600; font-size:200px; line-height:1; letter-spacing:-0.045em; color:currentColor; }
.mark .k { display:inline-block; position:relative; padding-right:0.05em; font-family:'Outfit',sans-serif; font-weight:600; }
.mark .x { position:absolute; top:-0.05em; left:-0.32em; width:0.34em; height:0.34em; display:inline-flex; align-items:center; justify-content:center; }
.mark .x svg { width:100%; height:100%; display:block; }
</style>
```

Muda o tamanho só com `font-size` no contexto onde aplica (`.foot .mark { font-size: 48px; }`).

---

## 5. Templates de POST (1080×1080)

Cada um abaixo é uma estrutura testada. Copie o HTML+CSS, troque só o texto.

### 5.1 Headline + tag (Onyx) — anúncio geral

```html
<div class="post p1">
  <div class="inner">
    <div class="top">
      <span class="tag">caso · 002</span>
      <span class="wm"><!-- Kˣ --></span>
    </div>
    <h2>site novo, <em>3 dias.</em><br>hospedagem, deploy<br>e ajustes <em>incluídos.</em></h2>
    <div class="foot"><span>koltrex · sites sob medida</span><span>→ koltrex.dev</span></div>
  </div>
</div>
<style>
.post { width:1080px; height:1080px; position:relative; overflow:hidden; font-family:'Outfit',sans-serif; }
.p1 { background:#0A0A0B; color:#ECECEE; }
.p1::before { content:""; position:absolute; inset:0; background:
  radial-gradient(circle at 80% 110%, rgba(124,77,255,0.35) 0%, transparent 50%),
  radial-gradient(circle at 0% -10%, rgba(255,45,58,0.18) 0%, transparent 40%); }
.p1 .inner { position:absolute; inset:0; padding:72px; display:flex; flex-direction:column; justify-content:space-between; }
.p1 .top { display:flex; justify-content:space-between; align-items:flex-start; }
.p1 .tag { font-family:'Geist Mono',monospace; font-size:16px; letter-spacing:0.16em; text-transform:uppercase; color:#C8C8CC; border:1.5px solid currentColor; padding:10px 16px; border-radius:100px; }
.p1 h2 { font-size:96px; line-height:0.95; letter-spacing:-0.035em; font-weight:600; margin:0; }
.p1 h2 em { font-style:normal; color:#FF2D3A; }
.p1 .foot { display:flex; justify-content:space-between; align-items:flex-end; font-family:'Geist Mono',monospace; font-size:16px; letter-spacing:0.1em; text-transform:uppercase; color:#C8C8CC; }
.p1 .wm { font-size:56px; }
</style>
```

### 5.2 Stat / métrica (Voltage) — número gigante

- Fundo Voltage `#FF2D3A`, texto Onyx.
- `.number` em Outfit 600, `font-size: 460px`, com `.unit` menor (`220px`, `opacity:0.4`).
- Use pra: tempo de carregamento, nº de projetos, multiplicadores ("12×"), uptime.

### 5.3 Case study (Mist) — trabalho de cliente

- Fundo Mist, texto Onyx, acento Voltage no número.
- Título 88px + linha de meta no rodapé (`cliente / tempo / stack`) com labels mono.

### 5.4 Dica / educativo (Onyx) — ensina algo

- Badge Voltage no topo (`dica`), headline 80px, lede 28px em Silver.
- Ótimo como slide 1 de carrossel.

### 5.5 Quote (Plasma) — manifesto

- Fundo Plasma + grid sutil (linhas brancas 10% com radial mask).
- Aspa gigante `"` (240px, branco 40%) + quote 52px Outfit 500.

### 5.6 Lançamento (Mist) — produto/feature novo

- Dot Voltage pulsante + `ao vivo agora` (mono Voltage).
- Headline 120px, versão (`v1.0 · beta`), lede 30px.

### 5.7 Capa de carrossel (Onyx) — "swipe pra ler"

- Headline 104px com palavra em Voltage, `swipe pra ler →` em mono.
- Use como slide 1; os slides 2-N usam o template 5.4 ou 5.8.

### 5.8 Processo / passos (White) — lista numerada

- Fundo branco, headline 72px, depois `.steps` com `01 02 03 04` em Voltage mono + label 40px.

---

## 6. Templates de STORY (1080×1920)

Mesma anatomia, vertical. Sempre inclua barras de progresso no topo + avatar:

```html
<div class="story s1">
  <div class="s-bars"><span class="bar active"></span><span class="bar"></span><span class="bar"></span></div>
  <div class="s-meta"><span class="av"><!-- Kˣ --></span><span>koltrex · <span class="when">há 12min</span></span></div>
  <div class="body">
    <span class="kicker">novo · saas</span>
    <h2>o calendário<br>de marketing<br>que se monta<br>sozinho.</h2>
  </div>
  <div class="s-foot"><span>→ deslize p/ acessar</span><span class="mark"><!-- Kˣ --></span></div>
</div>
```

Variantes (mesma estrutura, troca fundo + acento):
- **S1 Launch** — Onyx + radial Plasma no rodapé.
- **S2 Voltage** — fundo Voltage solid, texto Onyx.
- **S3 Métrica** — Mist + número 420px centralizado.
- **S4 Quote** — Plasma + aspa gigante.
- **S5 CTA** — Onyx + grid, seta `→` + `arrasta pra cima` em Voltage.
- **S6 Behind-scenes** — Carbon + placeholder de foto (área tracejada) + caption.

CSS base do story:
```css
.story { width:1080px; height:1920px; position:relative; overflow:hidden; font-family:'Outfit',sans-serif; }
.s-bars { position:absolute; top:24px; left:24px; right:24px; display:flex; gap:4px; z-index:5; }
.s-bars .bar { flex:1; height:4px; background:rgba(255,255,255,0.35); border-radius:2px; }
.s-bars .bar.active { background:#fff; }
.s-meta { position:absolute; top:56px; left:36px; right:36px; display:flex; align-items:center; gap:14px; font-size:22px; font-weight:600; color:#fff; z-index:5; }
.s-meta .av { width:56px; height:56px; border-radius:50%; background:#ECECEE; color:#0A0A0B; display:flex; align-items:center; justify-content:center; }
.s-meta .when { font-family:'Geist Mono',monospace; font-weight:400; font-size:18px; color:rgba(255,255,255,0.7); }
.body { position:absolute; inset:0; padding:200px 60px; display:flex; flex-direction:column; justify-content:center; }
.kicker { font-family:'Geist Mono',monospace; font-size:22px; letter-spacing:0.18em; text-transform:uppercase; color:#FF2D3A; margin-bottom:32px; }
.body h2 { font-size:88px; line-height:0.95; letter-spacing:-0.035em; font-weight:600; margin:0; }
.s-foot { position:absolute; left:36px; right:36px; bottom:60px; display:flex; justify-content:space-between; align-items:flex-end; font-family:'Geist Mono',monospace; font-size:18px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.75); z-index:5; }
.s-foot .mark { font-size:44px; color:#fff; }
```

---

## 7. Highlights (capas — 1080×1920)

Canvas vertical, Kˣ ou ícone centralizado, fundo numa das 4 cores. Ícone ~480px, glyph Kˣ ~580px.

```html
<div class="hl bg-onyx"><span class="glyph"><!-- Kˣ grande --></span></div>
<style>
.hl { width:1080px; height:1920px; display:flex; align-items:center; justify-content:center; }
.hl.bg-onyx    { background:#0A0A0B; color:#ECECEE; }
.hl.bg-mist    { background:#ECECEE; color:#0A0A0B; }
.hl.bg-voltage { background:#FF2D3A; color:#0A0A0B; }
.hl.bg-plasma  { background:#7C4DFF; color:#fff; }
.hl .glyph { font-family:'Outfit',sans-serif; font-weight:600; font-size:580px; letter-spacing:-0.045em; }
</style>
```

Ícones de linha disponíveis (viewBox 0 0 100, stroke-width 6, round): `window, cube, star, compass, doc, users, mail, spark`. Veja `ig-kit.js` para os paths exatos — copie de lá.

---

## 8. Exportar PNG (método que funciona com fontes)

O segredo pra Outfit não virar Helvetica no PNG: **embedar a fonte como base64** antes de capturar. Use html-to-image + esta função:

```js
// <script src="https://unpkg.com/html-to-image@1.11.11/dist/html-to-image.js"></script>

let fontCSSCache = null;
async function ensureFonts() {
  if (fontCSSCache !== null) return fontCSSCache;
  if (document.fonts?.ready) { try { await document.fonts.ready; } catch(e){} }
  const url = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap';
  let css = await (await fetch(url, {mode:'cors'})).text();
  const woffs = [...new Set((css.match(/https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2/g)||[]))];
  await Promise.all(woffs.map(async u => {
    const buf = await (await fetch(u, {mode:'cors'})).arrayBuffer();
    let bin=''; const b=new Uint8Array(buf);
    for (let i=0;i<b.length;i+=0x8000) bin+=String.fromCharCode.apply(null,b.subarray(i,i+0x8000));
    css = css.split(u).join('data:font/woff2;base64,'+btoa(bin));
  }));
  return (fontCSSCache = css);
}

async function downloadPNG(el, w, h, filename) {
  const fontEmbedCSS = await ensureFonts();
  const blob = await htmlToImage.toBlob(el, {
    width:w, height:h, pixelRatio:1, cacheBust:true,
    skipFonts:true, fontEmbedCSS,
    style:{ transform:'none', transformOrigin:'top left', width:w+'px', height:h+'px' }
  });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}
```

> O elemento `el` deve ser o canvas em tamanho NATIVO (1080×1080 ou 1080×1920). Pra mostrar menor na tela, escale o wrapper com `transform: scale()` — mas capture sempre o tamanho real.

---

## 9. Copy — banco de exemplos Koltrex

Use como ponto de partida. Tom: direto, técnico, mostra números, zero fluff.

| Tipo | Exemplo |
|---|---|
| **Headline anúncio** | "site novo, 3 dias. hospedagem, deploy e ajustes incluídos." |
| **Métrica** | "3.2s → tempo médio de carregamento" / "12× projetos no mês" / "99.99% uptime" |
| **Case** | "estúdio imobiliário · 200+ imóveis online em 14 dias" |
| **Dica** | "Seu site tá lento? Comece pelas imagens." |
| **Quote** | "Sair do template não é luxo. É sobrevivência." |
| **Lançamento** | "Calendário de marketing. Que se monta sozinho." |
| **Carrossel cover** | "5 erros que matam a velocidade do seu site." |
| **CTA story** | "Brief grátis em 15 minutos. Marcamos hoje?" |
| **Kicker (mono)** | `NOVO · SAAS` · `PROCESSO · 01` · `CASE · 004` · `MÉTRICA` |
| **Foot meta** | `koltrex · sites sob medida` · `→ koltrex.dev` · `koltrex.dev/brief` |

**Não use:** emoji decorativo, "incrível/amazing", exclamações múltiplas, hashtags dentro da arte (vão na legenda).

---

## 10. Legendas (caption) — fora da arte

A legenda do post acompanha a arte. Estrutura sugerida:

```
[Gancho — 1 linha forte que repete ou expande a headline]

[2-3 linhas explicando / contexto / valor]

[CTA claro: link na bio / comenta / salva]

↓
#koltrex #desenvolvimentoweb #saas #[cidade] #sitesobmedida
```

Mantenha 3-5 hashtags relevantes (não 30). Inclua sempre `#koltrex` + 1 de localização (sua cidade) pro alcance B2B local.

---

## 11. Checklist antes de publicar

- [ ] Canvas no tamanho exato (1080×1080 ou 1080×1920)
- [ ] Conteúdo dentro da margem de segurança (96px post / 120px story topo-base)
- [ ] Só as 10 cores do sistema · um acento por peça
- [ ] Outfit (headline) + Geist Mono (labels/meta)
- [ ] Logo Kˣ presente (foot ou top), com o ˣ marker correto
- [ ] Headline grande de verdade (72px+ em post, 84px+ em story)
- [ ] Copy direto, com número quando possível, sem emoji decorativo
- [ ] PNG exportado com fonte embedada (não caiu pra Helvetica)
- [ ] No feed: respeita o ritmo ~6 escuro : 2 claro : 1 acento

---

## 12. Arquivos de referência neste projeto

| Arquivo | O que é |
|---|---|
| `KOLTREX-BRAND.md` | Sistema de marca completo (cores, fontes, logo, componentes) |
| `KOLTREX-INSTAGRAM.md` | Este guia — templates + dimensões + export de IG |
| `Koltrex Instagram Kit.html` | Kit visual com todos os templates prontos + download |
| `ig-kit.js` | Código dos templates (copie os paths de ícone e o HTML daqui) |
| `Koltrex Brand Kit.html` | Brand book completo com logos/patterns/mockups + downloads |

---

**Versão:** Koltrex Instagram Guide v1.0 — 2026
**Dúvidas:** brand@koltrex.dev
