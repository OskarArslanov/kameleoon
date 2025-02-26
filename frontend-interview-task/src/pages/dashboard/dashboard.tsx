import { Page } from "../../features/page/page";
import s from "./dashboard.module.css";
import { useDashboard } from "./useDashboard";

export const Dashboard = () => {
 useDashboard();

 return (
  <Page className={s.page}>
   <h1>Dashboard</h1>
  </Page>
 );
};
