import { Fragment } from 'react';

/**
 * Destaca trechos marcados com **asteriscos** no texto do conteúdo,
 * para que `src/content/site.ts` continue legível como texto corrido.
 */
const Rich = ({ text }: { text: string }) => (
  <>
    {text.split('**').map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>
    )}
  </>
);

export default Rich;
