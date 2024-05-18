import {cargarProductos, filtrarProductos} from "../../utils/scriptsTienda.js";



export function crearTienda(){
    var respuestaHTML = "";
    respuestaHTML = `<h1>Tienda Patinaje</h1>
    <div id="categorias">
        
        <h3>CATEGORIAS</h3>
        <div class="submenu">
            <span>HOMBRE</span>
            <div class="submenu-content">
                <a href="#" class="subcategoria" data-etiqueta="hombreRopaDeportiva">ROPA</a>
                <a href="#" class="subcategoria" data-etiqueta="hombreCalzado">CALZADO</a>
                <a href="#" class="subcategoria" data-etiqueta="hombreAccesorios">ACCESORIOS</a>
            </div>
        </div>
        <div class="submenu">
            <span>MUJER</span>
            <div class="submenu-content">
                <a href="#" class="subcategoria" data-etiqueta="mujerRopaDeportiva">ROPA</a>
                <a href="#" class="subcategoria" data-etiqueta="mujerCalzado">CALZADO</a>
                <a href="#" class="subcategoria" data-etiqueta="mujerAccesorios">ACCESORIOS</a>
            </div>
        </div>
        <div class="submenu">
            <span>NIÑO</span>
            <div class="submenu-content">
                <a href="#" class="subcategoria" data-etiqueta="ninoRopaDeportiva">ROPA</a>
                <a href="#" class="subcategoria" data-etiqueta="ninoCalzado">CALZADO</a>
                <a href="#" class="subcategoria" data-etiqueta="ninoAccesorios">ACCESORIOS</a>
            </div>
        </div>
    </div>
    <hr>
    <div id="productos"></div>`
    

    document.getElementById("contenedor").innerHTML = respuestaHTML;

    
   

        cargarProductos();
        //cargarProductos(); // Cargar los productos al cargar la página
        console.log("Productos");
        // Agregar eventos a las subcategorías
        const subcategorias = document.querySelectorAll('.subcategoria');
        subcategorias.forEach(subcategoria => {
            subcategoria.addEventListener('click', (event) => {
                event.preventDefault();
                const etiqueta = subcategoria.getAttribute('data-etiqueta');
                filtrarProductos(etiqueta); // Filtrar productos por etiqueta
            });
        });
    
}