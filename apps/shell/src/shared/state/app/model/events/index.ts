import {createEvent} from "effector";
import {once} from "patronum";

export const appInitialized = createEvent<void>();
export const appMounted = once(appInitialized);