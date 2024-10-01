import { AbstractModuleApi } from "../AbstractModuleApi";
import { User } from "./authSchemas";

export class AuthApi extends AbstractModuleApi {
  login(username: string, password: string) {
    return this._req.post("/auth/login", {
      username,
      password,
    });
  }

  async me(): Promise<User> {
    return this._req.get("/auth/me");
  }
}
