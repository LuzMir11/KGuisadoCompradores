import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function a() {
  return <h1>Funcion conectada</h1>;
}

root.render(a());
