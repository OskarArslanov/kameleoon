export type SortType = "asc" | "desc";

export type SortRequest = Partial<{
 sort: string;
 order: SortType;
}>;
