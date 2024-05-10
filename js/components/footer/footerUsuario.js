export function crearFootterUsuario() {
  var respuestaHTML = "";
  respuestaHTML += `<footer class="footer row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-2 border-top text-light">
    <div class="col mb-3">
        <a class="navbar-brand fs-2" href="#">
            <img src="img/logo.png" alt="Logo" width="200" height="200" class="d-inline-block align-text">

        </a>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
        <h5>Contactos</h5>
        <ul class="nav flex-column text-center">
            <p class="text-center mb-0">Telefono:</p>
            <p class="text-center mb-0">+593 000 000 000</p>
            <p class="text-center mb-0">Email:</p>
            <p class="text-center mb-0">ejempo@gmail.com</p>
            <p class="text-center mb-0">Dirección:</p>
            <p class="text-center mb-0">Calle 1 y Calle 2</p>
            <p class="text-center mb-0">Cuenca - Ecuador</p>
            <ul class="navbar-nav mx-auto mt-1 mb-2 mb-lg-0">
                <li class="nav-item px-2">
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-whatsapp"></i>
                </li>

            </ul>
        </ul>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
        <h5>Encuentranos</h5>
        <a class="navbar-brand fs-2" href="#">
            <img src="img/ubicacion.jpg" alt="Logo" width="200" height="200" class="d-inline-block align-text">

        </a>
    </div>
</footer>`
    document.getElementById("footer").innerHTML=respuestaHTML;
}
