import { defineStore } from "pinia";
import type { Data } from "@/types/api";

interface State {
  blogs: Data[];
  loading: boolean;
}

export const useBlogStore = defineStore("blogs", {
  state: (): State => ({
    blogs: [],
    loading: true,
  }),
  actions: {
    setBlogs(blogs: Data[]) {
      this.blogs = blogs;
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
  },
});
