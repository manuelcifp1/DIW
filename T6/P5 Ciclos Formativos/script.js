document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los enlaces del menú
    const menuItems = document.querySelectorAll("nav ul li a");
    // Selecciona todos los contenedores con clase "lienzo"
    const lienzos = document.querySelectorAll(".lienzo");

    // Función para cambiar el lienzo visible
    function cambiarLienzo(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        console.log("Cambiando lienzo..."); // Verifica que el evento se activa

        // Oculta todos los lienzos añadiendo la clase "invisible"
        lienzos.forEach(lienzo => lienzo.classList.add("invisible"));

        // Obtén el ID del lienzo desde el href del enlace clicado
        const targetId = e.target.getAttribute("href").replace("#", "");
        const lienzoSeleccionado = document.getElementById(targetId);

        // Si el lienzo existe, quita la clase "invisible" para mostrarlo
        if (lienzoSeleccionado) {
            lienzoSeleccionado.classList.remove("invisible");
        }
    }

    // Añade el evento "click" a cada enlace del menú
    menuItems.forEach(item => {
        item.addEventListener("click", cambiarLienzo);
    });

    // Mostrar el lienzo inicial al cargar la página
    const lienzoInicial = document.getElementById("inicio");
    if (lienzoInicial) {
        lienzoInicial.classList.remove("invisible");
    }
});
