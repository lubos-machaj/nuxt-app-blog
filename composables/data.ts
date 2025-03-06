import type { Data, ApiResponse, Post } from "@/types/api";
import { useBlogStore } from "@/stores/blogs";
import Id from "~/pages/Blog/[id].vue";

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

  if (blogs.length === 0) {
    const { data } = await useFetch<ApiResponse>(
      "https://dummyjson.com/posts/search?q=space"
    );
    const posts = data.value?.posts as Post[];

    const blogs = posts.map((item, index) => ({
      id: index + 1,
      body: item.body,
      tag: item.tags[0],
      title: item.title,
    }));

    store.setBlogs(blogs);
  }

  if (numberItems > 0) {
    return blogs.slice(0, numberItems);
  }

  if (itemByID !== null) {
    return blogs.filter((item) => item.id === itemByID);
  }

  return blogs || [];
};
