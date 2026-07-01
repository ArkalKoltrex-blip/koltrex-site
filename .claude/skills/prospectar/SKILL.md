---
name: prospectar
description: >
  Enriquece uma planilha de empresas (vinda da API do Google Places/Maps) pesquisando
  cada negócio na web e mapeando telefone/WhatsApp, se tem Instagram, se tem site, e sinais
  de oportunidade. Marca como melhores leads quem NÃO tem site ou tem presença fraca.
  Use quando o usuário disser "prospectar", "prospecção", "pesquisar as empresas da lista",
  "enriquecer a planilha de leads", "achar contato dessas empresas" ou "/prospectar".
---

# /prospectar — Prospecção e enriquecimento de leads

Pega uma lista de empresas e descobre, de cada uma, como falar com ela e se ela
precisa do que a Koltrex vende. O objetivo não é volume — é achar **sinal**: quem
tem dor clara (sem site, Instagram parado, sem WhatsApp) é o melhor lead, porque
a Koltrex resolve exatamente isso ("ganhar mais ou desperdiçar menos").

## Passo 1 — Localizar a planilha

1. Procurar arquivos em `dados/` (`.csv`, `.xlsx`). Se houver mais de um, perguntar qual.
2. Se não houver nenhum, pedir: *"Joga a planilha do Google em `dados/` que eu leio."*
3. Ler as colunas existentes (geralmente: nome, endereço, categoria, cidade, às vezes telefone/site). Não assumir nomes fixos — adaptar ao que vier.

## Passo 2 — Definir o lote

Perguntar quantas processar: *"São N empresas. Faço todas, as primeiras X, ou um filtro (cidade/categoria)?"*
- Lista pequena (≤ ~15): pesquisar uma a uma na própria conversa.
- Lista grande (> ~15): dividir em lotes e **disparar agentes em paralelo** (agente "Estrategista de Prospecção" ou general-purpose), cada um pesquisando um lote e devolvendo as linhas enriquecidas. Consolidar no fim.

## Passo 3 — Pesquisar cada empresa (semi-manual)

Para cada negócio, buscar na web (`nome + cidade`) e preencher:

| Campo | Como achar |
|---|---|
| **telefone / WhatsApp** | Google Business, site, Instagram bio. Preferir celular/WhatsApp. |
| **Instagram** | Buscar "`nome cidade instagram`". Registrar @ + link. Anotar se está ativo (último post recente) ou parado. |
| **site** | Buscar o domínio. Se achar, anotar URL e estado (moderno / desatualizado / só Linktree). |
| **observação / sinal** | Dor visível: "sem site", "Insta parado há meses", "só telefone fixo", "site quebrado no celular". |

**Regra da pesquisa manual:** quando o Google não vincula a informação ao negócio,
buscar direto (no Instagram, no domínio provável). Se mesmo assim não achar com
confiança, marcar **"verificar manualmente"** — **NUNCA inventar** telefone, @ ou URL.

## Passo 4 — Classificar o lead

Marcar uma temperatura simples, baseada em sinal (não em achismo):
- 🔥 **Quente** — sem site OU presença digital fraca/abandonada (dor óbvia que a Koltrex resolve)
- 🟡 **Morno** — tem o básico mas dá pra melhorar (site fraco, sem automação)
- ⚪ **Frio** — já tem tudo redondo (provável baixa necessidade)

## Passo 5 — Salvar e resumir

1. Salvar a tabela enriquecida em `saidas/prospeccao/AAAA-MM-DD-<origem>.md` (e `.csv` se a entrada era CSV).
2. Devolver um resumo curto:
   ```
   N empresas processadas
   🔥 X quentes (sem site / presença fraca) ← começar por essas
   🟡 Y mornas   ⚪ Z frias
   W marcadas pra verificar manualmente
   ```
3. Sugerir o próximo passo: *"Quer que eu gere a abordagem inicial pras quentes?"* (mensagem de primeiro contato no tom da Koltrex — direto, foco em resultado, oferecendo o diagnóstico grátis).

## Regras

- Sinal > volume. Uma lista de 10 quentes vale mais que 100 nomes soltos.
- Não inventar dado nenhum. "Não encontrado" é uma resposta válida e honesta.
- Priorizar quem NÃO tem site/Instagram — é o lead natural da Koltrex.
- Respeitar o tom da Koltrex em qualquer mensagem gerada (ver `_memoria/preferencias.md`): direto, técnico, sem fluff, foco em R$.
- Não fazer disparo em massa nem automação de envio aqui — esta skill pesquisa e prepara; o contato é decisão do usuário.
