import { createStore } from 'redux'

import { ReducerReservasFISI } from './reducers'

const initialState = {
    hoteles:[],
    vuelos:[],
    reservas:[],
    vueloPayload:{},
    hotelPayload:{},
    registroPayload:{
        id:{id:''},
        hotel:{hotel:''},
        vuelo:{vuelo:''},
        nombre:{nombre:''},
        dni:{dni:''}
    }
}


const rewindows =() => {
    if (typeof window !== "undefined") {
       return  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      }
}  

  
export const store = createStore(
    ReducerReservasFISI,
    initialState,
    rewindows()
)   