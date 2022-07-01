// eslint-disable-next-line simple-import-sort/imports
import { AxiosRequestConfig } from 'axios';
import { Strings } from '../../utils/common';

export const successRequestInterceptor = (config: any): AxiosRequestConfig => {
  // substitute url params if applicable, assume no other params are there but these two
  // this won't work if the order of the params is not PracticeID, then PatientID
  const { url, additionalParams } = config;
  config.url = Strings.substitute(url, additionalParams);
  return config;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const errorRequestInterceptor = (error: any): Promise<any> => {
  // dispatch(loaderSlice.actions.removePendingRequests());
  // capture error
  const { message } = error;
  if (message === 'token Expried') {
    console.log('token Experied');
  } else {
    const errorMsg = `Request failed with message: ${message}`;
  }
  return Promise.reject(error);
};
