
function getcountries() {
  axios.get("https://api.covid19api.com/countries").then((response) => {
    //console.log(response.data);
    countries = response.data;
    output0 = "";
    $.each(countries, (index, country) => {
      if(country.Country=="Argentina") {
        output0 += `         
                    <option selected value="${country.Country}">${country.Country}</option>
          `;
      }
      output0 += `         
                    <option value="${country.Country}">${country.Country}</option>
          `;
      
    });
    $("#idpais").html(output0);
  });
}
getcountries();
function getdata(string) {
  //console.log(string);
  let countryselected = string; //$("#idpais").val();
  axios
    .get(
      "https://api.covid19api.com/total/country/" + countryselected + ""
      //"https://api.covid19api.com/countries"
      //"https://api.covid19api.com/all"
      // "https://api.covid19api.com/dayone/country/" +
      // countryselected +
      //"/status/confirmed"
    )
    .then((response) => {
      document.getElementById("respuesta").style.display = "block";
      // let cases = response.data[0].Cases;
    //  console.log(response);
      let countries = response.data;
      let output = "";
      let totalcasosdeldia = 0;
      let diaanterior = 0;
      let casosdeldia = 0;
      var dia = 0;
      $.each(countries, (index, country) => {
        totalcasosdeldia = country.Confirmed;
        //console.log("total de casos confirmados nuevos " + totalcasosdeldia);
        //console.log("antes de validar casosdeldiaanterior  " + diaanterior);
        //console.log("antes de validar casosdeldia  " + casosdeldia);
        if (diaanterior != totalcasosdeldia) {
          casosdeldia = totalcasosdeldia - diaanterior;
        }
        diaanterior = totalcasosdeldia;
        //console.log("casos confirmados guardados del dia  " + totalcasosdeldia);
        //console.log("casosdeldiaanterior  " + diaanterior);
        //console.log("casosdeldia  " + casosdeldia);
        output += `
            <tr>
                        <td scope="row">${index}</td>
                        <td id="country">${country.Country}</td>
                        <td id="date">${country.Date}</td>
                        <td id="cases">${casosdeldia}</td>
                        <td id="cases">${country.Confirmed}</td>
                        <td id="cases">${country.Active}</td>
                        <td id="cases">${country.Recovered}</td>
                        <td id="cases">${country.Deaths}</td>
                      </tr>
          `;
        // cal(dia1,casosconfirmed);
      });
      $("#tbody").html(output);
    });
    document.getElementById("menu1").style.height= "120%";
}
