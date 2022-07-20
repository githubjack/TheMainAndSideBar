import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@bedrock-layout/css-reset/lib/reset.css";
import { AppBoundary } from "@bedrock-layout/appboundary";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppBoundary>
      <App />
    </AppBoundary>
  </StrictMode>
);
