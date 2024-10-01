import { ApiRequest } from "./ApiRequest";
import { AuthApi } from "./auth/AuthApi";
import { PostsApi } from "./posts/PostsApi";

export class Api {
  public auth: AuthApi;
  public posts: PostsApi;

  constructor(baseUrl: string) {
    const req = new ApiRequest(baseUrl);

    this.auth = new AuthApi(req);
    this.posts = new PostsApi(req);
  }
}
