import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { App } from "./app";
import { ThemeProvider } from "./shared/ui/theme/ThemeProvider";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <ThemeProvider>
      <Notifications position="top-right" />
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </ThemeProvider>
  </BrowserRouter>
);
