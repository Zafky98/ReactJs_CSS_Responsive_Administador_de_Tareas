import React, { useState }from 'react';
import '../style/tareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function Tareaformulario( props ) {

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    };

    const manejarEnvio = e =>{
        e.preventDefault();
        const nuevaTarea = {
            id: uuidv4(),
            texto: input,
            completado: false
            
        }
        props.onSubmit(nuevaTarea);
    };

    
    return (
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input 
                className='tarea-input'
                type= 'text'
                placeholder='Añade una Tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agrega Tarea
            </button>
        </form>

        
    );
}

export default Tareaformulario;
