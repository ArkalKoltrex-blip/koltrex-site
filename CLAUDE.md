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
fontes: "Google Fonts — Syne (display) + Inter (body)"
build: "Nenhum — site estático puro"
deploy:
  plataforma: "Railway"
  repositorio: "GitHub (koltrex)"
  entrada: "index.html na raiz"
  servidor: "serve (npm)"
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

## DECISÕES DE DESIGN
```yaml
estilo: "Dark tech / SaaS premium"
paleta:
  fundo: "#ffffff (light) com glow roxo no hero"
  acento: "#6c3fff (roxo vibrante)"
  texto: "#0a0a0f"
tipografia:
  display: "Syne — bold pesada"
  corpo: "Inter — leve e legível"
elementos_visuais:
  - "Esfera animada com glow no hero"
  - "Grid bento assimétrico nos serviços"
  - "Badge de credibilidade"
  - "Conectores entre os steps de como funciona"
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
