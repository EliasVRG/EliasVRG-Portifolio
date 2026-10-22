import { Fragment } from 'react';
import { stack } from '../content/site';
import { useLanguage } from '../i18n/context';

const Stack = () => {
  const { t } = useLanguage();

  return (
    <section className="stack" id="stack">
      <span className="eyebrow">{t(stack.eyebrow)}</span>
      <p className="words">
        {stack.items.map((item) => (
          <Fragment key={item}>
            <span className="nw">{item}</span>{' '}
            <i>/</i>{' '}
          </Fragment>
        ))}
        <span className="last">{t(stack.last)}</span>
      </p>
    </section>
  );
};

export default Stack;
