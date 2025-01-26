import {useEffect} from "react";

import {useUnit} from "effector-react";

import {appInitialized} from "@/shared/state/app";

import {$config} from "@/shared/state/config";

import {Router} from "./router";

export const App = () => {
  const [initializeApp, config] = useUnit([appInitialized, $config]);

  useEffect(() => {
    initializeApp();
  }, []);

  return (
      <>
        {config && <Router />}
      </>
  )
};