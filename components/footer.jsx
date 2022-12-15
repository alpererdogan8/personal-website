import ThemeButton from "./themeButton";

const Footer = () => {
  return (
    <footer className="border-t-2 mt-20 py-2 w-full max-w-[614px] border-t-black dark:border-t-[#717171] font-black text-base tracking-wider flex justify-between">
      Made Next.JS with TailwindCSS and hosted Vercel
      <span className="block md:hidden">
        <ThemeButton />
      </span>
    </footer>
  );
};

export default Footer;
