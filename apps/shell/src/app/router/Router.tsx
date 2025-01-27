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
import { navigateAttached, locationAttached } from "@shared/state/router";

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
              <Route path="*" element={<div>404</div>} />
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

  const [attachNavigate, attachLocation] = useUnit([
    navigateAttached,
    locationAttached,
  ]);
  useEffect(() => {
    attachNavigate(navigate);
  }, [navigate]);

  useEffect(() => {
    attachLocation(location);
  }, [location]);

  return <Outlet />;
};
