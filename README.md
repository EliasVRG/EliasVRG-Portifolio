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

| Arquivo                     | Proporção do slot | Onde aparece              |
| --------------------------- | ----------------- | ------------------------- |
| `public/elias-retrato.jpeg` | 1:1               | ao lado do título do topo |
| `public/elias-trabalho.jpeg`| 4:5               | na seção Sobre            |

Enquanto o arquivo não existir, o lugar mostra uma moldura dizendo o que falta.

A proporção de cada slot e o ponto de foco do corte ficam em `photos`, dentro de
[`src/content/site.ts`](src/content/site.ts) — trocar por uma foto de outro formato é mudar
`ratio` ali, sem tocar no CSS:

```ts
portrait: { src: '/elias-retrato.jpeg', ratio: '1 / 1', focus: 'center', /* ... */ }
```

As fotos são servidas direto de `public/`, sem processamento no build, então **o arquivo precisa
entrar já redimensionado e comprimido**. O retrato aparece em 300px e a foto do Sobre em ~393px,
então o dobro disso é suficiente:

```bash
convert original.jpeg -resize 800x800 -strip -interlace Plane -quality 80 public/elias-retrato.jpeg
```

Os arquivos que vieram da câmera estão em `src/assets/fotos-originais/` — ficam fora de `public/`,
então não são publicados; servem só para gerar versões novas.

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
