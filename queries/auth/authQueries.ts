import { createQueryKeys } from "@lukemorales/query-key-factory";

import api from "@/api";

export const authQueries = createQueryKeys("auth", {
  me: () => ({
    queryKey: ["me"],
    queryFn: () => api.auth.me(),
  }),
});
