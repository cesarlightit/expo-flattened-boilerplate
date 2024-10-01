import { useQuery } from "@tanstack/react-query";

import queries from "../queries";

export const usePostsQuery = () => {
  return useQuery(queries.posts.list());
};
