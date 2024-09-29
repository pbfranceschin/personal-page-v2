
import { useState, createContext, useMemo } from 'react';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [portuguese, setPortuguese] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const contextValue = useMemo(() => ({
    portuguese,
    setPortuguese,
    darkMode,
    setDarkMode,
    openMenu,
    setOpenMenu
  }), [portuguese, darkMode, openMenu]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}