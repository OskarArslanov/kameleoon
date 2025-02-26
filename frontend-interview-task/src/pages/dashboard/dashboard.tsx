import s from "./dashboard.module.css";
import { useDashboard } from "./useDashboard";

export const Dashboard = () => {
 useDashboard();

 return (
  <div className={s.page}>
   <h1>Dashboard</h1>
  </div>
 );
};
