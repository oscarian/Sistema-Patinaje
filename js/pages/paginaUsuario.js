import { crearFootterUsuario } from '../components/footer/footerUsuario.js';
import { crearInicio } from '../components/inicio/componentesInicio.js';
import { crearTienda } from '../components/inicio/componentesTienda.js';
import { crearNavUsuario } from '../components/nav/navUsuario.js';


export  function cargarPagina(){
    crearNavUsuario();
    crearInicio();
    crearFootterUsuario();
}

export function cargarTienda() {  
    console.log('cargarTienda'); 
    crearTienda();
    
}

