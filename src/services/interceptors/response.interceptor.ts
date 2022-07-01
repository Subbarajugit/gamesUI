import { AxiosResponse } from 'axios';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const successResponseInterceptor = (response: AxiosResponse): any => {
  const {
    config: { requestStartedAt, method },
    request,
  } = response;
  // get performance times
  if (requestStartedAt && requestStartedAt > 0) {
    const ExecutionTime = `${new Date().getTime() - requestStartedAt} ms`;
    const message = {
      message: 'Performance',
      ExecutionTime,
      Method: method?.toUpperCase(),
      Request: request.responseURL,
      Status: request.status,
      // Browser: Browser.get(),
      // Device: Device.get(),
    };
    // Logger.log('debug', message);
  }
  //
  //dispatch(loaderSlice.actions.removePendingRequests());
  return {
    ...response,
    httpStatus: response.status,
    config: {},
    request: {},
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const errorResponseInterceptor = (error: any): Promise<any> => {
  // dispatch(loaderSlice.actions.removePendingRequests());
  // capture error
  const { response, message } = error;
  const description = response?.data?.description;
  const url = response?.config?.url;
  const httpStatus = response
    ? parseInt(description?.split('httpStatus=')[1] || response.status)
    : Number.MIN_SAFE_INTEGER;
  let errorMsg = '';
  if (response) {
    errorMsg = `Fetching data failed with url: ${url} status: ${httpStatus} desc: ${description}`;
  } else {
    errorMsg = `Fetching data failed with message: ${message}`;
  }
  //dispatch(addMessage({ message: errorMsg, severity: TOAST_ALERT_SEVERITY.ERROR }));
  return Promise.reject({ ...error, response: { ...response, httpStatus } });
};
