function fraseAleatoria() {
	var Cita = new Array();
	Cita[0] = "La vida por los colores";
	Cita[1] = "Vallamos al frente, salgamos a ganar";
	Cita[2] = "A la gloria no se llega por un camino de rosas";
	Cita[3] = "El 7 a 0 no se olvida más";
	Cita[4] = "Tecnologia y gestión web 2020";
	Cita[5] = "El único campeón de la ciudad";
	//<!--Crear array, y darle valor, tantos elementos como citas queramos tener para elegir-->
	var co = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
	var colenght = co.length - 1;
	console.log("co  " + co + " la longitud del color es " + colenght);
	var co2 = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
	// console.log(co2)
	var colenght2 = co2.length - 1;
	console.log(
		"co2  " + co2 + " la longitud del color2 del estilo es " + colenght2
	);
	if ((colenght = 5)) {
		co = "#f52f1d";
	}
	if ((colenght2 = 5)) {
		co = "#f7f7f7";
	}
	var lon = Cita.length;
	var styles = new Array();
	styles[0] = "10px 10px 10px " + co + "";
	styles[1] = "7px 7px 7px " + co + "";
	styles[2] = "0px 9px 8px " + co + "";
	styles[3] = "1px 5px 6px " + co + "";
	var lon2 = styles.length;
	//['2px 2px 8px ', '2px 2px #FF0000', '0 0 3px #FF0000, 0 0 5px #0000FF']
	var styleIndex = Math.floor(Math.random() * lon2);
	console.log("styleindex " + styleIndex);
	var mostrar = Math.round(Math.random() * (lon - 1));
	console.log("Frase a mostrar" + mostrar);
	//<!--Crear variable con la longitud del array,  y otra a la que se le asigna un valor aleatorio del array (sera la cita que se mostrara)-->
	if (styles[styleIndex] == undefined) {
		styles[styleIndex] = "2px 2px 9px #FF0000";
	}
	const p = document.getElementById("frases");
	p.innerHTML = Cita[mostrar];
	p.style.textShadow = styles[styleIndex];
	console.log("textshadow " + styles[styleIndex]);
	p.style.color = co2;
	console.log("co2 letra " + co2);
	//$("#frases").html(Cita[mostrar]);
	//document.write(Cita[mostrar]);

}

fraseAleatoria();

setInterval('fraseAleatoria()', 4000);




