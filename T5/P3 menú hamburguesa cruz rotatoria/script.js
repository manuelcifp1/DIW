/*El profesor nos dice de vez en cuando que podemos añadir algo
de javascript a nuestros proyectos y me ha parecido que este era
un buen momento para hacerlo. 
He creado un escuchador de eventos, en este caso el evento
"scroll". Este evento dispara una función que hace que al desplazarse
 el usuario 76px por el eje Y, el texto del título principal cambie
  para ser el del título secundario y además desaparezca el título
   secundario. Al volver al comienzo de la página, todo recupera sus
    estilos originales.*/

document.addEventListener('scroll', () => {

    const titulo = document.getElementById("titulo");
    const titulo2 = document.getElementById("titulo2");    

    if (window.scrollY > 76) {
        titulo.innerHTML= "<h1>Gastronomía ceutí</h1>";
        titulo2.classList.remove("aparecido");
        titulo2.classList.add("desaparecido");        

    } else if (window.scrollY === 0) {
        titulo.innerHTML = "<h1>¿Un campero de corazones?</h1>";
        titulo2.classList.remove("desaparecido");
        titulo2.classList.add("aparecido");        
    } 
});