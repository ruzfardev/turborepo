import {attach, createEffect} from "effector";

import {NavigateFxPayload, NavigateParams} from "../types";
import {$location, $navigate} from "../stores";
import {resolveUrl} from "../lib";

export const navigateFx = attach({
    source: {navigate: $navigate, location: $location},
    mapParams: (params: NavigateParams, {navigate, location}) => ({...params, navigate, location}),
    effect: createEffect(({navigate, location, to, ...options}: NavigateFxPayload) => {
        if (!navigate || !location) return;

        if (typeof to === 'string') {
            if (to === '' || to.startsWith('/')) {
                return navigate(to, options);
            }

            if (to.includes('..')) {
                return navigate(resolveUrl(location.pathname, to), options);
            }

            return navigate(`${location.pathname}/${to}`, options);
        }

        return navigate(to, options);
    })
});

