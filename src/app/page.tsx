import Card from '@/components/ui-server-components/components/card';
import LoadingCard from '@/components/ui-server-components/components/loading-card';
import { GithubPinned } from '@/lib/types';
import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Suspense } from 'react';

export const fetchCache = "force-no-store";
export const revalidate = 0; // seconds
export const dynamic = "force-dynamic";

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const getPinnedProjects = async (username: string) => {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "${username}") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  id
                  description
                  openGraphImageUrl
                  url
                  createdAt
                  primaryLanguage {
                    id
                    name
                  }
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge: any) => edge.node);
  return pinnedItems;
};
export default async function Home() {
  const data: GithubPinned = await getPinnedProjects('alpererdogan8');

  return (
    <main className="w-full flex flex-col gap-6">
      <Suspense fallback={<LoadingCard />}>
        {data &&
          data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.name}
                description={item.description}
                createdAt={item.createdAt}
                url={item.url}
                language={item?.primaryLanguage?.name}
                stars={item.stargazers.totalCount}
              />
            );
          })}
      </Suspense>
    </main>
  );
}
