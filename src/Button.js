import React from 'react'; // Agrega esta línea para importar React
import './Button.css';

const Button = (props) => {
    return (
        <button {...props} className='btn' />
    );
}; // Agrega punto y coma al final y cierra la función con punto y coma

export default Button;
