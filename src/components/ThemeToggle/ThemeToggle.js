import React from 'react'
import Style from "./ThemeToggle.module.css";
import { FaToggleOn } from "react-icons/fa";
import useLocalStorage from "use-local-storage";

const ThemeToggle = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark');

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme)
    }

  return (
    <div className={Style.themeToggle} >
        <h2>Change Theme</h2>
        <FaToggleOn onClick={switchTheme} className={Style.toggleIcon}  />
    </div>
  )
}

export default ThemeToggle