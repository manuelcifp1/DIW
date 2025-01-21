/*Esto añade un evento que garantiza la carga completa de la página
para que todo funcione correctamente.*/
document.addEventListener("DOMContentLoaded", () => {
    //Selecciona todos los enlaces del menú
    const menuItems = document.querySelectorAll("nav ul li a");
    //Selecciona todos los contenedores con clase "lienzo"
    const lienzos = document.querySelectorAll(".lienzo");

    //Función para cambiar el lienzo visible
    function cambiarLienzo(e) {
        e.preventDefault(); //Evita el comportamiento predeterminado del enlace        

        //Oculta todos los lienzos añadiendo la clase "invisible"
        lienzos.forEach(lienzo => lienzo.classList.add("invisible"));

        //Obtiene el ID del lienzo desde el href del enlace clicado
        const targetId = e.target.getAttribute("href").replace("#", "");
        const lienzoSeleccionado = document.getElementById(targetId);

        // Si el lienzo existe, quita la clase "invisible" para mostrarlo
        if (lienzoSeleccionado) {
            lienzoSeleccionado.classList.remove("invisible");
        }
    }

    //Añade el evento "click" a cada enlace del menú
    menuItems.forEach(item => {
        item.addEventListener("click", cambiarLienzo);
    });

    //Muestra el lienzo inicial al cargar la página
    const lienzoInicial = document.getElementById("inicio");
    if (lienzoInicial) {
        lienzoInicial.classList.remove("invisible");
    }

    // Selección de elementos
    const burgerContainer = document.getElementById("contenedorBurger");
    const menuToggle = document.getElementById("menu-toggle");
    const mainMenu = document.querySelector("nav.menu");

    // Alternar visibilidad del menú
    menuToggle.addEventListener("click", () => {
        mainMenu.classList.toggle("visible");
    });

    // Mostrar el menú hamburguesa al cargar
    burgerContainer.classList.remove("invisible");

    // Alternar visibilidad del menú principal al hacer clic en el menú hamburguesa
    menuToggle.addEventListener("click", () => {
        if (mainMenu.style.top === "50px") {
            mainMenu.style.top = "-100%"; // Repliega el menú hacia arriba
        } else {
            mainMenu.style.top = "50px"; // Despliega el menú debajo del hamburguesa
        }
    });

    // Cerrar el menú al hacer clic en cualquier elemento del menú
    menuItems.forEach(item => {
        item.addEventListener("click", () => {            
            mainMenu.style.top = "-100%"; // Repliega el menú hacia arriba
            menuToggle.checked = false; // Resetea el estado del checkbox
        });
    });

    // Asegurarse de cerrar el menú al cambiar de pantalla
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {            
            mainMenu.style.top = ""; // Reinicia la posición del menú            
        }
    });
});
