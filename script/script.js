// Crea un arreglo con palabras
var palabras = ["canto", "bosque", "internet", "silla", "profesor"];

// Elije una palabra al azar
var palabraincognita = palabras[Math.floor(Math.random() * palabras.length)];

// Configura el arreglo respuesta
var letrasincognitas = [];
for (var i = 0; i <palabraincognita.length; i++) {
  letrasincognitas[i] = "_";
}

var numerodeletras =palabraincognita.length;

// El ciclo del juego
while (numerodeletras > 0) {
  // Mostrar el progreso del juego
  alert(letrasincognitas.join(" "));

  // El jugador ingresa una letra para adivinar
  var letraingresada = prompt("Adivina una letra o haga clic en Cancelar para detener jugando.");
  if (letraingresada === null) {
    // Sale del ciclo y del juego
    break;
  } else if (letraingresada.length !== 1) {
    alert("Por favor introduzca una sola letra.");
  } else {
    // Actualiza el estado del juego con la letra ingresada por el jugador
    for (var j = 0; j < palabraincognita.length; j++) {
      if (palabraincognita[j] === letraingresada) {
        letrasincognitas[j] = letraingresada;
        numerodeletras--;
      }
    }
  }

// Fin del ciclo y del juego
}

// Muestra la respuesta y felicita al jugador
alert(letrasincognitas.join(" "));
alert("Bien echo! La respuesta fue " + palabraincognita);