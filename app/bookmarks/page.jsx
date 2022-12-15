import React from "react";
import ArticleCard from "../../components/articleCard";

async function getNotionDatabase() {
  const fetchOption = {
    method: "post",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_SECRET_KEY}`,
      "Notion-Version": "2022-06-28",
    },
  };

  const rawData = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
    fetchOption,
    {
      next: { revalidate: 7200 },
    }
  );
  const jsonData = await rawData.json();
  const mappedData = [jsonData].map((item) => {
    return item.results.map((result) => {
      return {
        pageName: result.properties.Name.title[0].text.content,
        pageLink: result.properties.URL.url,
        pageDate: result.properties.Created.created_time,
      };
    });
  });
  return mappedData[0];
}

const Bookmarks = async () => {
  const data = await getNotionDatabase();
  return (
    <main>
      <section className="mb-3 ">
        <header>Bookmarks</header>
        <article className="text-lg font-medium border-b-2 border-b-[#717171]  tracking-[-0.7px] ">
          As I surf the web, I save bookmarks that I like and find interesting
          to look at later.
        </article>
      </section>
      <article>
        {React.Children.toArray(
          data &&
            data.map((item, key) => (
              <>
                {item.pageLink ? (
                  <ArticleCard
                    key={key}
                    link={item.pageLink}
                    header={item.pageName}
                    article={""}
                    site={item.pageLink}
                    time={item.pageDate}
                  />
                ) : (
                  ""
                )}{" "}
              </>
            ))
        )}
      </article>
    </main>
  );
};

export default Bookmarks;
