---
name: criar-chatbot
description: >
  Cria um chatbot do zero para atendimento e/ou vendas. Conduz o usuário por
  uma entrevista estruturada, define persona, mapeia todos os fluxos de conversa,
  gera os scripts completos com mensagens e botões, e entrega um guia de
  implementação na plataforma escolhida (Typebot, ManyChat, n8n, código, etc).
  Use quando o usuário disser "criar chatbot", "quero um chatbot", "montar bot
  de atendimento", "bot de vendas", "/criar-chatbot" ou variações.
---

# /criar-chatbot — Criação de chatbot do zero

Conduz o usuário pelo processo completo de criação de um chatbot — da definição de objetivo até o script pronto para implementar. Pergunta uma coisa por vez. Não sobrecarrega com opções técnicas antes de entender o negócio.

---

## Pré-checagem

Ler `_memoria/empresa.md` se existir. Usar o contexto do negócio (nome, clientes, tom de voz) para personalizar as sugestões. Se o arquivo não existir ou estiver vazio, seguir normalmente e coletar o contexto nas perguntas abaixo.

---

## Fase 1 — Contexto e objetivo

Fazer as perguntas abaixo em ordem. Esperar a resposta de cada uma antes de seguir.

1. "Esse chatbot é pra qual negócio? (nome da empresa e o que ela faz)"
   — Pular se já tem em `_memoria/empresa.md`

2. "Qual o objetivo principal desse bot?"
   - Atendimento e suporte (tirar dúvidas, resolver problemas)
   - Qualificação e vendas (capturar lead, qualificar, encaminhar pro time)
   - Os dois (primeiro qualifica, depois atende)

3. "Onde o bot vai funcionar?"
   - WhatsApp
   - Site (chat no site)
   - Instagram Direct
   - Mais de um canal

4. "O bot vai ter inteligência artificial ou só fluxos fixos (menus e botões)?"
   - Só fluxos fixos — mais previsível, mais barato, recomendado pra começar
   - Com IA — responde perguntas abertas, mais flexível, custo por uso
   - Não sei — deixar o Claude recomendar com base nas respostas anteriores

   Se "Não sei": analisar objetivo e volume esperado e recomendar uma das opções com justificativa simples.

---

## Fase 2 — Persona do bot

5. "Como vai se chamar o bot? (pode ser o nome da empresa, um personagem, ou qualquer nome que combine)"

6. "Qual o tom de voz do bot?"
   - Formal e profissional
   - Amigável e descontraído
   - Neutro e direto

   Se existir `_memoria/preferencias.md`, sugerir o tom com base no que está registrado e confirmar com o usuário.

---

## Fase 3 — Mapeamento de fluxos

Com base nas respostas anteriores, perguntar:

7. "Quais são as principais situações que esse bot vai precisar resolver? Me fala as mais comuns."
   Exemplos pra estimular: "Pergunta de preço? Agendar visita? Reclamação? Querer falar com atendente?"

   Listar o que o usuário responder e confirmar:
   > "Entendi. Vou mapear esses fluxos: [lista]. Tem mais alguma situação importante ou pode seguir?"

8. "Quando o bot não souber responder — ou quando o cliente quiser falar com uma pessoa — o que acontece?"
   - Transfere para um número de WhatsApp
   - Transfere para um atendente no sistema
   - Pede pra o cliente deixar contato e alguém liga depois
   - Outro

---

## Fase 4 — Geração do script completo

Com todas as respostas, gerar o script do chatbot no seguinte formato:

---

### SCRIPT DO CHATBOT — [Nome do bot] | [Nome da empresa]

**Canal:** [canal]  
**Objetivo:** [objetivo]  
**Tom:** [tom de voz]  
**Modelo:** [Fluxos fixos | Com IA | Híbrido]

---

#### MENSAGEM DE BOAS-VINDAS

```
[Mensagem inicial do bot — apresenta o nome, o que pode fazer, e exibe as opções do menu]
```

**Botões / Opções:**
- [opção 1]
- [opção 2]
- [opção N]

---

#### FLUXO: [Nome do fluxo 1]

**Gatilho:** quando o usuário escolhe "[opção 1]" ou escreve palavras como [exemplos]

```
[Mensagem do bot]
```

**Coleta de dados (se aplicável):**
- Variável: `[nome_variavel]` — Pergunta: "[como o bot pergunta]"

**Próximo passo:** [o que acontece depois — nova mensagem, transferência, encerramento]

---

#### FLUXO: [Nome do fluxo N]

[Repetir para cada fluxo mapeado na Fase 3]

---

#### FLUXO: TRANSFERÊNCIA PARA HUMANO

**Gatilho:** usuário pede atendente, digita "0", ou bot não entende após 2 tentativas

```
[Mensagem do bot informando a transferência]
```

**Ação:** [encaminhar para número / sistema / deixar contato]

---

#### MENSAGEM DE FALLBACK (bot não entendeu)

```
[Mensagem de fallback — reconhece que não entendeu, oferece menu novamente ou transfere]
```

**Regra:** usar no máximo 2 vezes antes de transferir para humano automaticamente.

---

#### MENSAGEM DE ENCERRAMENTO

```
[Mensagem de despedida — agradecer, informar próximo passo se houver]
```

---

## Fase 5 — Recomendação de plataforma

Após gerar o script, recomendar a plataforma com base no canal e modelo escolhido:

**Se WhatsApp + Fluxos fixos:**
> Recomendo o **Typebot** (gratuito) conectado ao WhatsApp via **Z-API** ou **Evolution API**.
> O script gerado acima mapeia exatamente os blocos que você vai criar no Typebot.
> Tempo de implementação estimado: 2-4 horas para um fluxo simples.

**Se WhatsApp + Com IA:**
> Recomendo o **Typebot** para os fluxos fixos (menu, coleta de dados) + chamada à **API do Claude** nos pontos de resposta livre.
> Custo estimado: R$ 0,01–0,05 por conversa dependendo do volume.

**Se Site + Fluxos fixos:**
> Recomendo o **Typebot** com embed no site — ele gera um script de incorporação em um clique.

**Se Instagram Direct:**
> Recomendo o **ManyChat** — tem integração nativa com Instagram, mais simples que alternativas.

**Se n8n (automação avançada):**
> O script gerado serve como base para os nós de mensagem do n8n. Posso gerar o JSON do fluxo n8n se preferir.

---

## Fase 6 — Entregáveis e próximos passos

Mostrar resumo do que foi gerado:

```
✓ Persona definida: [Nome do bot]
✓ [N] fluxos mapeados: [lista]
✓ Script completo gerado
✓ Plataforma recomendada: [plataforma]
```

Perguntar:

> "Quer que eu gere também:
> - [ ] Respostas para as perguntas frequentes mais comuns do seu segmento
> - [ ] Prompt de IA (se for usar inteligência artificial no bot)
> - [ ] Checklist de implementação passo a passo na [plataforma recomendada]"

---

## Regras

- Nunca sugerir plataforma paga como primeira opção quando existe gratuita equivalente
- Não gerar script com linguagem genérica — usar o tom de voz definido na Fase 2
- Se o usuário não souber responder alguma pergunta, dar 2-3 exemplos concretos pra destravá-lo
- Fluxos fixos são sempre a recomendação padrão para quem está começando — IA é sugerida só quando o volume ou complexidade justificar
- O script gerado deve ser diretamente utilizável — não genérico, não cheio de placeholders óbvios
