"use client";
import { useState } from "react";
import ThemeProvider, { useThemeContext } from "../context/contextAPI";
import Footer from "../components/footer";
import Header from "../components/header";
import "./global.css";
// propsTheme.theme === "dark" ? "light" : "dark"

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark")
  return (
    <ThemeProvider>
      <html
        lang="en"
        className={`${theme} font-sans tracking-[-4%] scrollbar `}
      >
        <body className="grid  grid-cols-custom h-[100vh] align-middle">
          <main className="col-start-2 col-end-3 w-full flex flex-col justify-between h-[100vh]">
            <section>
              <Header setTheme={setTheme} />
              <article>{children}</article>
            </section>
            <Footer />
          </main>
          
        </body>
      </html>
    </ThemeProvider>
  );
}
