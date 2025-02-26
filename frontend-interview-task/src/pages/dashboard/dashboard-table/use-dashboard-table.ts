import { useEffect, useMemo, useState } from "react";
import { fetchSites, SiteType } from "../../../api/sites.api";
import { TestType } from "../../../api/tests.api";
import { useQueryParams } from "../../../hooks/use-query-params";

const colors = ["#ff8346", "#E14165", "#C2C2FF", "#8686FF"];

const removeProtocolAndWWW = (url?: string) => {
 if (!url) return "";
 return url.replace(/^(https?:\/\/)?(www\.)?/, "");
};

const cols = ["NAME", "TYPE", "STATUS", "SITE"];
const statusSort = ["ONLINE", "PAUSED", "STOPPED", "DRAFT"];

export const useDashboardTable = (tests: TestType[]) => {
 const [sites, setSites] = useState<SiteType[]>([]);
 const params = useQueryParams().getQueryParams();

 const sort = params.sort;
 const direction = params.direction;

 useEffect(() => {
  fetchSites()
   .then(setSites)
   .catch(() => window.alert("Failed to fetch sites"));
 }, []);

 const sortedTests = useMemo(() => {
  const withSite = tests.map((test) => ({
   ...test,
   siteUrl: sites.find((site) => site.id === test.siteId)?.url || "",
  }));

  if (!sort) return withSite;

  const isDesc = direction === "desc";

  if (sort === "NAME") {
   const sorted = withSite.sort((a, b) => {
    return isDesc ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
   });

   return sorted;
  }

  if (sort === "TYPE") {
   const sorted = withSite.sort((a, b) => {
    return isDesc ? b.type.localeCompare(a.type) : a.type.localeCompare(b.type);
   });

   return sorted;
  }

  if (sort === "SITE") {
   const sorted = withSite.sort((a, b) => {
    return isDesc
     ? a.siteUrl.localeCompare(b.siteUrl)
     : b.siteUrl.localeCompare(a.siteUrl);
   });

   return sorted;
  }

  if (sort === "STATUS") {
   const sorted = withSite.sort((a, b) => {
    return isDesc
     ? statusSort.indexOf(b.status) - statusSort.indexOf(a.status)
     : statusSort.indexOf(a.status) - statusSort.indexOf(b.status);
   });

   return sorted;
  }
  return withSite;
 }, [direction, sites, sort, tests]);

 return {
  sortedTests,
  removeProtocolAndWWW,
  colors,
  cols,
 };
};
