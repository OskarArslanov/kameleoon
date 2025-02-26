export enum SortEnum {
 ASC = "asc",
 DESC = "desc",
}

export type SortRequest = Partial<{
 sort: string;
 order: SortEnum;
}>;
