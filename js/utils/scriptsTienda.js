
    // Archivo scriptsTienda.js

    let productos = [];

    // Función para cargar los productos desde el archivo JSON
    export function cargarProductos() {
        fetch('productos.json')
            .then(response => response.json())
            .then(data => {
                productos = data;
                mostrarProductos(productos.slice(0, 9)); // Mostrar los primeros 9 productos
            })
            .catch(error => console.error('Error al cargar los productos:', error));
    }
    
    // Función para truncar la descripción del producto y agregar puntos suspensivos
    function truncarDescripcion(texto, longitudMaxima) {
        if (texto.length > longitudMaxima) {
            return texto.slice(0, longitudMaxima) + '...';
        }
        return texto;
    }
    
    // Función para mostrar los productos en la página HTML
    function mostrarProductos(productos) {
        const contenedorProductos = document.getElementById('productos');
        contenedorProductos.innerHTML = ""; // Limpiar el contenedor antes de agregar productos
    
        productos.forEach(producto => {
            // Truncar la descripción del producto si es necesario
            const descripcion = truncarDescripcion(producto.descripcion, 150); // Ajusta la longitud máxima según tus necesidades
    
            // Crear elemento div para cada producto
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
    
            // Construir la estructura del producto
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100px; height: 100px;">
                <h3>${producto.nombre}</h3>
                <p>${descripcion}</p>
                <stock>Stock disponible: ${producto.stock}</stock>
                <span>Precio: $${producto.precio}</span>
                <button class="boton-agregar">Agregar al carrito</button>
            `;
    
            // Agregar el producto al contenedor de productos
            contenedorProductos.appendChild(productoDiv);
        });
    }
    
    // Función para limpiar los productos actuales
    function limpiarProductos() {
        const contenedorProductos = document.getElementById('productos');
        contenedorProductos.innerHTML = '';
    }
    
    // Función para filtrar los productos por etiqueta
    export function filtrarProductos(etiqueta) {
        limpiarProductos(); // Limpiar los productos actuales
    
        // Filtrar los productos por etiqueta
        const productosFiltrados = productos.filter(producto => producto.etiquetas.includes(etiqueta));
        mostrarProductos(productosFiltrados); // Mostrar los productos filtrados
    }
    
    
    /*
    // Llamar a la función cargarProductos cuando la página se cargue completamente
    document.addEventListener('DOMContentLoaded', () => {
    
        cargarProductos(); // Cargar los productos al cargar la página
    
        // Agregar eventos a las subcategorías
        const subcategorias = document.querySelectorAll('.subcategoria');
        subcategorias.forEach(subcategoria => {
            subcategoria.addEventListener('click', (event) => {
                event.preventDefault();
                const etiqueta = subcategoria.getAttribute('data-etiqueta');
                filtrarProductos(etiqueta); // Filtrar productos por etiqueta
            });
        });
    });*/
    