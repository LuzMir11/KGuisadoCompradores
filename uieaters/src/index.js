import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/header/Header";
import { Recept } from "./components/reception/Recept";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <>
    <Header />
    <Recept />
  </>

);
