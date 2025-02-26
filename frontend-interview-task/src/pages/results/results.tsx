import { Page } from "../../features/page/page";
import s from "./results.module.css";
import { useResults } from "./useResults";

export const Results = () => {
 useResults();

 return (
  <Page className={s.page}>
   <h1>Results</h1>
  </Page>
 );
};
