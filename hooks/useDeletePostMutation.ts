import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "@/api";
import { Post } from "@/api/posts/postsSchemas";
import queries from "@/queries";

interface DeletePostMutationContext {
  previousData: Post[] | undefined;
}

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();
  const { queryKey } = queries.posts.list();

  return useMutation<void, Error, string, DeletePostMutationContext>({
    mutationFn: (id) => api.posts.delete(id),
    async onMutate(id) {
      await queryClient.cancelQueries({ queryKey });
      const previousData = queryClient.getQueryData<Post[]>(queryKey);
      queryClient.setQueryData<Post[]>(queryKey, (posts) =>
        posts?.filter((post) => post.id !== id),
      );
      return {
        previousData,
      };
    },
    onError(_err, _variables, context) {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData);
      }
    },
    onSettled() {
      queryClient.invalidateQueries();
    },
  });
};
