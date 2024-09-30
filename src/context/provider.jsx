
import { useState, createContext, useMemo } from 'react';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [portuguese, setPortuguese] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [page, setPage] = useState('home');

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