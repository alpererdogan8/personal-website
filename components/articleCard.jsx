import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

dayjs.extend(relativeTime);
const ArticleCard = ({ link, header, article, site, time }) => {
  const hostname = new URL(site).hostname;
  return (
    <section className="min-h-[60px] dark:border-b-[#717171] border-b-2 last:border-0 mb-6">
      <Link href={link} target="_blank" className={"p-0 mr-0"}>
        {header ? (
          <header className="text-[1.3rem] tracking-[-1px] leading-[32px] line-clamp-2 hover:underline hover:text-orange-600 hover:cursor-pointer">
            {header}
          </header>
        ) : (
          ""
        )}
        <div className="hidden md:block hover:text-orange-600">
          <article
            dangerouslySetInnerHTML={{ __html: article }}
            className="my-2  mb-6  text-md tracking-[-1px] line-clamp-2 leading-5 font-semibold dark:text-[#B8B8B8] hover:underline hover:text-orange-600 hover:cursor-pointer "
          />
        </div>
        <h3 className="text-sm font-semibold mb-2 mt-2 flex md:justify-between">
          <Link
            href={`https://${hostname}`}
            target="_blank"
            className=" mx-0 px-0 hover:underline hover:text-orange-600"
          >
            {hostname}
          </Link>
          <div className="md:hidden px-3">•</div>
          <span>{dayjs(time).fromNow(true)}</span>
        </h3>
      </Link>
    </section>
  );
};

export default ArticleCard;
