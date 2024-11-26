const form = document.getElementById("Formulario");
const guardarButton = document.getElementById("guardarButton");
const closeButton = document.getElementById("close");
const modalContainer = document.getElementById("modal_container");
const dishesTableBody = document.getElementById("DishesTable").querySelector("tbody");
const dragZone = document.getElementById("dragZone");
const fileInput = document.getElementById("Imagen");
const preview = document.getElementById("preview");

let uploadedImageUrl = "";

// Mostrar imagen seleccionada o arrastrada
fileInput.addEventListener("change", handleFileSelect);
dragZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragZone.classList.add("active");
});
dragZone.addEventListener("dragleave", () => dragZone.classList.remove("active"));
dragZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dragZone.classList.remove("active");
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        fileInput.files = files;
        handleFileSelect();
    }
});

function handleFileSelect() {
    const file = fileInput.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedImageUrl = e.target.result;
            preview.innerHTML = `<img src="${uploadedImageUrl}" style="width: 150px; height: 100px;">`;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Por favor, selecciona un archivo de imagen válido.");
    }
}

// Agregar datos a la tabla al guardar
guardarButton.addEventListener("click", () => {
    const plato = form.Plato.value.trim();
    const precio = form.Precio.value.trim();
    const cantidad = form.Cantidad.value.trim();

    // Validar formulario
    if (!plato || !precio || !cantidad || !uploadedImageUrl) {
        Swal.fire({
            title: "¡Por favor, llena todos los campos!",
            html: "<p class=swal-text>Es necesario llenar el formulario</p>",
            icon: "error",
            confirmButtonText: "OK",
            customClass: {
                title: "swal-title",
                popup: "swal-popup",
                confirmButton: "swal-confirm"
            }
        });
        return;
    }

    // Crear una nueva fila
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${plato}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><img src="${uploadedImageUrl}" style="width: 150px; height: 100px;"></td>
    `;

    // Agregar la fila a la tabla
    dishesTableBody.appendChild(row);

    // Limpiar el formulario
    form.reset();
    preview.innerHTML = "";
    uploadedImageUrl = "";

    // Cerrar el modal
    modalContainer.classList.remove("show");
});

// Cerrar el modal
closeButton.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});

// Abrir el selector de archivos
document.getElementById("selectFilesButton").addEventListener("click", () => fileInput.click());
