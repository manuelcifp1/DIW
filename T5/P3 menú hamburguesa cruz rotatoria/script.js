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