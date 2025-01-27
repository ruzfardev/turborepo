import {createEvent} from "effector";

import type {Location, NavigateFunction} from "react-router-dom";

import {NavigateEventPayload} from "../types";

export const navigateAttached = createEvent<NavigateFunction>();
export const navigated = createEvent<NavigateEventPayload>();

export const locationAttached = createEvent<Location>();