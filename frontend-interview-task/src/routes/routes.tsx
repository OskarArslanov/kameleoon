import { createBrowserRouter, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Results } from "../pages/results/results";
import { Finalize } from "../pages/finalize/finalize";
import { concatPath } from "../helpers/path";

export enum RouteEnum {
 Dashboard = "dashboard",
 Results = "results",
 Finalize = "finalize",
}

export const routes = createBrowserRouter([
 {
  path: RouteEnum.Dashboard,
  element: <Dashboard />,
 },
 {
  path: RouteEnum.Results,
  children: [
   {
    path: ":id",
    element: <Results />,
   },
  ],
 },
 {
  path: RouteEnum.Finalize,
  children: [
   {
    path: ":id",
    element: <Finalize />,
   },
  ],
 },
 {
  path: "*",
  element: <Navigate to={concatPath([RouteEnum.Dashboard])} replace />,
 },
]);
