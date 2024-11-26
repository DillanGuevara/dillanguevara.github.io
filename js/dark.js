const swith = document.querySelector(".switch");

document.addEventListener("DOMContentLoaded", e => {
    cargarDarkModeEnLocalStorage()
    swith.addEventListener("click", toggleDarkMode)
})

function toggleDarkMode() {
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
    guardarDarkModeEnLocalStorage(swith.classList.contains("active"));
}

function guardarDarkModeEnLocalStorage(estado) {
    localStorage.setItem("darkMode", estado)
}

function cargarDarkModeEnLocalStorage() {
    const darkModeGuardado = localStorage.getItem("darkMode") === "true";
    if (darkModeGuardado) {
        swith.classList.add("active");
        document.body.classList.add("active");
    }
}