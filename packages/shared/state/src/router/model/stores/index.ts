import {createStore} from "effector";

import type {Location, NavigateFunction} from "react-router-dom";

export const $navigate = createStore<NavigateFunction | null>(null);

export const $location = createStore<Location | null>(null);