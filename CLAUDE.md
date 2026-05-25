# Koltrex — Site Institucional

## SOBRE O PROJETO
```yaml
projeto: "Site institucional da Koltrex"
tipo: "Projeto próprio (não é cliente)"
descricao: "Site principal da Koltrex — apresenta serviços e gera contato via WhatsApp"
email: "koltrexnew@gmail.com"
contato_whatsapp: "+55 77 99975-1815"
```

## TECH STACK
```yaml
linguagens:
  - HTML5 semântico
  - CSS3 vanilla (design system próprio)
  - JavaScript vanilla
fontes: "Google Fonts — Outfit (display/UI) + Geist Mono (labels/dados)"
build: "Nenhum — site estático puro"
deploy:
  plataforma: "Railway"
  repositorio: "GitHub (ArkalKoltrex-blip/koltrex-site)"
  entrada: "index.html na raiz"
  servidor: "serve (npm)"
```

## IDENTIDADE VISUAL
```yaml
brand_system: "Ver KOLTREX-BRAND.md na raiz — seguir sempre"
estilo: "Dark tech / SaaS premium — Apple-cool, limpo, técnico"
paleta:
  base: "Onyx #0A0A0B (60%) + Mist #ECECEE (30%)"
  acento_primario: "Voltage #FF2D3A (7%) — botão, destaque, ação"
  acento_secundario: "Plasma #7C4DFF (3%) — premium, profundidade"
tipografia:
  display_ui: "Outfit 600 — letter-spacing -0.045em"
  labels_dados: "Geist Mono — uppercase, tracking 0.12em"
logo: "Kˣ — K em Outfit 600 + X como SVG stroke-linecap round"
proporcao_cor: "60·30·7·3 (Onyx·Mist·Voltage·Plasma)"
```

## SERVIÇOS APRESENTADOS NO SITE
```yaml
servicos:
  - nome: "Landing Pages"
    status: "ativo"
  - nome: "Automação de WhatsApp"
    status: "em breve"
  - nome: "Operação Digital"
    status: "ativo"
  - nome: "App de Carrosséis"
    status: "em breve"
```

## ESTRUTURA DE ARQUIVOS
```
koltrex/
├── index.html          ← landing page (raiz para deploy)
├── style.css
├── script.js
├── package.json        ← serve estático para Railway
├── .gitignore
├── assets/
│   └── logos/          ← SVGs do brand (dark e light)
├── docs/
│   └── visual/         ← referências e animações
└── briefing.md         ← briefing original do projeto
```

## HISTÓRICO
```yaml
criado: "2026-05-17"
ultima_atualizacao: "2026-05-23"
marcos:
  - "2026-05-17: Landing page criada"
  - "2026-05-23: Repositório publicado no GitHub + deploy no Railway"
```
