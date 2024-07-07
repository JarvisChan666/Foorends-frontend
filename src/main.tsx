import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import ClerkProviderwithNavigate from "./auth/ClerkProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ClerkProviderwithNavigate>
        <AppRoutes />
      </ClerkProviderwithNavigate>
    </Router>
  </React.StrictMode>
);
