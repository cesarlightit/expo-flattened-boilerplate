import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import { Post } from "@/api/posts/postsSchemas";

export interface PostListItemProps extends TouchableOpacityProps {
  item: Post;
}

export const PostListItem: FC<PostListItemProps> = ({
  item,
  style,
  ...props
}) => (
  <TouchableOpacity
    style={StyleSheet.flatten([styles.container, style])}
    {...props}
  >
    <Text>{item.title}</Text>
  </TouchableOpacity>
);

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 12,
  },
});
