document.getElementById("Formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let FormularioData = new FormData(this);
    let cantidad = FormularioData.get("Cantidad");

    if (!cantidad) {
        swal("Por favor, llena todos los campos.", "Es necesario llenar el formulario", "error");
        return;
    } else {
        swal("¡Plato agregado exitosamente!", "¡Listo!", "success")
        // Limpiar el formulario después del envío
        document.getElementById("Formulario").reset();
    }

    this.reset();  // Limpiar los campos del formulario
    modal.style.display = "none";  // Cerrar el modal
});


// Redirigir con el nombre del producto seleccionado
function comprarProducto(button) {
    const productoDiv = button.closest('.producto');
    const nombreProducto = productoDiv.getAttribute('data-nombre');

    window.location.href = `map-España.html?producto=${encodeURIComponent(nombreProducto)}`;
}

function comprarProductoMex(button) {
    const productoDiv = button.closest('.producto-Mex');
    const nombreProducto = productoDiv.getAttribute('data-nombre');

    window.location.href = `map-México.html?producto=${encodeURIComponent(nombreProducto)}`;
}

function comprarProductoArg(button) {
    const productoDiv = button.closest('.producto-Arg');
    const nombreProducto = productoDiv.getAttribute('data-nombre');

    window.location.href = `map-Argentina.html?producto=${encodeURIComponent(nombreProducto)}`;
}

function comprarProductoCol(button) {
    const productoDiv = button.closest('.producto-Col');
    const nombreProducto = productoDiv.getAttribute('data-nombre');

    window.location.href = `map-Colombia.html?producto=${encodeURIComponent(nombreProducto)}`;
}

function comprarProductoPer(button) {
    const productoDiv = button.closest('.producto-Per');
    const nombreProducto = productoDiv.getAttribute('data-nombre');

    window.location.href = `map-Perú.html?producto=${encodeURIComponent(nombreProducto)}`;
}