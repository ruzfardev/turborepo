import { useEffect } from "react";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useUnit } from "effector-react";

import { Home } from "@/pages/home";

import { $shellPages } from "@/shared/state/config";

import { Layout } from "../ui/layout";

export const Router = () => {
  const shellPages = useUnit($shellPages);

  return (
    <>
      {!!shellPages && (
        <Routes>
          <Route path="" element={<InitRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home.Page />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};

const InitRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   attachNavigate(navigate);
  // }, [navigate]);

  // useEffect(() => {
  //   attachLocation(location);
  // }, [location]);

  return <Outlet />;
};
