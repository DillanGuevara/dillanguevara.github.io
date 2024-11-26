const modal = document.getElementById("modal_container");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

// Abrir el modal
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";  // Mostrar el modal
});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
});

document.getElementById("Formulario").addEventListener("submit", function(event) {
    event.preventDefault();

        let FormularioData = new FormData(this);
        let plato = FormularioData.get("Plato");
        let precio = FormularioData.get("Precio");
        let cantidad = FormularioData.get("Cantidad");
        let imagen = FormularioData.get("Imagen");

    if (!plato || !precio || !cantidad || !imagen) {
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
    } else {
        Swal.fire({
            title: "¡Plato agregado exitosamente!",
            html: "<p class=swal-text>¡Listo!</p>",
            icon: "success",
            confirmButtonText: "OK",
            customClass: {
                title: "swal-title",
                popup: "swal-popup",
                confirmButton: "swal-confirm"
            }
        });

        let DishesTableRef = document.getElementById("DishesTable").getElementsByTagName('tbody')[0];
        let newDishRowRef = DishesTableRef.insertRow(-1);
    
        let newTypeCellRef = newDishRowRef.insertCell(0);
        newTypeCellRef.textContent = plato;

        newTypeCellRef = newDishRowRef.insertCell(1);
        newTypeCellRef.textContent = precio;

        newTypeCellRef = newDishRowRef.insertCell(2);
        newTypeCellRef.textContent = cantidad;

        // Manejar la imagen
        let reader = new FileReader();

        reader.onload = function(e) {
            newTypeCellRef = newDishRowRef.insertCell(3);
            let img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '150px';
            img.style.height = '100px';
            newTypeCellRef.appendChild(img);
        };

        reader.readAsDataURL(imagen);

        this.reset();  // Limpiar los campos del formulario
        modal.style.display = "none";  // Cerrar el modal
    }
});

const noAlertButton = document.getElementById("noAlertButton");
    noAlertButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevenir el comportamiento de envío de formulario
});