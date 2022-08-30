import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import Registro from '../pages/registro';
import { store } from '../redux/store';
import { getHoteles, getReservas, getVuelos, guardarRegistroService } from '../services/services';
import toast, { Toaster } from 'react-hot-toast';

const Cajaregistro = () => {
    

    useEffect(() => {
       getHoteles()
       getVuelos()
       getReservas()
    }, []);

    const comboHotel = useSelector((state) => state.hoteles)
    const comboVuelo = useSelector((state) => state.vuelos)


    const [formRegistro,setformRegistro]=useState({
        hotel:'',
        vuelo:'',
        nombre:'',
        dni:''
      })

      const handleChangeHotel=(event) => {
        console.log(event.target.value);
        store.dispatch({
          type:'@pushregistroHotel',
          payload:{
            hotel:event.target.value,
          }
        })
        setformRegistro({ ...formRegistro, [event.target.name]: event.target.value });
      }
      
      const handleChangeVuelo=(event) => {
        console.log(event.target.value);
        store.dispatch({
          type:'@pushregistroVuelo',
          payload:{
            vuelo:event.target.value,
          }
        })
        setformRegistro({ ...formRegistro, [event.target.name]: event.target.value });
      }  
      const handleChangeNombre=(event) => {
        console.log(event.target.value);
        store.dispatch({
          type:'@pushregistroNombre',
          payload:{
            nombre:event.target.value,
          }
        })
        setformRegistro({ ...formRegistro, [event.target.name]: event.target.value });
      } 
      const handleChangeDni=(event) => {
        console.log(event.target.value);
        store.dispatch({
          type:'@pushregistroDni',
          payload:{
            dni:event.target.value,
          }
        })
        setformRegistro({ ...formRegistro, [event.target.name]: event.target.value });
      }  

function limpiarCampos(){
  setformRegistro({
    hotel:'',
    vuelo:'',
    nombre:'',
    dni:''
  })
}

const registrarReserva=() => {
  
    toast((t) => (
        <span>
          
          <h6>Hotel: <b>{formRegistro.hotel}</b></h6>    <br/>
          <h6>Vuelo: <b>{formRegistro.vuelo}</b></h6>        <br/>
          <h6>Nombre: <b>{formRegistro.nombre}</b></h6>    <br/>
          <h6>DNI: <b>{formRegistro.dni}</b></h6> <br/>
          
          <button className='btn btn-primary' onClick={(e) => {
            e.preventDefault()
            toast.dismiss(t.id)
             limpiarCampos()
            toast.success('Guardado con exito!')
             guardarRegistroService(formRegistro.hotel,formRegistro.vuelo,formRegistro.nombre,formRegistro.dni)
             console.log(formRegistro.hotel,formRegistro.vuelo,formRegistro.nombre,formRegistro.dni);
          }}>
            ¿Guardar Datos?
          </button>
        </span>
      ));
}      

    return (
        <div className='col'>
        <div className='cajaregistro'>
            <label className='labelregistro'>Registrar reserva</label>
            <form>

                    <>
                    <label className='labeltitleregistro'>Hotel</label>
                        <select name='hotel'  className='inputregistro' defaultValue={'DEFAULT'} onChange={handleChangeHotel} >
                                                    <option value="DEFAULT" >--Elija Un Hotel--</option>
                                                {comboHotel.map((u,id) => (
                                                    <option key={id} value={u.id}  >{u.nombre}</option>
                                                ))
                                                }
                        </select> 
                    </>

                     <>
                     <label className='labeltitleregistro'>Vuelo</label>
                        <select name='vuelo'  className='inputregistro' defaultValue={'DEFAULT'} onChange={handleChangeVuelo} >
                                                    <option value='DEFAULT'  >--Elija Un Vuelo--</option>
                                                {comboVuelo.map((u,id) => (
                                                    <option key={id} value={u.id}  >{u.origen}-{u.destino}</option>
                                                ))
                                                }
                        </select> 
                    </>  
                
                    <label className='labeltitleregistro'>Nombre</label>
                <input type="text" name='nombre'value={formRegistro.nombre} placeholder='Nombre Completo'className='inputregistro' onChange={handleChangeNombre} />
                    <label className='labeltitleregistro'>DNI</label>                             
                <input type="text" name='dni' value={formRegistro.dni} placeholder='DNI' className='inputregistro' onChange={handleChangeDni}/>
            </form>
                <div>
                <Toaster />
                    <button type="button" className="btn btn-info" onClick={registrarReserva} >REGISTRAR</button>
                </div>
        </div>
    </div>
    );
}

export default Cajaregistro;
