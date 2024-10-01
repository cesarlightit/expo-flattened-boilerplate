import { Api } from "./Api";

const apiBaseUrl = process.env.API_URL || "http://localhost:3000";

export default new Api(apiBaseUrl);
