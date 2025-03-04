import { defineStore } from "pinia";
import type { Data } from "@/types/api";

interface State {
  blogs: Data[];
  loading: boolean;
}

export const useBlogStore = defineStore("blogs", {
  state: (): State => ({
    blogs: [],
    loading: false,
  }),
});
