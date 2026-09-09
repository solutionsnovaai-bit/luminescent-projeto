# Luminescent × Nova AI Solutions — Projeto

Landing page do projeto comercial pra Naara Carreira (Luminescent), com os 3
planos (Faísca / Chama / Brilho) e um preview do agente de IA no WhatsApp.

Reaproveita o design system do site oficial da Luminescent (paleta plum/orchid/lilac,
Cormorant Garamond + Jost, animação de chama) — pensada como continuação da marca,
não como página genérica de agência.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` pronta pra deploy (Vercel, Netlify etc.).

## Onde mexer

- `src/lib/whats.js` — número de WhatsApp e mensagens pré-preenchidas dos CTAs
- `src/components/Planos.jsx` — nomes, preços e itens de cada plano
- `src/components/WhatsAppPreview.jsx` — conversa simulada do agente de IA
- `tailwind.config.js` — cores e tipografia (herdadas do site oficial)
