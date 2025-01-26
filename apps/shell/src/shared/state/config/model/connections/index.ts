import { sample } from "effector";

import { $appMounted } from "@/shared/state/app";

import { configLoaded } from "../events";
import { loadConfigFx } from "../effects";
import { $config } from "../stores";

/**
 * Load configuration when application is mounted
 */
sample({
  clock: $appMounted,
  filter: (appMounted: boolean) => !!appMounted,
  target: configLoaded,
});
/**
 * Load configuration json file
 */
sample({
  clock: configLoaded,
  target: loadConfigFx,
});
/**
 * Apply loaded configuration
 */
sample({
  clock: loadConfigFx.doneData,
  target: $config,
});
