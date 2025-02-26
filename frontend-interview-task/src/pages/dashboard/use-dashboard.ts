import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import { useQueryParams } from "../../hooks/use-query-params";
import { fetchTests, TestType } from "../../api/tests.api";

export const useDashboard = () => {
 const { addQueryParams, getQueryParams } = useQueryParams();
 const [tests, setTests] = useState<TestType[]>();
 const params = getQueryParams();
 const search = params.search || "";

 useEffect(() => {
  fetchTests()
   .then(setTests)
   .catch(() => alert("Error fetching tests"));
 }, []);

 const handleChangeSearch = (value?: string) => {
  addQueryParams({ search: value });
 };

 const [debouncedSearch, setDebouncedSearch] = useState<string>();
 useDebounce(search, 500, setDebouncedSearch);

 const filteredTest = useMemo(() => {
  if (!tests) return [];

  if (!debouncedSearch) return tests;
  
  return tests.filter((test) =>
   test.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

 }, [debouncedSearch, tests]);

 return { search, handleChangeSearch, filteredTest };
};
