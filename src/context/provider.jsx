
import { useState, createContext, useMemo, useCallback, useEffect, useRef } from 'react';

export const HOME = 'HOME';
export const ABOUT = 'ABOUT';
export const BUSINESS = 'BUSINESS';
export const PORTFOLIO = 'PORTFOLIO';
export const PROJECTS = 'PROJECTS'

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [portuguese, setPortuguese] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [page, setPage] = useState(HOME);
  const isMounted = useRef(false);

  console.log('darkMode', darkMode)

  const setTheme = useCallback((isDark) => {
    console.log('setting theme', isDark)
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, []);
  
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