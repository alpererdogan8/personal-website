import ArticleCard from '../../components/articleCard';
import { xml2json } from 'xml-js';
import React from 'react';

async function getData() {
	const data = await fetch('https://medium.com/feed/@alpererdogan8');
	const response = await data.text();
	const convertString = xml2json(response, { compact: true, spaces: 2 });
	const convertJSON = JSON.parse(convertString);

	return convertJSON.rss.channel.item.map((post) => {
		return {
			header: post.title._cdata,
			article: post['content:encoded']._cdata,
			link: post.link._text,
			time: post.pubDate._text,
		};
	});
}

const Blog = async () => {
	const data = await getData();

	return (
		<section>
			<div className="border-b-2 border-b-[#717171] mb-[12px] ">
				<header>Blog</header>
				<article className="text-lg font-medium tracking-[-0.7px] ">Posts I wrote on the medium blogs.</article>
			</div>

			<article>
				{React.Children.toArray(
					data &&
						data.map((item) => (
							<ArticleCard
								header={item.header}
								article={item.article}
								link={item.link}
								time={item.time}
								site={item.link}
							/>
						)),
				)}
			</article>
		</section>
	);
};

export default Blog;
