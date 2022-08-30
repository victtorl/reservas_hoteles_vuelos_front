
export const ReducerReservasFISI = (state, action) => {
    switch (action.type) {

      case '@getHoteles':
        return {
          ...state,
          hoteles: action.payload
        }
      case '@getVuelos':
        return {
          ...state,
          vuelos: action.payload
        }
      case '@getReservas':
        return {
          ...state,
          reservas: action.payload
        }  
      case '@getVueloPayload':
        return {
          ...state,
          vueloPayload: action.payload
        } 
      case '@getHotelPayload':
        return {
          ...state,
          hotelPayload: action.payload
        }
    case '@getRegistroPayload':
        return {
          ...state,
          registroPayload: action.payload
        }
        // //////push/////////////
    case '@pushregistroHotel':
        return {
          ...state,
          registroPayload: Object.assign(state.registroPayload, { hotel: action.payload })
        } 
    case '@pushregistroVuelo':
        return {
          ...state,
          registroPayload: Object.assign(state.registroPayload, { vuelo: action.payload })
        } 
        
   case '@pushregistroNombre':
        return {
          ...state,
          registroPayload: Object.assign(state.registroPayload, { nombre: action.payload })
        } 
        
    case '@pushregistroDni':
        return {
          ...state,
          registroPayload: Object.assign(state.registroPayload, { dni: action.payload })
        }       
    }

    return state
}