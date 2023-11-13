/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const get = (value: any, path: string, defaultValue?: any) => {
  const val = path.split('.').reduce((acc, v) => {
    try {
      // eslint-disable-next-line no-param-reassign
      acc = acc[v];
    } catch (e) {
      return defaultValue;
    }
    return acc;
  }, value);

  if (typeof val === 'undefined') {
    return defaultValue;
  }

  return val;
};

export default get;
