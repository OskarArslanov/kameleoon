import s from "./finalize.module.css";
import { useFinalize } from "./useFinalize";

export const Finalize = () => {
 useFinalize();

 return (
  <div className={s.page}>
   <h1>Finalize</h1>
  </div>
 );
};
