import { defineStore } from "pinia";
import type { Data } from "@/types/api";

export const useBlogStore = defineStore("blogs", () => {
  const blogs = ref<Data[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchBlogs = async () => {
    loading.value = true;
    try {
      const data = await $fetch("/data.json");
      blogs.value = data as Data[];
    } catch (err) {
      error.value = "Failed to load blogs";
    } finally {
      loading.value = false;
    }
  };

  return { blogs, loading, error, fetchBlogs };
});
