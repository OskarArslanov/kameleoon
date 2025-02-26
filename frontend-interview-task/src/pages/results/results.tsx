import s from "./results.module.css";
import { useResults } from "./useResults";

export const Results = () => {
 useResults();

 return (
  <div className={s.page}>
   <h1>Results</h1>
  </div>
 );
};
