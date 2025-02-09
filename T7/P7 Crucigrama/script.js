document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input[type='text']");
    const button = document.querySelector("button");
    const clues = document.querySelectorAll("#derecha p"); // Seleccionamos todos los <p> en #derecha
  
    // Mapeo de palabras a sus números de párrafo en #derecha
    const wordToClue = {
      goblin: "p1",
      marvel: "p2",
      captain: "p3",
      drax: "p4",
      widow: "p5",
      stark: "p6",
      wakanda: "p7",
      thanos: "p8",
      avengers: "p9",
      storm: "p10",
      nightcrawler: "p11"
    };
  
    // Función para restaurar todos los párrafos a su estado original
    function resetClues() {
      clues.forEach((clue) => {
        clue.style.backgroundColor = ""; // Restaura el color original
        clue.style.color = ""; // Restaura el color original del texto
      });
    }
  
    // Función para resaltar la pista correspondiente al hacer clic en un input
    function highlightClue(event) {
      resetClues(); // Primero restablecemos todos los párrafos al estado original
  
      const input = event.target;
      const classList = input.classList; // Obtiene todas las clases del input
  
      classList.forEach((word) => {
        const clueId = wordToClue[word]; // Busca el id del <p> en #derecha
        if (clueId) {
          const clue = document.getElementById(clueId);
          if (clue) {
            clue.style.backgroundColor = "white";
            clue.style.color = "rgb(159, 39, 159)";
          }
        }
      });
    }
  
    // Función para validar cada input con su expresión regular
    function validateInput(event) {
      const input = event.target;
      const regexPattern = input.getAttribute("pattern");
      const regex = new RegExp(regexPattern, "i");
  
      if (button.style.backgroundColor === "green") {
        if (regex.test(input.value)) {
          input.style.backgroundColor = "lightgreen";
        } else {
          input.style.backgroundColor = "white";
        }
      } else {
        input.style.backgroundColor = "white";
      }
    }
  
    // Agrega eventos a cada input
    inputs.forEach((input) => {
      input.addEventListener("input", validateInput);
      input.addEventListener("click", highlightClue);
    });
  
    // Alternar color del botón entre fucsia y verde al hacer clic
    button.addEventListener("click", (event) => {
      event.preventDefault();
  
      if (button.style.backgroundColor === "green") {
        button.style.backgroundColor = "rgb(159, 39, 159)";
      } else {
        button.style.backgroundColor = "green";
      }
  
      inputs.forEach((input) => validateInput({ target: input }));
    });
  });
  