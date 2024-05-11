import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode agarda codelarda eski code ishlatilsa warning beradi
  <StrictMode>
    <App />
  </StrictMode>
);
