import { Page } from "../../features/page/page";
import s from "./results.module.css";

export const Results = () => {
 
 return (
  <Page className={s.page} withBackButton>
   <h1>Results</h1>
   <span>Order basket redesing</span>
  </Page>
 );
};
