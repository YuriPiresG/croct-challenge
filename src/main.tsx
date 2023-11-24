import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { CroctProvider } from "@croct/plug-react";
import "./index.css";

console.log(import.meta.env.VITE_CLIENT_ID);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CroctProvider appId={import.meta.env.VITE_CLIENT_ID}>
      <App />
    </CroctProvider>
  </React.StrictMode>
);
