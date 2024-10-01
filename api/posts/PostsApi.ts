import { AbstractModuleApi } from "../AbstractModuleApi";
import { CreatePost, Post, PostId } from "./postsSchemas";

export class PostsApi extends AbstractModuleApi {
  create(post: CreatePost): Promise<Post> {
    return this._req.post("/posts", post);
  }

  delete(id: PostId): Promise<void> {
    return this._req.delete(`/posts/${id}`);
  }

  getAll(): Promise<Post[]> {
    return this._req.get("/posts");
  }
}
