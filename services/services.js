import axios from "axios";
import {store}  from '../redux/store'

let port="http://localhost:9000/api"

export const getHoteles = () => {
    const baseUrl = `${port}/allhoteles`;
    axios.get(baseUrl)
        .then(data => {
            store.dispatch({
                type: '@getHoteles',
                payload: data.data
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}

export const getVuelos = () => {
    const baseUrl = `http://localhost:9001/api/vuelos`;
    axios.get(baseUrl)
        .then(data => {
            store.dispatch({
                type: '@getVuelos',
                payload: data.data
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}

export const getReservas=() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:9002/api/reservas',
      headers: { }
    };
    
    axios(config)
    .then(data=> {
      store.dispatch({
          type: '@getReservas',
          payload: data.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
}

//servicios vuelos
export const guardarVueloService=(categoria,disponible,origen,destino,precio) => {
    var axios = require('axios');
    var data = JSON.stringify({
      "categoria": categoria,
      "disponible": disponible,
      "origen": origen,
      "destino": destino,
      "precio": precio
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:9001/api/vuelo',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const editarVueloService=(id,categoria,disponible,origen,destino,precio)=>{
    var axios = require('axios');
    var data = JSON.stringify({
        "categoria": categoria,
        "disponible": disponible,
        "origen": origen,
        "destino": destino,
        "precio": precio
    });

    var config = {
    method: 'put',
    url: `http://localhost:9001/api/vuelo/${id}`,
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}

//servicios hoteles
export const guardarHotelService =(categoria,disponible,nombre,precio) => {
    var axios = require('axios');
    var data = JSON.stringify({
    "categoria":categoria,
    "disponible":disponible,
    "nombre":nombre,
    "precio":precio
    });

    var config = {
    method: 'post',
    url: 'http://localhost:9000/api/hotel',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

}

export const editarHotelService =(id,categoria,disponible,nombre,precio) => {
    var axios = require('axios');
    var data = JSON.stringify({
    "categoria": categoria,
    "disponible": disponible,
    "nombre": nombre,
    "precio": precio
    });

    var config = {
    method: 'put',
    url: `http://localhost:9000/api/hotel/${id}`,
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}

//servicio registro
export const guardarRegistroService=(hotel,vuelo,nombre,dni) => {
    var axios = require('axios');
    var data = JSON.stringify({
      "hotel": hotel,
      "vuelo": vuelo,
      "nombre": nombre,
      "dni": dni
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:9002/api/reserva',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
}

export const editarRegistroService=(id,nombrehotel,nombrevuelo,nombrecliente,dni) => {
    var axios = require('axios');
    var data = JSON.stringify({
        "hotel": nombrehotel,
        "vuelo": nombrevuelo,
        "nombre":nombrecliente,
        "dni": dni
    });
    
    var config = {
      method: 'put',
      url: `http://localhost:9002/api/reserva/${id}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}