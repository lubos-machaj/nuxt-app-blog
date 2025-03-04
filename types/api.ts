export interface Data {
  id: number;
  title: string;
  image: string;
  source: string;
  content: string;
  description: string;
}

export type ApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
