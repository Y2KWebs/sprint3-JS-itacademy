/* Exercici 1 */
console.log("Hello Mundo");

/* Exercici 2 */
alert("Me llamo Manuel");

/* Exercici 3 */
let nombre = "Manuel";
let apellido = "Congsoto";
console.log(nombre, apellido);

/* Exercici 4 */
let x = 1;
let y = 2;
console.log("La suma entre " + x + " y " + y + " es igual a " + (x + y));

/* Exercici 5 */
let nota_examen = 10;
alert(
  (nota_examen >= 5
    ? "Bien! has aprobado el examen con un "
    : "Ohh has suspendido el examen con un ") + nota_examen
);

/* Exercici 6 */
var texto = "Tinc un cotxe de color blau.";
console.log(texto.replace("blau", "verd"));
console.log(texto.replace(/o/g, "u"));

/* Exercici 7 */
let lista = ["taula", "cadira", "ordinador", "libreta"];
for (let i = 0; i < lista.length; i++) {
  console.log("L'objecte " + lista[i] + " està a la posició " + i + ".");
}

/* Exercici 8 y Nivel 2*/
function calculadora(operador, valor1, valor2) {
  switch (operador) {
    case "suma":
      return valor1 + valor2;
    case "resta":
      return valor1 - valor2;
    case "multiplicacion":
      return valor1 * valor2;
    case "division": //nivel 2
      return valor2 != 0 ? valor1 / valor2 : "Error div entre cero";
    default:
      return "Error";
  }
}
var resultat = calculadora("division", 40, 20);
console.log(resultat);
document.getElementById("res").innerHTML = resultat; //por pantalla

/* Nivel 3*/
function calculadoraGUI(operador, valor1, valor2) {
  let resultat = calculadora(operador, parseInt(valor1), parseInt(valor2));
  document.getElementById("res").innerHTML = resultat;
}
