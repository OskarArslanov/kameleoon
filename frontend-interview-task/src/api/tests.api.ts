import { SortRequest } from "../types/request";
import { baseFetch, buildParams } from "./utils/baseFetch";

enum TypeEnum {
 CLASSIC = "CLASSIC",
 SERVER_SIDE = "SERVER_SIDE",
 MVT = "MVT",
}

enum StatusEnum {
 DRAFT = "DRAFT",
 ONLINE = "ONLINE",
 PAUSED = "PAUSED",
 STOPPED = "STOPPED",
}

export type TestType = {
 id: number;
 name: string;
 type: TypeEnum;
 status: StatusEnum;
 siteId: number;
};

export type FetchTestsRequest = {
 search?: string;
} & SortRequest;

export const fetchTests = async (request?: FetchTestsRequest): Promise<TestType[]> => {
 return baseFetch("/tests" + buildParams(request));
};

export const fetchTestById = async (id: string): Promise<TestType> => {
 return baseFetch(`/tests/${id}`);
};
