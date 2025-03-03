import jsonData from "./data.json";
import type { Data } from "@/types/api";

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);

  // TODO: Implement your own data fetching logic

  return jsonData;
});
