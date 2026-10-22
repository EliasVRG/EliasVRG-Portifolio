# Portfólio — Elias Garcia

> **"Eu acho o que os outros não acham."**

Portfólio pessoal em uma página, bilíngue (pt-BR / EN), com foco nos casos de produção: integrações corporativas, análise de causa-raiz e arquitetura de sistemas.

🔗 **No ar:** [elias-vrg-portifolio.vercel.app](https://elias-vrg-portifolio.vercel.app)

## Stack

- **Framework:** React 18 + TypeScript (Vite)
- **Estilo:** CSS próprio com design tokens — sem framework de UI
- **Tipografia:** Archivo (display) + Manrope (texto) + DM Mono (rótulos)
- **Deploy:** Vercel

Três dependências de produção: `react`, `react-dom` e `@vercel/speed-insights`.

## Como mexer no conteúdo

Todo o texto do site está em **[`src/content/site.ts`](src/content/site.ts)**, nos dois idiomas. Não é preciso abrir componente nenhum para trocar uma frase, adicionar um projeto ou um caso.

```ts
lead: {
  pt: 'Encontra vagas freelance publicadas...',
  en: 'Finds published freelance jobs...',
},
```

Trechos entre `**asteriscos**` saem em destaque na página.

### Fotos

Coloque os arquivos em `public/` com estes nomes e eles aparecem sozinhos:

| Arquivo                      | Proporção | Onde aparece            |
| ---------------------------- | --------- | ----------------------- |
| `public/elias-retrato.jpg`   | 3:4       | ao lado do título do topo |
| `public/elias-trabalho.jpg`  | 1:1       | na seção Sobre          |

Enquanto o arquivo não existir, o lugar mostra uma moldura dizendo o que falta.

## Idiomas

O seletor PT/EN fica no topo e guarda a escolha no navegador. Ele também ajusta `<html lang>`, o título da aba e a meta description. A estrutura está em `src/i18n/`:

- `context.ts` — tipo `L` (`{ pt, en }`), contexto e o hook `useLanguage()`
- `index.tsx` — o `LanguageProvider`

## Tema

Claro e escuro saem do `prefers-color-scheme` do sistema. O CSS também responde a `data-theme="dark"` / `"light"` no `<html>`, então dá para ligar um botão de tema sem mexer nos estilos.

## Rodando local

```bash
npm install
npm run dev
```

O servidor sobe em `http://localhost:8080`.

```bash
npm run build     # build de produção em dist/
npm run preview   # serve o build
npm run lint      # eslint
```

## Imagem de compartilhamento

`public/og-image.png` (1200×630) é o card que aparece ao colar o link em redes sociais e no WhatsApp. Se a headline mudar, essa imagem precisa ser refeita junto.
