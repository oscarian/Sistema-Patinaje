const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const enlacePruebas = document.querySelector('.sidebar-item a[href="#"]');

enlacePruebas.addEventListener('click', function(event) {
    event.preventDefault(); 
    const contenedorPrueba = document.getElementById('contenedorPrueba');
    contenedorPrueba.style.display = 'block';
});

/* PARTE DE LAS PRUEBAS */
document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.querySelector('form');
  const tablaPruebas = document.getElementById('tabla-pruebas').querySelector('tbody');
  let listaPruebas = [];

  formulario.addEventListener('submit', function(event) {
      event.preventDefault();

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
      formulario.reset();
  });

  tablaPruebas.addEventListener('click', function(event) {
      const fila = event.target.closest('tr');

      if (!fila) return;

      if (event.target.classList.contains('edit')) {
          const id = fila.cells[1].textContent;
          const nombre = fila.cells[2].textContent;
          const descripcion = fila.cells[3].textContent;

          document.getElementById('pruebaInput').value = id;
          document.getElementById('nombrePruebaInput').value = nombre;
          document.getElementById('descripcionPruebaInput').value = descripcion;
      }

      if (event.target.classList.contains('delete')) {
          const confirmar = confirm('¿Estás seguro de eliminar esta prueba?');
          if (confirmar) {
              const indice = fila.rowIndex - 1;
              listaPruebas.splice(indice, 1);
              actualizarTabla();
          }
      }
  });

  function actualizarTabla() {
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
});

