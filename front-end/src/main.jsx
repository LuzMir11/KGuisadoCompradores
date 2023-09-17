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
import { Pedidos } from './componetns/proveedor/pedidos';
import { Repartir } from './componetns/repartidores/Repartir';
import { SocialPage } from './componetns/SocialPage';
const router = createBrowserRouter([
  //rutas de ususario
  {
    path: "/",
    element: <Main/>
  },
  {
    path:"/signin",
    element: <Registrarse/>
  },
  {
    path:'/login',
    element:<InicioSesion/>
  },
  //Rutas de Platillos
 {
    path:"/platillos",
    element: <Platillos/>
  },
  {
    path:'/platillo/:id',
    element:<VistaPlatillo/>
  },
  //Rutas de pedidos
  {
    path:'/pedidos/',
    element: <Pedidos/>
  },
  {
    path:'/pedido/:id',
    element:<></>
  },{
    path:'/repartir/',
    element:<Repartir/>  
  },
  //Paginas de información
  {
    path:'/Aprendermas',
    element:<SocialPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
