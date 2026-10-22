import { useEffect } from 'react';
import About from '../components/About';
import Cases from '../components/Cases';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import { meta } from '../content/site';
import { LanguageProvider } from '../i18n';
import { useLanguage } from '../i18n/context';

/** Mantém título e descrição da página no idioma ativo. */
const DocumentMeta = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t(meta.title);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t(meta.description));
  }, [t]);

  return null;
};

/** Abrir o site já com #secao na URL: o alvo só existe depois da montagem. */
const useHashOnLoad = () => {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;

    const go = () => {
      try {
        document.querySelector(hash)?.scrollIntoView();
      } catch {
        // hash que não é um seletor válido: ignora
      }
    };

    go();
    // a página ainda cresce enquanto fontes e imagens chegam, então reposiciona
    if (document.readyState !== 'complete') {
      window.addEventListener('load', go, { once: true });
    }
    document.fonts?.ready.then(go);

    return () => window.removeEventListener('load', go);
  }, []);
};

const Portfolio = () => {
  useHashOnLoad();

  return (
    <LanguageProvider>
      <DocumentMeta />
      <Header />
      <main>
        <Hero />
        <Cases />
        <div className="wrap">
          <Projects />
          <Stack />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
};

export default Portfolio;
