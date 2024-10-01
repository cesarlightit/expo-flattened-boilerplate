import { createQueryKeys } from "@lukemorales/query-key-factory";

import api from "@/api";

export const postsQueries = createQueryKeys("posts", {
  list: () => ({
    queryKey: ["all"],
    queryFn: () => api.posts.getAll(),
  }),
});
