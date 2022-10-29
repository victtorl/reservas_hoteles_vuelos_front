import {useEffect,React} from 'react';
import { useSelector } from 'react-redux';
import Layout from '../componentes/layout';
import ModalHotel from '../componentes/modalHotel';
import ModalVuelo from '../componentes/modalVuelo';
import { store } from '../redux/store';

// uso de webservices y redux
import { getHoteles } from '../services/services';

const Hoteles = () => {

const hoteles = useSelector((state) => state.hoteles) 


const Mostrar=(u) => {
  //usar estado de redux
  store.dispatch({
    type:'@getHotelPayload',
    payload:u
})

console.log(u);

}

useEffect(() => {
 getHoteles()
},[])



    return (
        <div className="hotelescontainer">
        <Layout>
            <div className='container text-center viajes'>
            <div className="row hotelescontainertable ">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Categoria</th>
                    <th scope="col">Disponibilidad</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Detalle hotel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hoteles.map((u,id) => 
                            <tr key={id} onClick={()=>Mostrar(u)}>
                            <th scope="row">{u.categoria}</th>
                            <td>{u.disponible}</td>
                            <td>{u.nombre}</td>
                            <td>{u.precio}</td>
                            <td>
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                DetalLe Hotel
                            </button>   
                             </td>
                            </tr>
                        )
                    }
                    
                </tbody>
                <ModalHotel/>
                </table>
                
                
            </div>
            </div>
        </Layout>
      </div>
    );
}

export default Hoteles;