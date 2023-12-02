export const convertQueryParams = <TParams extends Object>(
  query?: TParams
): string => {
  if (!query) return '';
  return Object.entries(query).reduce((acc, [key, val]) => {
    const queryStr = `?${key}=${val}`;
    return acc + queryStr;
  }, '');
};
