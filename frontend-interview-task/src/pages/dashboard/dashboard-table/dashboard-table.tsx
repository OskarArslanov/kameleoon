import { StatusEnum, TestType } from "../../../api/tests.api";
import { Button } from "../../../components/button/button";
import s from "./dashboard-table.module.css";
import cn from "classnames";
import { useDashboardTable } from "./use-dashboard-table";
import { Link } from "react-router-dom";
import { concatPath } from "../../../helpers/path";
import { RouteEnum } from "../../../routes/routes";
import { DashboardTableCol } from "./dashboard-table-col/dashboard-table-col";

interface Props {
 tests: TestType[];
}

export const DashboardTable = ({ tests }: Props) => {
 const { sortedTests, removeProtocolAndWWW, colors, cols } =
  useDashboardTable(tests);

 return (
  <div className={s.feature}>
   <ul className={s.header}>
    {cols.map((col) => (
     <DashboardTableCol key={col} label={col} />
    ))}
   </ul>
   <ul className={s.list}>
    {sortedTests.map((test) => {
     const status = test.status.toLowerCase();
     const actionLabel =
      test.status === StatusEnum.DRAFT ? "Finalize" : "Results";

     return (
      <li key={test.id} className={s.item}>
       <div
        className={s.border}
        style={{ backgroundColor: colors[test.siteId] }}
       />
       <span className={s.name}>{test.name}</span>
       <span>{test.type}</span>
       <span className={cn(s.status, s[status])}>{status}</span>
       <span>{removeProtocolAndWWW(test.siteUrl)}</span>
       <Link
        to={concatPath([
         actionLabel === "Finalize" ? RouteEnum.Finalize : RouteEnum.Results,
         String(test.id),
        ])}
       >
        <Button
         variant={actionLabel === "Finalize" ? "secondary" : "success"}
         fullWidth
        >
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
