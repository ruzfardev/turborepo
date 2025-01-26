import {sample} from "effector";

import {appMounted} from "../events";
import {$appMounted} from "../stores";

/**
 * Mount application
 */
sample({
    clock: appMounted,
    fn: () => true,
    target: $appMounted
});