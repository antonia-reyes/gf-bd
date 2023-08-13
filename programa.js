const raiz = document.getElementById("raiz");
const principal = document.getElementById("monito");

let contador = 0;

principal.addEventListener("click", () => {
  contador += 1;

  const parrafo = document.createElement("h4");
  const texto = document.createTextNode(`te amo infinito + ${contador}`);
  parrafo.appendChild(texto);

  raiz.appendChild(parrafo);
});