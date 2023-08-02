import Badge from "../components/badge";
import BadgeJSON from "../components/badge.json";

export default function Home() {
  return (
    <main>
      <section>
        <header className="border-b-2 border-b-[#717171] mb-[3px] ">
          About Me
        </header>
        <article className="mb-[15px] font-semibold text-[18px] dark:text-[#B8B8B8] tracking-[-1px]">
          A change-adaptive front-end developer with a constant desire to
          improve programming skills. Skilled in HTML, JavaScript, React.js and
          Cascading Style Sheets (CSS). Relating to Express.js,
          MongoDB(mongoose), Node.js in the backend.Interested in Space,
          Artificial Intelligence, Games too.
        </article>
      </section>
      <section>
        <header className="text-[1.675rem]">Tech Stack</header>
        <article className="flex flex-wrap">
          {BadgeJSON.map((badge, key) => (
            <Badge key={key} src={badge.url} alt={badge.altName} />
          ))}
        </article>
      </section>
      <section>
        <header className="text-[1.675rem]">Find Me</header>
        <article>
          <p className="font-semibold">
            My{" "}
            <a
              target="_blank"
              className="underline ml-0 pl-1 hover:text-orange-600"
              href="https://www.linkedin.com/in/alper-erdogan-13a009148/">
              LinkedIn
            </a>
          </p>
          <p className="font-semibold">
            Mail me at{" "}
            <a
              className="underline ml-0 pl-1 hover:text-orange-600"
              href="mailto:me@alpererdogan.dev">
              me@alpererdogan.dev
            </a>
          </p>
          <p className="font-semibold">
            CV'ye bakmak istersen
            <a
              target="_blank"
              className="underline ml-0 pl-1 hover:text-orange-600"
              href="https://docs.google.com/document/d/1kG32fACDBuTjkRue5mQ0RHoAaLhoK8qSiUOt-_MktM8/edit#heading=h.jhv78pp9wtzd">
              resume
            </a>
          </p>
          <p className="font-semibold">
            You can see my full
            <a
              target="_blank"
              className="underline ml-0 pl-1 hover:text-orange-600"
              href="https://docs.google.com/document/d/1GaBWl3GA0Jl1_ku1penYNUI3IXTmgwENboXFdam13bY/edit">
              CV
            </a>
          </p>
        </article>
      </section>
    </main>
  );
}
