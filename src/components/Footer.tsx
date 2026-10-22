import { identity } from '../content/site';
import { useLanguage } from '../i18n/context';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} {identity.name}
      </span>
      <span>
        {t({
          pt: 'Feito com React, TypeScript e Vite',
          en: 'Built with React, TypeScript and Vite',
        })}
      </span>
    </footer>
  );
};

export default Footer;
