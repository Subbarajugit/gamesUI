// this is to replace strings with the value, used in url constants
export const Strings = {
  substitute: (str = '', values: string[]): string => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return str.replace(/{{(\d+)}}/g, (match: string, index: number): any => {
      if (match) {
        return values[index];
      }
    });
  },
};
