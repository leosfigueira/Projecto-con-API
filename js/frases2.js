var Cita = new Array();
Cita[0] = "La vida por los colores";
Cita[1] = "Vallamos al frente, salgamos a ganar";
Cita[2] = "A la gloria no se llega por un camino de rosas";
Cita[3] = "El 7 a 0 no se olvida más";
Cita[4] = "Tecnologia y gestión web 2020";
Cita[5] = "El único campeón de la ciudad";
//<!--Crear array, y darle valor, tantos elementos como citas queramos tener para elegir-->
var lon = Cita.length;
var mostrar = Math.round(Math.random() * (lon - 1));
//<!--Crear variable con la longitud del array,  y otra a la que se le asigna un valor aleatorio del array (sera la cita que se mostrara)-->
function Escribir() {
	$("#frases").html(Cita[mostrar]);
	//document.write(Cita[mostrar]);
}
Escribir();
