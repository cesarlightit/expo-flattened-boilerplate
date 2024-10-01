import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useRef } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Alert, Button, TextInput, View } from "react-native";

import { CreatePost, createPostSchema } from "@/api/posts/postsSchemas";
import { FormTextField } from "@/components/forms/FormTextField";
import { useCreatePostMutation } from "@/hooks/useCreatePostMutation";

export const CreatePostScreen = () => {
  const inputRef = useRef<TextInput>(null);

  const createPostMutation = useCreatePostMutation();

  const { control, handleSubmit, reset } = useForm<CreatePost>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = useCallback<SubmitHandler<CreatePost>>(
    (post) => {
      return createPostMutation.mutateAsync(post, {
        onSuccess() {
          reset();
          Alert.alert("Post created!");
          inputRef.current?.focus();
        },
      });
    },
    [createPostMutation, reset],
  );

  const onError = useCallback<SubmitErrorHandler<CreatePost>>(() => {
    Alert.alert("Error");
    inputRef.current?.focus();
  }, []);

  return (
    <View>
      <FormTextField
        control={control}
        name="title"
        inputRef={inputRef}
        input={{
          autoFocus: true,
          autoCorrect: false,
          onSubmitEditing: handleSubmit(onSubmit, onError),
        }}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit, onError)} />
    </View>
  );
};
