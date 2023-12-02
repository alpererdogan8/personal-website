interface Stargazers {
  totalCount: string;
}

export interface PinnedItem {
  name: string;
  id: string;
  url: string;
  description: string;
  openGraphImageUrl: string;
  createdAt: string;
  primaryLanguage: { id: string; name: string };
  stargazers: Stargazers;
}

export interface GithubPinned extends Array<PinnedItem> {}

export interface MainCard {
  title: string;
  url: string;
  image?: string;
  category?: string;
  author?: string;
  createdAt: string;
  content?: string;
  description?: string;
  language?: string;
  stars?: string;
}
