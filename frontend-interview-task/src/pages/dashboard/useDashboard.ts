import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useQueryParams } from "../../hooks/useQueryParams";
import { fetchTests, FetchTestsRequest, TestType } from "../../api/tests.api";

export const useDashboard = () => {
 const { addQueryParams, getQueryParams } = useQueryParams();
 const [tests, setTests] = useState<TestType[]>();
 const params = getQueryParams();

 const handleFetchTests = async (request?: FetchTestsRequest) => {
  try {
   const data = await fetchTests(request);
   setTests(data);
  } catch {
   alert("Error fetching tests");
  }
 };

 const search = params.search || "";

 useDebounce(search, 500, (search) => handleFetchTests({ search }));

 const handleChangeSearch = (value?: string) => {
  addQueryParams({ search: value });
 };

 return { search, handleChangeSearch, tests };
};
