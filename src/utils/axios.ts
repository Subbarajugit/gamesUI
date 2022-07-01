/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
import axios, { AxiosInstance } from 'axios';
import {
    errorRequestInterceptor,
    successRequestInterceptor
} from '../services/interceptors/request.interceptor';
import {
    errorResponseInterceptor,
    successResponseInterceptor
} from '../services/interceptors/response.interceptor';

declare module 'axios' {
    export interface AxiosRequestConfig {
        requestStartedAt?: number;
        additionalParams: Array<string> | undefined;
    }
}

class tokenAuthApi {
    private _token: string;
    private _idToken: string;

    constructor(token = '') {
        this._token = token;
        this._idToken = token;
    }

    authAxios(
        additionalParams: Array<string> | undefined = undefined,
        version = 'v0',
        headers: Record<string, unknown> = {}
    ): AxiosInstance {
        // get custom attributes from the idToken and pass to the axios config
        const axiosInstance = axios.create({
            baseURL: ``,
            headers: {
                'X-RapidAPI-Key': 'bc409f204emshbc455e4b73c2ff1p1894bbjsndeb910be8a48',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
            timeout: 5000, // set timeout for the service request
            additionalParams,
        });

        axiosInstance.interceptors.request.use(
            successRequestInterceptor,
            errorRequestInterceptor
        );
        axiosInstance.interceptors.response.use(
            successResponseInterceptor,
            errorResponseInterceptor
        );
        return axiosInstance;
    }
}
export const tokenAuthApiInstance = new tokenAuthApi();
