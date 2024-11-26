class CiudadCollection {

    constructor(items) {
        this.items = items
    }

    first() {
        return new CiudadPath(this.items[0])
    }

    find(index) {
        return new CiudadPath(this.items[index])
    }

    static get() {
        return new CiudadCollection(document.querySelectorAll("path"))
    }

    for(funct) {
        this.items.forEach(ciudadPath => {
            funct(new CiudadPath(ciudadPath))
        });
    }
}

class CiudadPath {

    constructor(element) {
        this.element = element
        this.setTooltip(`sede: ${this.name()}`)
    }

    fill(color){
        this.element.setAttribute("fill", color)
    }

    name() {
        return this.element.getAttribute('name')
    }

    setTooltip(string) {
        this.element.setAttribute('title', string);
    }

    static findByName(name) {
        return new CiudadPath(document.getElementById(name))
    }
}

CiudadCollection.get().for(ciudadPath => {
    ciudadPath.fill("lightgreen")
});

function obtenerSede(path) {
    const sedeDiv = path.closest('.sede');
    const nombreSede = sedeDiv.getAttribute('name');

    window.location.href = `Pedidos.html?producto=${encodeURIComponent(nombreSede)}`;
}


const regionName = document.getElementById("Direccion");
const regionInput = document.getElementById("Direccion");

    const paths = document.querySelectorAll("svg path");

    paths.forEach(path => {
    path.addEventListener("click", () => {
        
        const name = path.getAttribute("name");

        regionName.textContent = name;
        regionInput.value = name;
    });
});