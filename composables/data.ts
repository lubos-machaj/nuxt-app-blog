import type { Data, ApiResponse, Article } from "@/types/api";
import { useBlogStore } from "@/stores/blogs";

/**
 * Get data from the store
 * @param numberItems - Number of items to get (0 for all)
 * @param itemByID - Get a single item by ID
 * @returns Data[]
 */
export const getData = async (
  numberItems: number = 0,
  itemByID: null | number = null
): Promise<Data[]> => {
  const store = useBlogStore();
  const blogs = store.$state.blogs;

  if (blogs.length === 0) {
    const { data } = await useFetch<ApiResponse>(
      "https://newsapi.org/v2/everything?q=nasa&pageSize=9&apiKey=7150325712f64dc89925d5e926b0a357"
    );
    const articles = data.value?.articles as Article[];

    const blogs = articles.map((article, index) => ({
      id: index + 1,
      title: article.title,
      content: article.content,
      image: article.urlToImage,
      source: article.source.name || "unknown",
      description: article.description,
    }));

    store.$state.blogs = blogs;
  }

  if (numberItems > 0) {
    return blogs.slice(0, numberItems);
  }

  if (itemByID !== null) {
    return blogs.filter((item) => item.id === itemByID);
  }

  return blogs || [];
};
