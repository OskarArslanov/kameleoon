import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
 const [searchParams, setSearchParams] = useSearchParams();

 const getQueryParams = useCallback(() => {
  const result: Record<string, string> = {};
  searchParams.forEach((value, key) => {
   result[key] = value;
  });
  return result;
 }, [searchParams]);

 const setQueryParams = useCallback(
  (params: Record<string, string>) => {
   const newSearchParams = new URLSearchParams();
   for (const key in params) {
    newSearchParams.set(key, params[key]);
   }
   setSearchParams(newSearchParams, { replace: true });
  },
  [setSearchParams]
 );

 const addQueryParams = (params: Record<string, string | undefined>) => {
  const oldParams = getQueryParams();

  Object.keys(params).forEach((key) => {
   const value = params[key];
   if (value) {
    oldParams[key] = value;
   } else {
    delete oldParams[key];
   }
  });
  setQueryParams(oldParams);
 };

 return { getQueryParams, addQueryParams };
};
