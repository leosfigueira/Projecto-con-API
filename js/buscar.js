function remove() {
  localStorage.clear();
  let output = "";
  $("#demo2").html(output);
  $("#ultimasbus").html(output);
}
function validatefield() {
  let nombre = $("#idnombre").val();
  if (nombre == "") {
    alert("ingrese un nombre");
    document.getElementById("idbuscar").focus();
    return false;
  }
  Capturar();
}
function displayb() {
  document.getElementById("busquedas").style.display = "block";
}
function ocultarb() {
  document.getElementById("busquedas").style.display = "none";
}
function checkStorage() {
  var x = localStorage.length;
  // console.log(x)
  if (x > 8) {
    while (x > 8) {
      f = localStorage.key(0); //obtengo el pirmer valor
      localStorage.removeItem(f); //elimino el primer valor
      //f = localStorage.key(x-1); //obtener el ultimo valor
      //console.log("key value",f); //mostrar el ultimo valor
      //t= localStorage.getItem(f); //mostrar el ultimo valor
      //console.log("valor a borrar",t);//mostrar el ultimo valor
      //localStorage.removeItem(f); //eliminar el ultimo valor
      x = localStorage.length;
    }
  }
  //console.log(localStorage.length)
  //console.log('checkStorage complete');
}
function Capturar() {
  //checkStorage();
  var x = localStorage.length;
  //console.log("x",x);
  let output = "";
  let output2 = "";
  let nombre = $("#idnombre").val();
  if (nombre != "") {
    localStorage.setItem(localStorage.length, nombre);
  }
  if ((x = 0)) {
    //console.log('fallo');
    return false;
  } else {
    for (i = 0; i < localStorage.length; i++) {
      // console.log("i",i);
      f = localStorage.key(i);
      // console.log("f",f);
      t = localStorage.getItem(f);
      // console.log("t",t);
      output += `
                      <h4>Ultimas Busquedas</h4>
                        <option value="${t}" label="Busqueda numero: ${f}">
                        `;
      output2 += `
                          <div class="col-md-3"  style="display:block" >
                            <div class="well text-center"  >
                              <p><strong>${t} </strong> es la busqueda numero: ${f}</p>
                            </div>
                          </div>
                        `;
      $("#ultimasbus").html(output);
      $("#demo2").html(output2);
    }
  }
}
window.onload = Capturar();
