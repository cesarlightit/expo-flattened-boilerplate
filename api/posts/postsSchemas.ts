import { z } from "zod";

export const postIdSchema = z.string();

export type PostId = z.infer<typeof postIdSchema>;

export const postSchema = z.object({
  id: postIdSchema,
  title: z.string().min(3),
});

export type Post = z.infer<typeof postSchema>;

export const createPostSchema = postSchema.omit({
  id: true,
});

export type CreatePost = z.infer<typeof createPostSchema>;
