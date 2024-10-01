import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView } from "react-native";

import { CreatePostScreen } from "./screens/posts/CreatePostScreen";
import { PostsScreen } from "./screens/posts/PostsScreen";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <PostsScreen />
        <CreatePostScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
