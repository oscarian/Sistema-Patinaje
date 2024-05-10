//ALt + 96

export function crearNavUsuario() {
  //var nav = document.getElementById("nav");
  var respuestaHTML = "";
  respuestaHTML = `
  <nav class="navbar navbar-expand-lg first-navbar">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="link-light" href="#">Inicio Sesion/Registrarse</a>
                </li>
                <li class="nav-item px-2">
                    <i class="bi bi-instagram"></i>
                </li>
                </li>
                <li class="nav-item px-2">
                    <i class="bi bi-facebook"></i>
                </li>
                <li class="nav-item px-2">
                    <i class="bi bi-whatsapp"></i>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg  bg-light  border-bottom border-4  border-opacity-50">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto my-auto ">
                <li>
                    <a class="navbar-brand fs-2" href="#">
                        <img src="img/logoTransparente.png" alt="Logo" width="80" height="80"
                            class="d-inline-block align-text">
                        <p class="d-inline-block red-text">ASOCIACION DE PATINAJE</p>
                    </a>
                </li>

            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item fs-4">
                    <a class="nav-link active" href="#">Noticias</a>
                </li>
                <li class="nav-item  fs-4 ">
                    <a class="nav-link active" href="#">Eventos</a>
                </li>
                <li class="nav-item  fs-4 ">
                    <a class="nav-link active" href="#">Rankings</a>
                </li>
                <li class="nav-item  fs-4">
                    <a class="nav-link active" href="#">Lineamientos</a>
                </li>
                <li class="nav-item  fs-4 ">
                    <a class="nav-link active" href="#">Tienda</a>
                </li>
                <li class="nav-item mx-2 mt-2">
                    <i class="bi bi-cart"></i>
                </li>
            </ul>
        </div>
    </div>
</nav>`;
  document.getElementById("nav").innerHTML = respuestaHTML;
}
