//$(document).ready(traer());
var contenido = document.getElementById("contenidos");
function traer() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.results['0'])
      contenido.innerHTML = `
        <img src="${data.results["0"].picture.large}" width="100px" class="img-fluid rounded-circle"> 
        <p>Nombre: ${data.results["0"].name.last}</p>
        <p>Pais: ${data.results["0"].location.country}</p>
        <p>Edad: ${data.results["0"].dob.age}</p>
        <p>Correo Electronico: ${data.results["0"].email}</p>
        `;
    });
}
traer();
