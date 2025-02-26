const baseUrl = "http://localhost:3100";

export const buildParams = (params?: Record<string, string>) => {
 if (!params || Object.keys(params).length === 0) return "";

 return (
  "?" +
  Object.entries(params)
   .filter(([, value]) => value)
   .map(([key, value]) => `${key}=${value}`)
   .join("&")
 );
};

export const baseFetch = async (url: string, options: RequestInit = {}) => {
 const response = await fetch(baseUrl + url, options);
 if (!response.ok) {
  throw new Error(response.statusText);
 }
 return response.json();
};
