import type { Data } from "@/types/api";
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

  if (store.blogs.length === 0) {
    store.fetchBlogs();
  }

  if (numberItems > 0) {
    return store.blogs.slice(0, numberItems);
  }

  if (itemByID !== null) {
    return store.blogs.filter((item) => item.id === itemByID);
  }

  return store.blogs;
};
