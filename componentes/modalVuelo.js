import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { editarVueloService, guardarVueloService } from '../services/services';
import { store } from '../redux/store';



const ModalVuelo = (props) => {


const vueloPayload = useSelector((state) => state.vueloPayload)
const [esquema,Setesquema]=useState('value1')  
const comboCategoria=[{id:1,nombre:"1"},{id:2,nombre:"2"},{id:3,nombre:"3"}]



const [formVuelo,setFormvuelo]=useState({
  categoria:'',
  cupos:'',
  destino:'',
  precio:''
})

const handleChange =(event) => {
    console.log(event.target.value);
    setFormvuelo({ ...formVuelo, [event.target.name]: event.target.value });
}


const handleChangeCategoria=(event) => {
  console.log(event.target.value);
  store.dispatch({
    type:'@getVueloPayload',
    payload:{
      idVuelo:vueloPayload.idVuelo,
      categoria:event.target.value,
      disponible:vueloPayload.disponible,
      origen:vueloPayload.origen,
      destino:vueloPayload.destino,
      precio:vueloPayload.precio
    }
  })
}
const handleChangeDisponible=(event) => {
  console.log(event.target.value);
  store.dispatch({
    type:'@getVueloPayload',
    payload:{
      idVuelo:vueloPayload.idVuelo,
      categoria:vueloPayload.categoria,
      disponible:event.target.value,
      origen:vueloPayload.origen,
      destino:vueloPayload.destino,
      precio:vueloPayload.precio
    }
  })
}
const handleChangeOrigen=(event) => {
  console.log(event.target.value);
  store.dispatch({
    type:'@getVueloPayload',
    payload:{
      idVuelo:vueloPayload.idVuelo,
      categoria:vueloPayload.categoria,
      disponible:vueloPayload.disponible,
      origen:event.target.value,
      destino:vueloPayload.destino,
      precio:vueloPayload.precio
    }
  })
}
const handleChangeDestino=(event) => {
  console.log(event.target.value);
  store.dispatch({
    type:'@getVueloPayload',
    payload:{
      idVuelo:vueloPayload.idVuelo,
      categoria:vueloPayload.categoria,
      disponible:vueloPayload.disponible,
      origen:vueloPayload.origen,
      destino:event.target.value,
      precio:vueloPayload.precio
    }
  })
}
const handleChangePrecio=(event) => {
  console.log(event.target.value);
  store.dispatch({
    type:'@getVueloPayload',
    payload:{
      idVuelo:vueloPayload.idVuelo,
      categoria:vueloPayload.categoria,
      disponible:vueloPayload.disponible,
      origen:vueloPayload.origen,
      destino:vueloPayload.destino,
      precio:event.target.value
    }
  })
}



const Setoption=(e) => {
  console.log(e.target.value);
  Setesquema(e.target.value)
}

function limpiarCampos(){
  setFormvuelo({
  categoria:'',
  cupos:'',
  origen:'',
  destino:'',
  precio:''
  })
}

const guardarVuelo=() => {

  toast((t) => (
    <span>
      
      <h6>Categoria: <b>{formVuelo.categoria}</b></h6>    <br/>
      <h6>Cupos: <b>{formVuelo.cupos}</b></h6>        <br/>
      <h6>Origen: <b>{formVuelo.origen}</b></h6>      <br/>
      <h6>Destino: <b>{formVuelo.destino}</b></h6>    <br/>
      <h6>Precio: <b>{formVuelo.precio}</b></h6> <br/>
      
      <button className='btn btn-primary' onClick={(e) => {
        e.preventDefault()
        toast.dismiss(t.id)
        limpiarCampos()
        toast.success('Guardado con exito!')
        guardarVueloService(formVuelo.categoria,formVuelo.cupos,formVuelo.origen,formVuelo.destino,formVuelo.precio)
      }}>
        ¿Guardar Datos?
      </button>
    </span>
  ));
}

const editarVuelo=() => {

  toast((t) => (
    <span>
      <h6>Id: <b>{ vueloPayload.idVuelo}</b></h6>    <br/>
      <h6>Categoria: <b>{ vueloPayload.categoria}</b></h6>    <br/>
      <h6>Cupos: <b>{ vueloPayload.disponible}</b></h6>        <br/>
      <h6>Origen: <b>{ vueloPayload.origen}</b></h6>      <br/>
      <h6>Destino: <b>{ vueloPayload.destino}</b></h6>    <br/>
      <h6>Precio: <b>{ vueloPayload.precio}</b></h6> <br/>
      
      <button className='btn btn-primary' onClick={(e) => {
        e.preventDefault()
        toast.dismiss(t.id)
        toast.success('Editado con exito!')
        editarVueloService(vueloPayload.idVuelo,vueloPayload.categoria,vueloPayload.disponible,vueloPayload.origen,vueloPayload.destino,vueloPayload.precio)
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

      <label>Cupos</label>
      <input type="number" name='disponible' value={vueloPayload.disponible} step="1" min="0" placeholder={ vueloPayload.disponible}  onChange={handleChangeDisponible} />
      <label>Origen</label>
      <input type="text" name='origen' value={vueloPayload.origen} placeholder={ vueloPayload.origen}  onChange={handleChangeOrigen}/>
      <label>Destino</label>
      <input type="text" name='destino' value={vueloPayload.destino} placeholder={ vueloPayload.destino} onChange={handleChangeDestino}/>
      <label>Precio</label>
      <input type="number" name='precio' value={vueloPayload.precio} step="1" min="0" placeholder={ vueloPayload.precio}  onChange={handleChangePrecio} />
      <div className='btnEditar'>
           <Toaster />               
           <button type="button" className="btn btn-warning" onClick={editarVuelo}>Editar</button>
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
      
      <label>Cupos</label>
      <input type="number"  step="1" min="0" name='cupos' value={formVuelo.cupos} onChange={handleChange}  required />
      <label>Origen</label>
      <input type="text" name='origen' value={formVuelo.origen} onChange={handleChange}  required/>
      <label>Destino</label>
      <input type="text" name='destino' value={formVuelo.destino} onChange={handleChange}  required/>
      <label>Precio</label>
      <input type="number"   step="1" min="0" name='precio' value={formVuelo.precio} onChange={handleChange}  required />
      <div className='btnEditar'>
           <Toaster />
           <button type="button" className="btn btn-success" onClick={guardarVuelo} >Crear</button>
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
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">Detalle vuelo</h5>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Categoria
            <span className="badge bg-primary rounded-pill">{vueloPayload.categoria}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cupos
            <span className="badge bg-primary rounded-pill">{vueloPayload.disponible}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Origen
            <span className="badge bg-primary rounded-pill">{vueloPayload.origen}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Destino
            <span className="badge bg-primary rounded-pill">{vueloPayload.destino}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Precio
            <span className="badge bg-primary rounded-pill">{vueloPayload.precio}</span>
          </li>
        </ul>
      </div>
      <div className="modalEdicionEliminacion">
      <div className='btnModals'>
          <label>Crear un nuevo vuelo o editar el actual</label>
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

export default ModalVuelo;
