
import { useState, createContext, useMemo, useCallback, useEffect, useRef } from 'react';
import data from '../data/language.json';

export const HOME = 'HOME';
export const ABOUT = 'ABOUT';
export const BUSINESS = 'BUSINESS';
export const PORTFOLIO = 'PORTFOLIO';
export const PROJECTS = 'PROJECTS'

export const PT = "pt";
export const EN = "en";

export const AppContext = createContext();

const findContent = (language) => {
  const content = data.content.filter((item) => item.id === language);
  return content[0];
}

export default function AppContextProvider({ children }) {
  const [pageContent, setPageContent] = useState(findContent(EN));
  const [portuguese, setPortuguese] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [page, setPage] = useState(HOME);
  const isMounted = useRef(false);
  
  const changeContentLanguage = useCallback((language) => {
    // console.log('changing language')
    setPageContent(findContent(language));
  }, [setPageContent]);

  const setTheme = useCallback((isDark) => {
    // console.log('setting theme', isDark)
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    portuguese 
      ? changeContentLanguage(PT)
      : changeContentLanguage(EN)
  }, [portuguese]);
  
  useEffect(() => {
    if (!isMounted.current) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
      } else {
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
      isMounted.current = true;
    } else {
      setTheme(darkMode);
    }
  }, [darkMode]);

  const contextValue = useMemo(() => ({
    pageContent,
    portuguese,
    setPortuguese,
    darkMode,
    setDarkMode,
    openMenu,
    setOpenMenu,
    page,
    setPage
  }), [portuguese, darkMode, openMenu, page]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}