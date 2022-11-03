import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";

{/*
Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y 
va a poder cambiar su estado de conectado a desconectado y viceversa.

Si el contacto está conectado, se debe mostrar: Contacto En Línea
Si el contacto no está conectado, se debe mostrar: Contacto No Disponible
*/}

const ComponenteB = ({contacto}) => {
    const [conectado, setConectado] = useState(contacto.conectado);
    const conexion = () => {
        setConectado(!conectado);
    }
    
    return (
        <div>
            <h2>Nombres: {contacto.nombre}</h2>
            <h2>Apellidos: {contacto.apellido}</h2>
            <h3>E-mail: {contacto.email}</h3>
            <h5>
                {conectado === false ? "Contacto No Disponible" : "Contacto En Línea"}
            </h5>
            <button type="button" onClick={conexion}>
                {conectado === false ? "Conectar" : "Desconectar"}
            </button>
        </div>
    );
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ComponenteB;