import type { Data, ApiResponse, Article } from "@/types/api";
import { useBlogStore } from "@/stores/blogs";

/**
 * Get fetched data from the store
 * @param numberItems - Number of items to get (0 for all)
 * @param itemByID - Get a single item by ID
 * @returns Data[] - Fetched data filtered by numberItems or itemByID
 */
export const getData = async (
  numberItems: number = 0,
  itemByID: null | number = null
): Promise<Data[]> => {
  const store = useBlogStore();
  const blogs = store.$state.blogs;
  const apikey = "7150325712f64dc89925d5e926b0a357";

  if (blogs.length === 0) {
    store.setLoading(true);

    try {
      const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=9&apiKey=${apikey}`;
      const { data } = await useFetch<ApiResponse>(url);
      const articles = data.value?.articles as Article[];

      const blogs = articles.map((article, index) => ({
        id: index + 1,
        title: article.title,
        content: article.content,
        source: article.source.name || "unknown",
        description: article.description,
      }));

      store.setBlogs(blogs);
    } finally {
      store.setLoading(false);
    }
  }

  if (numberItems > 0) {
    return blogs.slice(0, numberItems);
  }

  if (itemByID !== null) {
    return blogs.filter((item) => item.id === itemByID);
  }

  return blogs || [];
};
