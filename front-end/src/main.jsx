import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* Componentes */
import { Header } from './componetns/Header';
import { Main } from './componetns/Main';
import {Platillos} from './componetns/Platillos';
import { Registrarse } from './componetns/Registrarse';
import {InicioSesion} from './componetns/InicioSesion'
import { VistaPlatillo } from './componetns/platillos/VistaPlatillo';
import { Pedidos } from './componetns/proveedor/pedidos';
import { Repartir } from './componetns/repartidores/Repartir';
import { NuevoPlatillo } from './componetns/platillos/NuevoPlatillo';
import { SocialPage } from './componetns/info/SocialPage';
import { InfoPage } from './componetns/info/InfoPage';
import { VistaPlatilloNuevoPedido } from './componetns/pedidos/VistaNuevoPedido';
import { MisPlatillos } from './componetns/platillos/MisPlatillos';
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
    path:'/platillo/vista/:id',
    element:<VistaPlatillo/>
  },
  {
    path:"/lista/platillos",
    element:<MisPlatillos/>
  },
  {
    path:'nuevo/platillo',
    element: <NuevoPlatillo/> 
  },
  //Rutas de pedidos
  {
    //
    path:'/comprador/pedidos/',
    element: <Pedidos/>
  },
  {
    path:'/pedido/nuevo/:id',
    element:<VistaPlatilloNuevoPedido/>
  },{
    path:'/repartir/',
    element:<Repartir/>  
  },
  //Paginas de información
  {
    path:'/aprendermas',
    element:<SocialPage/>
  },
  {
    path:'/info',
    element:<><Header/><InfoPage/></>
  },
  {
    path:'/nosotros',
    element:<><Header/>nosotros</> 
  } 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
