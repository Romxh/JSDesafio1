/*
//Anotador de formación x jam. Este anotador registra que jugador ingresa en el jam (x numero de camiseta) y su posicion
let jammer = prompt('Ingrese # Jammer');
alert("#" + jammer)
let pivot = prompt('Ingrese # Pivot');
alert("#" + pivot)
let blocker1 = prompt('Ingrese # Blocker 1');
alert("#" + blocker1)
let blocker2 = prompt('Ingrese # Blocker 2');
alert("#" + blocker2)
let blocker3 = prompt('Ingrese # Blocker 3');
alert("#" + blocker3)
let formacion = "J) "+jammer+" "+
                "P) "+pivot+" "+
                "B1) "+blocker1+" "+
                "B2) "+blocker2+" "+
                "B3) "+blocker3;
alert("Formación: "+ formacion);
*/

/*
//Contador de puntos por jam
let valor1 = prompt("Ingrese cantidad de puntos x pasada #1",0);
let valor2 = prompt("Ingrese cantidad de puntos x pasada #2",0);
let valor3 = prompt("Ingrese cantidad de puntos x pasada #3",0);
let valor4 = prompt("Ingrese cantidad de puntos x pasada #4",0);
let valor5 = prompt("Ingrese cantidad de puntos x pasada #5",0);
let valor6 = prompt("Ingrese cantidad de puntos x pasada #6",0);
let valor7 = prompt("Ingrese cantidad de puntos x pasada #7",0);
let valor8 = prompt("Ingrese cantidad de puntos x pasada #8",0);
let valor9 = prompt("Ingrese cantidad de puntos x pasada #9",0);
let valor10 = prompt("Ingrese cantidad de puntos x pasada #10",0);
let suma = parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4) +  parseInt(valor5) + parseInt(valor6) + parseInt(valor7) + parseInt(valor8) + parseInt(valor9) +  parseInt(valor10); 
prompt("Total puntos en jam: " + suma)
*/

//Pasando en limpio estadísticas de juego. Promedio de puntos x jam
let contadorPuntos = parseInt(prompt("Introduce cantidad de jams jugados:", 0)); // para saber el numero de prompts que han de salir
let controles = new Array(contadorPuntos);
for(let i = 0; i <= contadorPuntos - 1; i++){
    controles[i] = parseInt(prompt("Introduce los puntos anotados en el jam"));
}
document.write("<h2>Total puntos x jam:</h2>");
document.write("<ul>")
let total = 0;
for(let i = 0; i <= contadorPuntos - 1; i++){
    document.write("<li>"+controles[i]+"</li>");
    total += controles[i];
}
document.write("</ul>");
document.write("<h2>Tu promedio es: " + (total / contadorPuntos)  + "</h2>");