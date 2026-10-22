import { hero, identity, nav, photos } from '../content/site';
import { useLanguage } from '../i18n/context';
import Photo from './Photo';
import Rich from './Rich';

const Hero = () => {
  const { lang, t } = useLanguage();
  const lines = hero.headline[lang];

  return (
    <div className="wrap">
      <section className="hero">
        <div>
          <span className="eyebrow">{t(identity.eyebrow)}</span>

          <h1>
            {lines.map((line, i) => (
              <span key={line} className={i === lines.length - 1 ? 'thin' : undefined}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="sub">
            <Rich text={t(hero.sub)} />
          </p>

          <div className="idx">
            {nav.map((item, i) => (
              <a key={item.id} href={`#${item.id}`}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{t(item.label)}</span>
              </a>
            ))}
          </div>
        </div>

        <Photo {...photos.portrait} />
      </section>
    </div>
  );
};

export default Hero;
