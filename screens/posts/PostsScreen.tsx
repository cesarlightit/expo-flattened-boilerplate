import { useCallback } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
} from "react-native";

import { Post } from "@/api/posts/postsSchemas";
import { PostListItem } from "@/components/PostListItem";
import { useDeletePostMutation } from "@/hooks/useDeletePostMutation";
import { useRefreshControl } from "@/hooks/useRefreshControl";

import { usePostsQuery } from "../../hooks/usePostsQuery";

export const PostsScreen = () => {
  const postsQuery = usePostsQuery();

  const deletePostMutation = useDeletePostMutation();

  const [isRefreshing, refresh] = useRefreshControl(postsQuery);

  const deletePost = useCallback(
    (post: Post) => {
      Alert.alert("Delete", post.title, [
        {
          text: "Delete",
          onPress() {
            deletePostMutation.mutate(post.id);
          },
        },
      ]);
    },
    [deletePostMutation],
  );

  if (postsQuery.isSuccess) {
    return (
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }
        data={postsQuery.data}
        renderItem={({ item }) => (
          <PostListItem item={item} onLongPress={() => deletePost(item)} />
        )}
        keyExtractor={({ id }) => id}
      />
    );
  }

  return <ActivityIndicator size="large" />;
};
