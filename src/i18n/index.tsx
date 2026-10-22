import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, type L, type Lang } from './context';

const STORAGE_KEY = 'lang';

const readStored = (): Lang | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'pt' || stored === 'en' ? stored : null;
  } catch {
    return null;
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => readStored() ?? 'pt');

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // modo privado ou storage bloqueado: a escolha vale só nesta visita
    }
  }, []);

  const t = useCallback((value: L) => value[lang], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
