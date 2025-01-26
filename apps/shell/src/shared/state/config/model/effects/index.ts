import { createEffect } from "effector";

import * as configApi from "@/shared/api/config";

export const loadConfigFx = createEffect(() => {
  return configApi.get();
});
