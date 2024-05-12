document.addEventListener('DOMContentLoaded', function() {
    const hamBurger = document.querySelector(".toggle-btn");
    const formularioPrueba = document.querySelector('#contenedorPrueba');
    const formularioDeportista = document.querySelector('#contenedorDeportistas');
    let listaPruebas = [];

    hamBurger.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("expand");
    });

    function mostrarFormulario(formulario) {
        // Ocultar todos los formularios
        formularioPrueba.style.display = 'none';
        formularioDeportista.style.display = 'none';

        // Mostrar el formulario deseado
        formulario.style.display = 'block';
    }

    function agregarPrueba() {
        const id = document.getElementById('pruebaInput').value;
        const nombre = document.getElementById('nombrePruebaInput').value;
        const descripcion = document.getElementById('descripcionPruebaInput').value;

        const nuevaPrueba = {
            id: id,
            nombre: nombre,
            descripcion: descripcion
        };

        listaPruebas.push(nuevaPrueba);
        actualizarTabla();
        formularioPrueba.reset();
    }

    function actualizarTabla() {
        const tablaPruebas = document.getElementById('tabla-pruebas').querySelector('tbody');
        tablaPruebas.innerHTML = '';
        listaPruebas.forEach(function(prueba, index) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${prueba.id}</td>
                <td>${prueba.nombre}</td>
                <td>${prueba.descripcion}</td>
                <td>
                    <a href="#editPrueba" class="edit" style="color: black">
                        <i class="bi bi-pencil-square bi-3x"></i>
                    </a>
                    <a href="#deletePrueba" class="delete" style="color: black">
                        <i class="bi bi-file-earmark-x bi-3x"></i>
                    </a>
                </td>
            `;
            tablaPruebas.appendChild(fila);
        });
    }

    formularioPrueba.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarPrueba();
    });

    // Event listener para el enlace de Pruebas
    document.querySelector('.sidebar-item a[href="#prueba"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioPrueba);
    });

    // Event listener para el enlace de Deportista
    document.querySelector('.sidebar-item a[href="#deportista"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioDeportista);
    });

    // Manejo del botón cancelar en el formulario de deportistas
    const cancelarFormularioDeportistaBtn = formularioDeportista.querySelector("#cancelarFormulario");
    cancelarFormularioDeportistaBtn.addEventListener("click", function(event) {
        event.preventDefault();
        formularioDeportista.reset();
    });

    // Manejo del envío del formulario de deportistas
    formularioDeportista.addEventListener("submit", function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para guardar los datos del deportista y actualizar la tabla
        formularioDeportista.reset(); // Por ahora, solo reseteamos el formulario
    });
});
