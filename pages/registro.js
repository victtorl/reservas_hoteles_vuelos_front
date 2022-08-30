import { useState,React } from 'react';
import Cajaregistro from '../componentes/cajaregistro';
import Cajeliminacion from '../componentes/cajeliminacion';
import Cajaedicion  from '../componentes/cajaedicion';

import Layout from '../componentes/layout';


const Registro = () => {

    const [optreg,Setoptreg]=useState('value1');

    
    const Setoption=(e) => {
        console.log(e.target.value);
        Setoptreg(e.target.value)
    }
    
    const optRender = () => {
        switch (optreg) {
            case 'value1':
                return <Cajaregistro />
            case 'value2':
                return <Cajaedicion/>
            case 'value3':
                return <Cajeliminacion/>
        }
    }

    return (
        <div>
                <Layout>
                    <div className='container text-center fondo_registro'>
                        <div className='row registrar_reserva'>
                            
                        <div>
                            <select name="select" className='seleccionarinputregistro' onChange={Setoption}>
                            <option value="value1" selected>REGISTRAR</option>
                            <option value="value2">EDITAR</option>
                            <option value="value3">ELIMINAR</option>
                            </select>
                        </div>
                            {optRender()}
                        </div>
                        
                    </div>
                </Layout>
        </div>
    );
}

export default Registro;
