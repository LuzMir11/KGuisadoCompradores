import React from 'react';
import axios from 'axios';
export function UsuariosRegistrados (){
    
  const baseURL = import.meta.env.VITE_ONLINE_SERVER +'/api/usuario'
  const [usuarios, setUsuarios] = React.useState(null);
  React.useEffect( () => {
    //const token = localStorage.getItem('x-access-token')
     axios.get(baseURL).then( (response) => {
     setUsuarios(response.data.length);
     console.log(response.data)

    });
  }, []);

  console.log(import.meta.env.VITE_U)
   return <>
      
      <p> Usuarios registrados {usuarios}</p>
      
   </>
}