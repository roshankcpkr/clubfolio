import { useContext } from "react"
import { ThemeContext } from "../context/theme"
import Head from "next/head"

const ThemeToggle = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    return (
        <>
            <Head>
                <link rel="stylesheet" href={`styles/theme.css`} />
            </Head>
            {
                theme === "light" ? (
                    <span
                        onClick={() => {
                            setTheme("dark")
                            window.localStorage.setItem("theme", "dark")
                        }}
                    ></span>
                ) :(
                    <span
                        onClick={() => {
                            setTheme("light")
                            window.localStorage.setItem("theme", "light")
                        }}
                    ></span>
                )
            }
        </>
    )

}

export default ThemeToggle