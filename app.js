let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

let edad = prompt("Ingresa tu edad");
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("para continar necesitas un adulto mayor");
}
let primerProducto = Number(
  prompt("¿Cuantas veces te gustaria entrenar de manera presencial?")
);
let segundoProducto = Number(
  prompt("¿Cuantas clases en linea te gustaria tomar?")
);

let suma = primerProducto + segundoProducto;

alert(suma);

alert("Elegí los días que deseas entrenar");
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
