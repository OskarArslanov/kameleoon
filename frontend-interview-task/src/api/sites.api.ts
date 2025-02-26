import { SortRequest } from "../types/request";
import { baseFetch, buildParams } from "./utils/baseFetch";

export type SiteType = {
 id: number;
 url: string;
};

export const fetchSites = async (request: SortRequest): Promise<SiteType[]> => {
 return baseFetch("/sites" + buildParams(request));
};

export const fetchSiteById = async (id: string): Promise<SiteType> => {
 return baseFetch(`/sites/${id}`);
};
