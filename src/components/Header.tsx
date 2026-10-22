import { identity, nav } from '../content/site';
import { useLanguage } from '../i18n/context';

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="bar">
      <div className="wrap bar-in">
        <button
          type="button"
          className="mark"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {identity.shortName}
        </button>

        <nav aria-label={lang === 'pt' ? 'Seções' : 'Sections'}>
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="tools">
          <div className="lang" role="group" aria-label="Idioma / Language">
            <button type="button" aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>
              PT
            </button>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
