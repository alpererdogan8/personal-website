import { createContext, useContext } from "react";
import useLocalStorage from "../components/useLocalStorage";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [contextTheme, setContextTheme] = useLocalStorage("theme","darksdsds");

  return (
    <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
