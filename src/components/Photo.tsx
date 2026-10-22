import { useEffect, useState } from 'react';
import { useLanguage, type L } from '../i18n/context';

type Props = {
  src: string;
  alt: L;
  hint: L;
  spec: string;
  file: string;
  /** Proporção do slot, no formato de aspect-ratio: '1 / 1', '4 / 5'. */
  ratio: string;
  /** object-position, para escolher o que fica de fora no corte. */
  focus?: string;
};

/**
 * Mostra a foto quando o arquivo existe em public/.
 * Enquanto não existir, fica a moldura dizendo o que colocar ali.
 *
 * A checagem acontece fora da árvore, de propósito: um <img> escondido com
 * loading="lazy" não tem caixa, nunca entra no viewport e por isso nunca
 * carrega — então o onLoad que o revelaria jamais dispararia.
 */
const Photo = ({ src, alt, hint, spec, file, ratio, focus = 'center' }: Props) => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'checking' | 'ok' | 'missing'>('checking');

  useEffect(() => {
    let alive = true;
    const probe = new Image();
    probe.onload = () => {
      if (alive) setStatus('ok');
    };
    probe.onerror = () => {
      if (alive) setStatus('missing');
    };
    probe.src = src;

    return () => {
      alive = false;
    };
  }, [src]);

  return (
    <figure
      className={`photo${status === 'missing' ? ' photo--empty' : ''}`}
      style={{ aspectRatio: ratio }}
    >
      {status === 'ok' && <img src={src} alt={t(alt)} style={{ objectPosition: focus }} />}

      {status === 'missing' && (
        <span className="photo__hint">
          <b>{t(hint)}</b>
          {spec}
          <br />
          {file}
        </span>
      )}
    </figure>
  );
};

export default Photo;
