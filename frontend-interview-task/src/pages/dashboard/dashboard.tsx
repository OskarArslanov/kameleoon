import { Page } from "../../features/page/page";
import { SearchInput } from "../../features/searchInput/searchInput";
import s from "./dashboard.module.css";
import { useDashboard } from "./useDashboard";

export const Dashboard = () => {
 const { handleChangeSearch, search, tests } = useDashboard();

 return (
  <Page className={s.page}>
   <h1>Dashboard</h1>
   <SearchInput
    indicator="7 tests"
    placeholder="What test are you looking for?"
    value={search}
    onChange={handleChangeSearch}
   />
  </Page>
 );
};
