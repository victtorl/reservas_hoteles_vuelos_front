import '../estilos/estilos.css'
import '../styles/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../estiloscss/vuelos.scss';
import '../estiloscss/hoteles.scss';
import '../estiloscss/reservas.scss';


import { useEffect } from 'react'


import { Provider } from 'react-redux'

import { store} from '../redux/store'

function MyApp({ Component, pageProps }) {

useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
}, [])
  
 return(
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
 )
}

export default MyApp
