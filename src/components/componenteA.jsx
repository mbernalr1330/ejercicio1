import React from "react";
import { Contacto } from "../models/contacto.class";
import ComponenteB from "./componenteB";

{/*
Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

Nombre: que será un String.
Apellido: también un String.
Email: de nuevo un String.
Conectado: será un booleano que nos indicará si la persona está conectada o no.
*/}

const ComponenteA = () => {
    const defaultContacto = new Contacto('Miguel Augusto','Bernal Ramirez', 'miguelbernal@example.com', true);

    return (
        <div>
            <h1>Información de contacto</h1>
            <ComponenteB contacto={defaultContacto}></ComponenteB>
        </div>
    );
  }
  
  export default ComponenteA;