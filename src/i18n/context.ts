import { createContext, useContext } from 'react';

export type Lang = 'pt' | 'en';

/** Qualquer texto do site existe nos dois idiomas. */
export type L = Record<Lang, string>;

export type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Resolve um texto bilíngue para o idioma ativo. */
  t: (value: L) => string;
};

export const LanguageContext = createContext<LanguageValue | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>');
  return ctx;
};
