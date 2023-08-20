import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* Componentes */
import { Main } from './componetns/Main';
import {Platillos} from './componetns/Platillos';
import { Registrarse } from './componetns/Registrarse';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  },
  {
    path:"/platillos",
    element: <Platillos/>
  },
  {
    path:"/signin",
    element: <Registrarse/>
  },
  {
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
