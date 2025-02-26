import { Page } from "../../features/page/page";
import s from "./finalize.module.css";
import { useFinalize } from "./useFinalize";

export const Finalize = () => {
 useFinalize();

 return (
  <Page className={s.page}>
   <h1>Finalize</h1>
  </Page>
 );
};
