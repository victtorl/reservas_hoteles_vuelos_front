import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { editarHotelService, guardarHotelService } from '../services/services';
import { store } from '../redux/store';

const ModalHotel = () => {
   //HOTEL------------------------------------------------------------>

const hotelPayload = useSelector((state) => state.hotelPayload)
const [esquema,Setesquema]=useState('value1')  
const comboCategoria=[{id:1,nombre:"1"},{id:2,nombre:"2"},{id:3,nombre:"3"}]



const [formHotel,setformHotel]=useState({
  categoria:'',
  disponible:'',
  nombre:'',
  precio:''
})

const handleChange =(event) => {
    console.log(event.target.value);
    setformHotel({ ...formHotel, [event.target.name]: event.target.value });
}


const handleChangeCategoria=(event) => {
  console.log(event.target.value);
  store.dispatch({
    type:'@getHotelPayload',
    payload:{
      idHotel:hotelPayload.idHotel,
      categoria:event.target.value,
      disponible:hotelPayload.disponible,
      nombre:hotelPayload.nombre,
      precio:hotelPayload.precio
    }
  })
}
const handleChangeDisponible=(event) => {
  console.log(event.target.value);
  store.dispatch({
    type:'@getHotelPayload',
    payload:{
        idHotel:hotelPayload.idHotel,
        categoria:hotelPayload.categoria,
        disponible:event.target.value,
        nombre:hotelPayload.nombre,
        precio:hotelPayload.precio
    }
  })
}
const handleChangeNombre=(event) => {
  console.log(event.target.value);
  store.dispatch({
    type:'@getHotelPayload',
    payload:{
        idHotel:hotelPayload.idHotel,
        categoria:hotelPayload.categoria,
        disponible:hotelPayload.disponible,
        nombre:event.target.value,
        precio:hotelPayload.precio
    }
  })
}
const handleChangePrecio=(event) => {
  console.log(event.target.value);
  store.dispatch({
    type:'@getHotelPayload',
    payload:{
        idHotel:hotelPayload.idHotel,
        categoria:hotelPayload.categoria,
        disponible:hotelPayload.disponible,
        nombre:hotelPayload.nombre,
        precio:event.target.value
    }
  })
}



const Setoption=(e) => {
  console.log(e.target.value);
  Setesquema(e.target.value)
}

function limpiarCampos(){
  setformHotel({
  categoria:'',
  disponible:'',
  nombre:'',
  precio:''
  })
}

const guardarHotel=() => {

  toast((t) => (
    <span>
      
      <h6>Categoria: <b>{formHotel.categoria}</b></h6>    <br/>
      <h6>Disponible: <b>{formHotel.disponible}</b></h6>        <br/>
      <h6>Nombre: <b>{formHotel.nombre}</b></h6>    <br/>
      <h6>Precio: <b>{formHotel.precio}</b></h6> <br/>
      
      <button className='btn btn-primary' onClick={(e) => {
        e.preventDefault()
        toast.dismiss(t.id)
        limpiarCampos()
        toast.success('Guardado con exito!')
        guardarHotelService(formHotel.categoria,formHotel.disponible,formHotel.nombre,formHotel.precio)
      }}>
        ¿Guardar Datos?
      </button>
    </span>
  ));
}

const editarHotel=() => {

  toast((t) => (
    <span>
      <h6>Id: <b>{ hotelPayload.idHotel}</b></h6>    <br/>
      <h6>Categoria: <b>{ hotelPayload.categoria}</b></h6>    <br/>
      <h6>Disponible: <b>{ hotelPayload.disponible}</b></h6>        <br/>
      <h6>Nombre: <b>{ hotelPayload.nombre}</b></h6>      <br/>
      <h6>Precio: <b>{ hotelPayload.precio}</b></h6> <br/>
      
      <button className='btn btn-primary' onClick={(e) => {
        e.preventDefault()
        toast.dismiss(t.id)
        toast.success('Editado con exito!')
        editarHotelService(hotelPayload.idHotel, hotelPayload.categoria,hotelPayload.disponible,hotelPayload.nombre,hotelPayload.precio)
      }}>
        ¿Editar Datos?
      </button>
    </span>
  ));

  
}


function esquemaedicion(){

  return(
   <form className="formDetalle">
      <label>Categoria</label>
      
      <>
     <select name='categoria'   onChange={handleChangeCategoria}>
                                <option selected>Elija Una Categoria</option>
                            {comboCategoria.map(u => (
                                <option key={u.id} value={u.id} >{u.nombre}</option>
                            ))
                            }
      </select> 
     </> 

      <label>Disponible</label>
      <input type="number" name='disponible' value={hotelPayload.disponible} step="1" min="0" placeholder={ hotelPayload.disponible}  onChange={handleChangeDisponible} />
      <label>Nombre</label>
      <input type="text" name='nombre' value={hotelPayload.nombre} placeholder={ hotelPayload.nombre} onChange={handleChangeNombre}/>
      <label>Precio</label>
      <input type="number" name='precio' value={hotelPayload.precio} step="1" min="0" placeholder={ hotelPayload.precio}  onChange={handleChangePrecio} />
      <div className='btnEditar'>
           <Toaster />               
           <button type="button" className="btn btn-warning" onClick={editarHotel}>Editar</button>
      </div> 
  </form>

  )
}


function esquemacreacion(){

  return(
   <form className="formDetalle">
      <label>Categoria</label>

     <>
     <select name='categoria'   onChange={handleChange}>
                                <option selected>Elija Una Categoria</option>
                            {comboCategoria.map(u => (
                                <option key={u.id} value={u.id} >{u.nombre}</option>
                            ))
                            }
      </select> 
     </> 
      
      <label>Disponible</label>
      <input type="number"  step="1" min="0" name='disponible' value={formHotel.disponible} onChange={handleChange}  required />
      <label>Nombre</label>
      <input type="text" name='nombre' value={formHotel.nombre} onChange={handleChange}  required/>
      <label>Precio</label>
      <input type="number"   step="1" min="0" name='precio' value={formHotel.precio} onChange={handleChange}  required />
      <div className='btnEditar'>
           <Toaster />
           <button type="button" className="btn btn-success" onClick={guardarHotel} >Crear</button>
      </div> 
  </form>

  )
}

const optRender = () => {
  switch (esquema) {
      case 'value1':
        return <h2>Bienvenidos reservas FISI</h2>
      case 'value2':
        return esquemaedicion()
      case 'value3':
        return esquemacreacion()  
  }
}



    return (
     <div>

  <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">Detalle hotel</h5>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Categoria
            <span className="badge bg-primary rounded-pill">{hotelPayload.categoria}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Disponible
            <span className="badge bg-primary rounded-pill">{hotelPayload.disponible}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Nombre
            <span className="badge bg-primary rounded-pill">{hotelPayload.nombre}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Precio
            <span className="badge bg-primary rounded-pill">{hotelPayload.precio}</span>
          </li>
        </ul>
      </div>
      <div className="modalEdicionEliminacion">
        <div className='btnModals'>
          <label>Crear un nuevo hotel o editar el actual</label>
        </div>
        <select className="form-select" id="exampleSelect1" onChange={Setoption}>
          <option value="value1">--Seleccione--</option>
          <option value="value2">Editar Vuelo</option>
          <option value="value3">Crear Vuelo</option>
        </select>
        {optRender()}
      </div>
    </div>
  </div>
</div>


    );
}

export default ModalHotel;
