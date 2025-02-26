import { FC } from "react";
import s from "./dashboard-table-col.module.css";
import cn from "classnames";
import { ArrowIcon } from "../../../../assets/icons/arrow-icon";
import { useQueryParams } from "../../../../hooks/use-query-params";
import { SortType } from "../../../../types/request";

type PossibleSortType = SortType | string;
const dirChangeMap: Record<PossibleSortType, PossibleSortType> = {
 "": "asc",
 asc: "desc",
 desc: "",
};

interface Props {
 label: string;
}

export const DashboardTableCol: FC<Props> = ({ label }) => {
 const { addQueryParams, getQueryParams } = useQueryParams();

 const params = getQueryParams();
 const sort = params.sort || "";
 const direction = params.direction;

 const isCurrentActive = sort === label;

 const handleSort = () => {
  if (isCurrentActive) {
   const newDirection = dirChangeMap[direction];
   addQueryParams({
    sort: newDirection ? label : undefined,
    direction: newDirection,
   });
  } else {
   addQueryParams({ sort: label, direction: "asc" });
  }
 };

 return (
  <span className={s.feature}>
   {label}
   <button
    className={cn(s.sort, isCurrentActive && s.active, s[direction])}
    onClick={handleSort}
   >
    <ArrowIcon />
   </button>
  </span>
 );
};
