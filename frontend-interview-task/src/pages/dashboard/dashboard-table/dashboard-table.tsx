import { StatusEnum, TestType } from "../../../api/tests.api";
import { ArrowIcon } from "../../../assets/icons/arrow-icon";
import { Button } from "../../../components/button/button";
import s from "./dashboard-table.module.css";
import cn from "classnames";
import { useDashboardTable } from "./use-dashboard-table";
import { Link } from "react-router-dom";
import { concatPath } from "../../../helpers/path";
import { RouteEnum } from "../../../routes/routes";

interface Props {
 tests: TestType[];
}

export const DashboardTable = ({ tests }: Props) => {
 const { sites, removeProtocolAndWWW, colors } = useDashboardTable();

 return (
  <div className={s.feature}>
   <div className={s.header}>
    <span className={s.col}>NAME</span>
    <span className={s.col}>
     TYPE
     <button className={s.sort}>
      <ArrowIcon />
     </button>
    </span>
    <span className={s.col}>STATUS</span>
    <span className={s.col}>SITE</span>
   </div>
   <ul className={s.list}>
    {tests?.map((test) => {
     const status = test.status.toLowerCase();
     const actionLabel =
      test.status === StatusEnum.DRAFT ? "Finalize" : "Results";
     const site = sites.find((site) => site.id === test.siteId);

     return (
      <li key={test.id} className={s.item}>
       <div
        className={s.border}
        style={{ backgroundColor: colors[test.siteId] }}
       />
       <span className={s.name}>{test.name}</span>
       <span>{test.type}</span>
       <span className={cn(s.status, s[status])}>{status}</span>
       <span>{removeProtocolAndWWW(site?.url)}</span>
       <Link
        to={concatPath([
         actionLabel === "Finalize" ? RouteEnum.Finalize : RouteEnum.Results,
         String(test.id),
        ])}
       >
        <Button variant={actionLabel === "Finalize" ? "secondary" : "success"}>
         {actionLabel}
        </Button>
       </Link>
      </li>
     );
    })}
   </ul>
  </div>
 );
};
