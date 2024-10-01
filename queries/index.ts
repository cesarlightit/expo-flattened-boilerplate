import { mergeQueryKeys } from "@lukemorales/query-key-factory";

import { authQueries } from "./auth/authQueries";
import { postsQueries } from "./posts/postsQueries";

export default mergeQueryKeys(authQueries, postsQueries);
