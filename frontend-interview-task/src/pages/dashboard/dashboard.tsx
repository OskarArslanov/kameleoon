import { Button } from "../../components/button/button";
import { Page } from "../../features/page/page";
import { SearchInput } from "../../features/search-input/search-input";
import { DashboardTable } from "./dashboard-table/dashboard-table";
import s from "./dashboard.module.css";
import { useDashboard } from "./use-dashboard";

export const Dashboard = () => {
 const { handleChangeSearch, search, filteredTest } = useDashboard();

 const isTestsExist = !!filteredTest?.length;

 return (
  <Page className={s.page}>
   <h1 className={s.h1}>Dashboard</h1>
   <SearchInput
    indicator={`${filteredTest.length} tests`}
    placeholder="What test are you looking for?"
    value={search}
    onChange={handleChangeSearch}
   />
   {isTestsExist ? (
    <DashboardTable tests={filteredTest} />
   ) : (
    <div className={s.empty}>
     <span>Your search did not match any results.</span>
     <Button variant="success" onClick={() => handleChangeSearch()}>
      Reset
     </Button>
    </div>
   )}
  </Page>
 );
};
