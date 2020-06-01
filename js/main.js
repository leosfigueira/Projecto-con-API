$(function () {
  $("#idbuscar2").on("click", (e) => {
    let nombre = $("#idnombre").val();
    let anio = $("#idanio").val();
    let tipo = $("#idtipo").val();
    getMovies(nombre, anio, tipo);
    //window.setTimeout("displayt(0)", 300);
    //window.onload=displayt('0');
    e.preventDefault();
    elefocus = document.getElementById("idnombre");
    elefocus.focus();
    elemento = document.getElementById("desplegable");
    elemento.setAttribute("aria-expanded", false);
    elemento2 = document.getElementById("menu");
    elemento2.setAttribute("class", "dropdown-menu dropdown-menu-right");
  });
});
$(document).ready(() => {
  $("#idbuscar").on("click", (e) => {
    let nombre = $("#idnombre").val();
    let anio = $("#idanio").val();
    let tipo = $("#idtipo").val();
    getMovies(nombre, anio, tipo);
    e.preventDefault();
  });
});
function getMovies(nombre, anio, tipo) {
  axios
    .get(
      "https://www.omdbapi.com/?s=" +
      nombre +
      "&y=" +
      anio +
      "&type=" +
      tipo +
      "&apikey=effcba2"
    )
    .then((response) => {
      //console.log(response);
      let movies = response.data.Search;
      //console.log(response.data.Response);
      // console.log(response.data.Search);
      let output = "";
      if (response.data.Search == undefined) {
        console.log("data false");
        output += `
          <div class="col-md-12">
            <div class="well text-center">
              <h5>No hay peliculas para mostrar con los datos buscados</h5>
            </div>
          </div>
        `;
        $("#movies").html(output);
      } else {
        $.each(movies, (index, movie) => {
          output += `
          <div class="col-md-3" id="${index}" style="display:none" >
            <div class="well text-center"  >
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Ver detalles</a>
            </div>
          </div>
 <br> <br>
        `;
        });
        output += `
 <br>
 <br>
      <div id="pag" class="container">
        <nav aria-label="Page navigation example">
          <ul class="pagination pg-blue justify-content-center">
            <li class="page-item ">
            </li>
            <li class="page-item"><a class="page-link" onclick="displayt(0)">1</a></li>
            <li class="page-item"><a class="page-link" onclick="displayt(4)">2</a></li>
            <li class="page-item"><a class="page-link" onclick="displayt(8)">3</a></li>
            <li class="page-item">
            </li>
          </ul>
        </nav>
      </div>
<br>
      `;
        $("#movies").html(output);
        window.setTimeout("displayt(0)", 1000);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
function displayt(id) {
  //console.log(id);
  var k;
  for (k = 0; k < 10; k++) {
    if ((document.getElementById(k).style.display = "block")) {
      document.getElementById(k).style.display = "none";
    }
  }
  var i;
  j = 0;
  for (i = 0; i < 4; i++) {
    let j = i + id;
    //console.log(j);
    if (j < 11) {
      document.getElementById(j).style.display = "block";
    }
  }
}
function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}
function getMovie() {
  let movieId = sessionStorage.getItem("movieId");
  axios
    .get("https://www.omdbapi.com?i=" + movieId + "&apikey=effcba2")
    .then((response) => {
      //console.log(response);
      let movie = response.data;
      let output = `
                <div class="form-group">
                <input name="titulo" type="hidden" readonly="readonly" value=" ${movie.Title}" >
                <input name="poster" type="hidden" class="form-control" readonly="readonly"  value="${movie.Poster}" >
                <input name="genero" type="hidden" class="form-control" readonly="readonly"  value=" ${movie.Genre}" >
                <input name="estreno" type="hidden" class="form-control" readonly="readonly"  value=" ${movie.Released}" >
                <input name="clasificacion" type="hidden" class="form-control" readonly="readonly"  value=" ${movie.Rated}" >
                <input name="ranking" type="hidden" class="form-control" readonly="readonly"  value=" ${movie.imdbRating}" >
                <input name="director" type="hidden" class="form-control" readonly="readonly"  value=" ${movie.Director}" >
                <input name="escritor" type="hidden" class="form-control" readonly="readonly"  value=" ${movie.Writer}" >
                <input name="actores" type="hidden" class="form-control" readonly="readonly"  value=" ${movie.Actors}" >
                <input name="trama" type="hidden" class="form-control" readonly="readonly"  value=" ${movie.Plot}" >
                <input name="imbdid" type="hidden" class="form-control" readonly="readonly"  value="${movie.imdbID}" >
                </div>
 <br> 
                <br>
                <br> 
         </form>    
      </div>
            <div  class="row">
              <div class="col-md-4">
                <img src="${movie.Poster}" class="thumbnail">
              </div>
              <div class="col-md-7">
                <h2  id="titulo">${movie.Title}</h2>
                <ul class="conteiner-fluid" class="list-group">
                  <li class="list-group-item"><strong>Genero:</strong> ${movie.Genre}</li>
                  <li class="list-group-item"><strong>Estreno:</strong> ${movie.Released}</li>
                  <li class="list-group-item"><strong>Clasificacion:</strong> ${movie.Rated}</li>
                  <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                  <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                  <li class="list-group-item"><strong>Escritor:</strong> ${movie.Writer}</li>
                  <li class="list-group-item"><strong>Actores:</strong> ${movie.Actors}</li>
                </ul>
              </div>
            </div>
    <br>
    <br>
            <div class="col-md-11">
              <div class="well">
                <h3>Trama</h3>
                ${movie.Plot}
                <hr>
                <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">Ver en IMDB</a>
                <a href="peliculas2.html" class="btn btn-default">Volver a buscar peliculas</a>
              </div>
            </div>        
      `;
      $("#movie").html(output);
      //console.log(movie.Actors);
    })
    .catch((err) => {
      console.log(err);
    });
}
