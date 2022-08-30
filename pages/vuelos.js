import {useEffect,React,useState} from 'react';
import { store } from '../redux/store';
import { useSelector } from 'react-redux';
import Layout from '../componentes/layout';
import ModalVuelo from '../componentes/modalVuelo';
import { getVuelos } from '../services/services';

const Vuelos = () => {

const vuelos = useSelector((state) => state.vuelos) 


const Mostrar=(u) => {
  //usar estado de redux
  store.dispatch({
    type:'@getVueloPayload',
    payload:u
})

console.log(u);

}

useEffect(() => {
getVuelos()
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
                    <th scope="col">Categoria</th>
                    <th scope="col">Disponibilidad</th>
                    <th scope="col">Origen</th>
                    <th scope="col">Destino</th>
                    <th scope="col">Precio</th>
                    <th scope="col">DetalLe Vuelo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        vuelos.map((u,id) => 
                            <tr key={id} onClick={()=>Mostrar(u)}>
                            <th scope="row">{u.categoria}</th>
                            <td>{u.disponible}</td>
                            <td>{u.origen}</td>
                            <td>{u.destino}</td>
                            <td>{u.precio}</td>
                            <td>
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                Detalle vuelo
                            </button>   
                             </td>
                            
                            </tr>
                        )
                    }
                </tbody>
                <ModalVuelo/>
                </table>
                </div>
                
            </div>
            </div>
            </Layout>
        </div>
    );
}

export default Vuelos;
