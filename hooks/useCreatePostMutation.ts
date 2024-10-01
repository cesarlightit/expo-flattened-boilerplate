import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "@/api";
import { CreatePost, Post } from "@/api/posts/postsSchemas";
import queries from "@/queries";

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, CreatePost>({
    mutationFn: (post) => api.posts.create(post),
    onSuccess() {
      queryClient.invalidateQueries(queries.posts.list());
    },
  });
};
