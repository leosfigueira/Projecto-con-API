var bearer =
  "AAAAAAAAAAAAAAAAAAAAALkZEwEAAAAA6Pt0kRnnFL6cKazHDJGqPTtFmTU%3D57W0qYohs8SFtEmjVHrcgHUmsKVP3pmCJ4VgRPyw0xEcMLIpLE";

function getuser() {
  usuario = document.getElementById("user").value;
  // console.log(usuario);
  if (usuario == "") {
    var useraleatorio = new Array();
    useraleatorio[0] = "EdelpOficial";
    useraleatorio[1] = "ClimaMLP";
    useraleatorio[2] = "DiarioOle";
    useraleatorio[3] = "LaPlataMLP";
    useraleatorio[4] = "metroadelantado";
    useraleatorio[5] = "eldialp";
    useraleatorio[6] = "planetaedlp_";
    useraleatorio[7] = "FOXSportsArg";
    useraleatorio[8] = "InfoPincha";
    useraleatorio[9] = "SC_ESPN";
    useraleatorio[10] = "andrescausa";
    useraleatorio[11] = "diariohoynet";
    useraleatorio[12] = "TyCSports";
    useraleatorio[13] = "edlprioridad";
    useraleatorio[14] = "C5N";
    useraleatorio[15] = "somoslaplata";
    useraleatorio[16] = "Liberotyc";
    useraleatorio[17] = "infobae";
    useraleatorio[18] = "telefenoticias";

    var userlenght = useraleatorio.length - 1;
    var mostrar = Math.round(Math.random() * (userlenght - 1));
    usuario = useraleatorio[mostrar];
    document.getElementById("user").placeholder =
      "Usuario Aleatorio: " + usuario;
  }
}
//Usando jquery:
function getToken() {
  $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth2/token", //como twitter no admite cors usamos un servicio
    method: "POST",
    //en ajax los headers se mandan juntos mo etán abajo
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      //ahora twitter nos pide encodear en base64 y para eso usamos la funcion btoa apikey:apisecretkey
      Authorization:
        "Basic " +
        btoa(
          "2kI3eRldkJAD65W8Ob1ZurJBI:WItsOqdllM2fE9swvS0kgjEcN2TtVqafSsMd2fyE5yA0qVFY8c"
        ),
    },
    //twitter nos pide que le pasemos grant:type y este se pasa como data
    data: {
      grant_type: "client_credentials",
    },
    success: function (response) {
      console.log(response);
      //guardamos el bearer (que no vence hasta que le de la baja)
      bearer = response.access_token;
    },
    error: function (req, status, err) {
      console.log(req, status, err);
    },
  });
}
function traerTweets() {
  //usuario = document.getElementById("user").value;
  //console.log(usuario);
  getuser();
  $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" +
      usuario,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + bearer,
    },
    dataType: "json",
    success: function (tuits) {
      console.log(tuits);
      let output = "";
      $.each(tuits, (index, tuit) => {
        output += `
                <div class="jumbotron jumbotron-fluid" id="${index}"  >
                  <div class="container"  >
                      <h1 class="display-4">${tuit.user.name}</h1>
                      <p class="lead">${tuit.text}</p>
                      <p>${tuit.created_at}</p>

                      <img style="width: 100%;" src="${tuit.user.profile_banner_url}">
                  </div>
                </div>
       <br> <br>
              `;
      });
      // console.log(output);
      $("#tweets").html(output);
      //console.log("#tweets");
    },
    error: function (req, status, err) {
      console.log(req, status, err);
      let output = "";
      output += `
            <div class="col-md-12">
              <div class="well text-center">
                <h5>No hay tuits para mostrar con los datos buscados</h5>
              </div>
            </div>
          `;
      $("#tweets").html(output);
    },
  });
}
