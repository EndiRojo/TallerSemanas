// script.js
// Función para mostrar/ocultar el contenido desplegable
function toggleDropdown() {
    const content = document.getElementById("dropdown-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
}

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    const dropdown = document.querySelector('.dropdown');
    const content = document.getElementById("dropdown-content");
    if (!dropdown.contains(event.target)) {
        content.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.getElementById("toggleMenu");
    const semanaMenu = document.getElementById("semanaMenu");

    toggleMenu.addEventListener("click", () => {
        // Alternar la visibilidad del menú de semanas
        if (semanaMenu.style.display === "none") {
            semanaMenu.style.display = "block";
        } else {
            semanaMenu.style.display = "none";
        }
    });
});