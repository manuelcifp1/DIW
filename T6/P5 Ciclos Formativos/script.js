document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("nav ul li a");
    const lienzos = document.querySelectorAll(".lienzo");

    function cambiarLienzo(e) {
    e.preventDefault(); //Evita el comportamiento predeterminado del enlace        

    // Obtiene el ID del lienzo desde el href del enlace clicado
    const targetId = e.target.getAttribute("href").replace("#", "");
    const lienzoSeleccionado = document.getElementById(targetId);

    // Si el lienzo seleccionado existe
    if (lienzoSeleccionado) {
        // Oculta todos los lienzos excepto el seleccionado
        lienzos.forEach(lienzo => {
            if (lienzo !== lienzoSeleccionado) {
                lienzo.classList.add("invisible");
            } else {
                lienzo.classList.remove("invisible");
                lienzo.scrollIntoView({ behavior: "smooth" }); // Opcional: animación de scroll
            }
        });
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

    /*Versión responsive=====================================================================*/

    //Selección de elementos para los cambios del menú en la versión responsive.
    const burgerContainer = document.getElementById("contenedorBurger");
    const menuToggle = document.getElementById("menu-toggle");
    const mainMenu = document.querySelector("nav.menu");

    //Alterna la visibilidad del menú
    menuToggle.addEventListener("click", () => {
        mainMenu.classList.toggle("visible");
    });

    //Muestra el menú hamburguesa al cargar
    burgerContainer.classList.remove("invisible");

    //Alterna la visibilidad del menú principal al hacer clic en el menú hamburguesa
    menuToggle.addEventListener("click", () => {
        if (mainMenu.style.top === "0px") {
            mainMenu.style.top = "-100%"; //Repliega el menú hacia arriba
        } else {
            mainMenu.style.top = "0px"; //Despliega el menú debajo del hamburguesa
        }
    });

    //Cierra el menú al hacer clic en cualquier elemento del menú.
    menuItems.forEach(item => {
        item.addEventListener("click", () => {            
            mainMenu.style.top = "-100%"; //Repliega el menú hacia arriba
            menuToggle.checked = false; //Resetea el estado del checkbox
        });
    });

    //Asegura el cierre del menú al cambiar a pantalla grande.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {            
            mainMenu.style.top = ""; //Reinicia la posición del menú            
        }
    });
});
