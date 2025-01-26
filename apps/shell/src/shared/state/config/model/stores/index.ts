import {createStore} from "effector";

import {AppConfig} from "@/shared/models/config";
import {reshape} from "patronum";

export const $config = createStore<AppConfig | null>(null);

export const {$shellPages} = reshape({
    source: $config,
    shape: {
        $shellPages: (config) => config?.shell?.pages,
    },
});