import { useState, useEffect } from "react";

export const useDebounce = (
 value: string,
 delay: number,
 cb: (data: string) => void
) => {
 const [debouncedValue, setDebouncedValue] = useState(value);

 useEffect(() => {
  const handler = setTimeout(() => {
   setDebouncedValue(value);
  }, delay);

  return () => {
   clearTimeout(handler);
  };
 }, [value, delay]);

 useEffect(() => {
  cb(debouncedValue);
 }, [debouncedValue]);
};
