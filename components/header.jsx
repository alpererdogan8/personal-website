"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useThemeContext } from "../context/contextAPI";
import ThemeButton from "../components/themeButton";

const Header = ({ setTheme }) => {
  const pathname = usePathname().toString();
  const { contextTheme } = useThemeContext();
  const [isPathname, setIsPathname] = useState({
    home: "",
    bookmarks: "",
    blog: "",
  });

  useEffect(() => {
    setTheme(contextTheme);
  }, [contextTheme,setTheme]);

  const isActive =
    "bg-[#e6e6e69a] shadow-md shadow-gray-200 dark:shadow-none dark:border-orange-600 dark:bg-black";

  useEffect(() => {
    if (pathname == "/") {
      setIsPathname({ home: isActive });
    }
    if (pathname == "/bookmarks") {
      setIsPathname({ bookmarks: isActive });
    }
    if (pathname == "/blog") {
      setIsPathname({ blog: isActive });
    }
  }, [pathname]);

  return (
    <nav>
      <h1 className=" w-full text-center md:text-left flex justify-center md:justify-between ">
        Alper Erdogan
        <span className="hidden md:block">
          <ThemeButton />
        </span>
      </h1>

      <div className="w-full   flex flex-wrap justify-center md:justify-start   mt-[6px] mb-[18px]  ">
        <Link
          href="/"
          className={` ${isPathname.home}  transition-all duration-150 ease-linear  border-2 border-[#fff0] hover:border-gray-300 hover:dark:border-orange-600  rounded-lg hover:bg-[#e6e6e69a] dark:hover:bg-[#ea5a0c6b]
        `}
        >
          Home
        </Link>
        <Link
          href="/bookmarks"
          className={` ${isPathname.bookmarks}  transition-all duration-150 ease-linear  border-2 border-[#fff0] hover:border-gray-300 hover:dark:border-orange-600  rounded-lg hover:bg-[#e6e6e69a] dark:hover:bg-[#ea5a0c6b]
          `}
        >
          Bookmarks
        </Link>
        <Link
          href="/blog"
          className={` ${isPathname.blog}  transition-all duration-150 ease-linear  border-2 border-[#fff0] hover:border-gray-300 hover:dark:border-orange-600  rounded-lg hover:bg-[#e6e6e69a] dark:hover:bg-[#ea5a0c6b]
        `}
        >
          Blog
        </Link>
        {/* Belki sonra eklerim */}

        {/* <Link
          href="/myprojects"
          className={pathname === "/projects" ? "active" : ""}
        >
          Projects
        </Link> */}

        {/* Belki sonra eklerim */}
        <Link
          className={
            " transition-all duration-150 ease-linear  border-2 border-[#fff0] hover:border-gray-300 hover:dark:border-orange-600  rounded-lg hover:bg-[#e6e6e69a] dark:hover:bg-[#ea5a0c6b]"
          }
          href="https://github.com/alpererdogan8"
          target="_blank"
        >
          Github
        </Link>
        <Link
          className={
            " transition-all duration-150 ease-linear  border-2 border-[#fff0] hover:border-gray-300 hover:dark:border-orange-600  rounded-lg hover:bg-[#e6e6e69a] dark:hover:bg-[#ea5a0c6b]"
          }
          href="https://codepen.io/alpererdogan8"
          target="_blank"
        >
          Codepen
        </Link>
        <Link
          className={
            " transition-all duration-150 ease-linear  border-2 border-[#fff0] hover:border-gray-300 hover:dark:border-orange-600  rounded-lg hover:bg-[#e6e6e69a] dark:hover:bg-[#ea5a0c6b]"
          }
          href="https://twitter.com/alpererdogandev"
          target="_blank"
        >
          Twitter
        </Link>
      </div>
    </nav>
  );
};

export default Header;
