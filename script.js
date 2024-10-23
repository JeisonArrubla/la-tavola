document.getElementById('formulario').addEventListener('submit', function (event) {

    const nombre = document.getElementById('nombre').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const edad = document.getElementById('edad').value.trim();

    if (!nombre || !direccion || !telefono || !correo || !ciudad || !edad) {
        alert('Por favor, complete todos los campos antes de enviar el formulario.');
        event.preventDefault();
    }
});
