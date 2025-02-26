import { useEffect, useState } from "react";
import { fetchSites, SiteType } from "../../../api/sites.api";

const colors = ["#ff8346", "#E14165", "#C2C2FF", "#8686FF"];

const removeProtocolAndWWW = (url?: string) => {
 if (!url) return "";
 return url.replace(/^(https?:\/\/)?(www\.)?/, "");
};

export const useDashboardTable = () => {
 const [sites, setSites] = useState<SiteType[]>([]);

 useEffect(() => {
  fetchSites()
   .then(setSites)
   .catch(() => window.alert("Failed to fetch sites"));
 }, []);

 return { sites, removeProtocolAndWWW, colors };
};
