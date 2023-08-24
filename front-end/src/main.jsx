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
import {InicioSesion} from './componetns/InicioSesion'
import { VistaPlatillo } from './componetns/platillos/VistaPlatillo';
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
    path:'/login',
    element:<InicioSesion/>
  },
  {
    path:'/platillo/:id',
    element:<VistaPlatillo/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
