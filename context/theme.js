import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    useEffect(()=>{
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, [])
    return (<ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>)

}

export { ThemeContext, ThemeProvider };