let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

let edad = prompt("Ingresa tu edad");
if (edad >= 18) {
  console.log("Eres mayor de edad");
  alert("Eres mayor de edad puedes continuar");
} else {
  console.warn("para continuar necesitas un adulto mayor");
  alert("para continuar necesitas un adulto mayor");
  edad = prompt("Ingrese la edad del responsable");
  while (edad <= 18) {
    edad = prompt(
      "La persona responsable, debe ser mayor de edad, escribir OK"
    );
  }
}

alert("¿Que día se te complica entrenar? Apreta ENTER para seguir");
let dias = prompt(`
1:Lunes
2:Martes
3:Miercoles
4:Jueves
5:Viernes
6:Sabado
7:Domingo`);

switch (dias) {
  case "1":
    console.log("Lunes");

  case "2":
    console.log("Martes");
    break;

  case "3":
    console.log("Miercoles");
    break;

  case "4":
    console.log("Jueves");
    break;

  case "5":
    console.log("Viernes");
    break;

  case "6":
    console.log("Sabado");
    break;

  case "7":
    console.log("Domingo");
    break;

  default:
    console.log("Opción invalidad");

    break;
}

alert(dias);

let dia = prompt(`Ingresa día de entrenamiento`);
let dia2 = prompt(`Ingresa otro día de entrenamiento`);
let dia3 = prompt(`Agrega otro día de entrenamiento o sino coloca un "0"`);

if (dia != "" && dia2 != "" && dia3 != "") {
  let Entrenar = "1) " + dia + " " + "2) " + dia2 + " " + "3) " + dia3;

  console.log(Entrenar);
} else {
  console.log("Opción invalidad falta cargar los días de entrenamiento");
}

alert(
  "Ingresa la cantidad de días que deseas entrenar y participa por un descuento exclusivo"
);

let primerProducto = Number(
  prompt("¿Cuantas veces por mes te gustaria entrenar de manera presencial?")
);
let segundoProducto = Number(
  prompt("¿Cuantas clases por mes en linea te gustaria tomar?")
);
let suma = primerProducto + segundoProducto;

if (suma >= 1 && suma <= 8) {
  alert("Descuento aplica para más cantidad de clases");
} else if (suma >= 9 && suma <= 16) {
  alert("Tendras un 15% de descuento sobre el valor total de tus clases");
} else {
  alert("Opción invalidad");
}
