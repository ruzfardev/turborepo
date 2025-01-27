import {sample} from "effector";

import {locationAttached, navigateAttached, navigated} from "../events";
import {$location, $navigate} from "../stores";
import {navigateFx} from "../effects";
import {NavigateParams} from "../types";

/**
 * Create react-router-dom navigate store
 */
sample({
    clock: navigateAttached,
    target: $navigate
});
/**
 * Navigate to specified route
 */
sample({
    clock: navigated,
    fn: (payload): NavigateParams => typeof payload === 'string' ? {to: payload} : payload,
    target: navigateFx
});
/**
 * Create react-router-dom location store
 */
sample({
    clock: locationAttached,
    target: $location
});