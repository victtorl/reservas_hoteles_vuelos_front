import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../componentes/layout';
import { getReservas } from '../services/services';

const Reservas = () => {

    const reservas = useSelector((state) => state.reservas)
    const Mostrar=(u) => {
        //usar estado de redux
        store.dispatch({
          type:'@getVueloPayload',
          payload:u
      })
      
      console.log(u);
      
      }
      
      useEffect(() => {
      getReservas()
      },[])
    return (
        <div>
            
        <Layout>
        <div className='container text-center vuelos'>
        <div className="row">
            <div className="col">
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Hotel</th>
                <th scope="col">Nombre Usuario</th>
                <th scope="col">DNI</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    reservas.map((u,id) => 
                        <tr key={id} onClick={()=>Mostrar(u)}>
                        <td>{u.id}</td>
                        <td>{u.hotel}</td>
                        <td>{u.nombre}</td>
                        <td>{u.dni}</td>
                        <td>
                        </td>
                        
                        </tr>
                    )
                }
            </tbody>
           
            </table>
            </div>
            
        </div>
        </div>
        </Layout>
    </div>
    );
}

export default Reservas;
