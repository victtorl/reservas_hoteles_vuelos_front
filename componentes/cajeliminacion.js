import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getHoteles, getReservas, getVuelos } from '../services/services';
import { store } from '../redux/store';

const Cajeliminacion = () => {
    useEffect(() => {
        getHoteles()
        getVuelos()
        getReservas()
     }, []);
 
     const registroPayload = useSelector((state) => state.registroPayload)
     const comboHotel = useSelector((state) => state.hoteles)
     const comboVuelo = useSelector((state) => state.vuelos)
     const comboReservas=useSelector((state)=>state.reservas)

     const [formRegistro,setformRegistro]=useState({
        hotel:'',
        vuelo:'',
        nombre:'',
        dni:''
      })
      
      const handleSelectReserva=async (event)=>{
    
        //filtrar datos por id
        let  elem=comboReservas.filter((u)=>u.id === parseInt(event.target.value))
        console.log(elem);
        store.dispatch({
          type:'@getRegistroPayload',
          payload:{
            id:{id:elem[0].id},
            hotel:{hotel:elem[0].hotel},
            vuelo:{vuelo:elem[0].vuelo},
            nombre:{nombre:elem[0].nombre},
            dni:{dni:elem[0].dni}
          }
        })
        
      }  

      const eliminarReserva=() => {
        toast((t) => (
            <span>
              <h6>IdReserva: <b>{registroPayload.id.id}</b></h6>    <br/>
              <h6>Hotel: <b>{registroPayload.hotel.hotel}</b></h6>    <br/>
              <h6>Vuelo: <b>{registroPayload.vuelo.vuelo}</b></h6>        <br/>
              <h6>Nombre: <b>{registroPayload.nombre.nombre}</b></h6>    <br/>
              <h6>DNI: <b>{registroPayload.dni.dni}</b></h6> <br/>
              
              <button className='btn btn-primary' onClick={(e) => {
                e.preventDefault()
                toast.dismiss(t.id)
                 limpiarCampos()
                toast.success('Editado con exito!')
                 editarRegistroService(registroPayload.id.id,registroPayload.hotel.hotel,registroPayload.vuelo.vuelo,registroPayload.nombre.nombre,registroPayload.dni.dni)
              }}>
                ¿Guardar Datos?
              </button>
            </span>
          ));
    }     

    return (
        <div className='col'>
        <div className='cajaregistro'>
            <label className='labelregistro'>Seleccione Reserva</label>
            <>
                                             <select name='hotel'  className='inputregistro' defaultValue={'DEFAULT'} onChange={handleSelectReserva} >
                                                                        <option value="DEFAULT" >--Elija Su Reserva--</option>
                                                                    {comboReservas.map((u,i) => (
                                                                        <option key={i} value={u.id}  >{u.nombre}-{u.dni}</option>
                                                                    ))
                                                                    }
                                            </select>
            </>
            <form>
            <>
            <label className='labeltitleregistro'>Hotel</label>
                <select name='hotel'  className='inputregistro' defaultValue={'DEFAULT'}  >
                                            <option value="DEFAULT" >{registroPayload.hotel.hotel}</option>
                </select> 
            </>

            <>
            <label className='labeltitleregistro' >Vuelo</label>
                <select name='vuelo'  className='inputregistro' defaultValue={'DEFAULT'}  >
                                            <option value='DEFAULT'  >{registroPayload.vuelo.vuelo}</option>
                                        
                </select> 
            </>  
        
            <label className='labeltitleregistro'>Nombre</label>
        <input type="text" name='nombre'value={registroPayload.nombre.nombre} placeholder={registroPayload.nombre.nombre} className='inputregistro' />
            <label className='labeltitleregistro'>DNI</label>                             
        <input type="text" name='dni' value={formRegistro.dni} placeholder={registroPayload.dni.dni} className='inputregistro' />
            </form>

            <div>
            <Toaster/>
                <button type="button" class="btn btn-danger" onClick={eliminarReserva}>ELIMINAR</button>
            </div>
        </div>
    </div>
    );
}

export default Cajeliminacion;
