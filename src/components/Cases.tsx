import { cases, casesIntro } from '../content/site';
import { useLanguage } from '../i18n/context';
import Rich from './Rich';

const Cases = () => {
  const { t } = useLanguage();

  return (
    <section className="band" id="casos">
      <div className="wrap">
        <span className="eyebrow">{t(casesIntro.eyebrow)}</span>
        <h2>{t(casesIntro.title)}</h2>

        <div className="cases">
          {cases.map((item) => (
            <article className="case" key={item.no}>
              <span className="no">{item.no}</span>

              <div>
                <h3>{t(item.title)}</h3>
                <span className="tag">{t(item.tag)}</span>
              </div>

              <p className="act">
                <Rich text={t(item.action)} />
              </p>

              <div className="metric">
                <div className="v">{t(item.metric.value)}</div>
                <div className="c">{t(item.metric.caption)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
