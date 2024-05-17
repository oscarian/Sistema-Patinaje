//ALt + 96

import { cargarTienda } from "../../pages/paginaUsuario.js";

export function crearNavUsuario() {
  //var nav = document.getElementById("nav");
  var respuestaHTML = "";
  respuestaHTML = `
    <nav class="navbar navbar-expand-sm navbar-light first-navbar">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            <a class="link-light" href="#">Inicio Sesion/Registrarse</a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0" href="#"><i class="bi bi-instagram fs-5 "></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0" href="#"><i class="bi bi-facebook fs-5"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0" href="#"><i class="bi bi-whatsapp fs-5"></i></a>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg  bg-light  border-bottom border-4  border-opacity-50">
      <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto my-auto ">
            <li>
              <a class="navbar-brand fs-2" href="#">
                <img src="img/logoTransparente.png" alt="Logo" width="80" height="80" class="d-inline-block align-text">
                  <p class="d-inline-block red-text">ASOCIACION DE PATINAJE</p>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item fs-4">
              <a class="nav-link active" href="#" id="linkNoticias">Noticias</a>
            </li>
            <li class="nav-item  fs-4 ">
              <a class="nav-link active" href="#" id="linkEventos">Eventos</a>
            </li>
            <li class="nav-item  fs-4 ">
              <a class="nav-link active" href="#" id="linkRankings">Rankings</a>
            </li>
            <li class="nav-item  fs-4">
              <a class="nav-link active" href="#" id="linkLineamientos">Lineamientos</a>
            </li>
            <li class="nav-item  fs-4 ">
              <a class="nav-link active" href="#" id="linkTienda">Tienda</a>
            </li>
            <li class="nav-item mx-2 mt-2">
              <i class="nav-link bi bi-cart fs-4"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
  document.getElementById("nav").innerHTML = respuestaHTML;

  
    document.getElementById('linkTienda').addEventListener('click', function (event) {
      event.preventDefault();
      cargarTienda();
      console.log('click');
    });

  
}
