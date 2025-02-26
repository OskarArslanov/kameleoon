import { Page } from "../../features/page/page";
import s from "./finalize.module.css";

export const Finalize = () => {
 
 return (
  <Page className={s.page} withBackButton>
   <h1>Finalize</h1>
   <span>Spring promotion</span>
  </Page>
 );
};
