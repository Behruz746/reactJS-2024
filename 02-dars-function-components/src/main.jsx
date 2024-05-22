import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode agarda codelarda eski code ishlatilsa warning beradi
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
