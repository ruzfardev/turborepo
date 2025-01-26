import axios from 'axios';

import {AppConfig} from "@/shared/models/config";

export const get = async (): Promise<AppConfig> => {
    try {
        const response = await axios.get<AppConfig>(
            '/manifest.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );

        if (!response.data || typeof response.data !== 'object') {
            throw new Error('Manifest config file is missing or malformed');
        }

        return response.data;
    } catch (error) {
        return Promise.reject(null);
    }
}