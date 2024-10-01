import { ApiRequest } from "./ApiRequest";

export class AbstractModuleApi {
  protected _req: ApiRequest;

  constructor(req: ApiRequest) {
    this._req = req;
  }
}
