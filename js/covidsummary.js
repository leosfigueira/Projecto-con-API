function getdatacovid() {
  let countryselected = $("#idpais").val();
  axios
    .get("https://api.covid19api.com/summary"
      //"https://api.covid19api.com/countries"
      //"https://api.covid19api.com/all"
      // "https://api.covid19api.com/dayone/country/" +
      // countryselected +
      //"/status/confirmed"
    )
    .then((response) => {
      document.getElementById("respuesta").style.display = "block";
      // let cases = response.data[0].Cases;
      //console.log(response.data.Countries);
      let countriesall = response.data.Countries;
      let output = "";
      let output2 = "";
      output2 += `
         <tr>
          <th scope="col">#</th>
          <th scope="col">País</th>
          <th scope="col">Fecha</th>
          <th scope="col">Nuevos Casos Confirmados</th>
          <th scope="col">Nuevas muertes</th>
          <th scope="col">Nuevos Recuperados</th>
          <th scope="col">Total de confirmados</th>
          <th scope="col">Total de fallecidos</th>
          <th scope="col">Total de recuperados</th>
      </tr>
  
  `;
  console.log(output2);

  $("#thead").html(output2);

      $.each(countriesall, (index, country) => {
        output += `
            <tr>
                        <th scope="row">${index}</th> 
                        <td onclick="ver('${country.Country}')" id="pais" value="${country.Country}">${country.Country} </td> 
                        <td id="date">${country.Date}</td>
                        <td id="cases">${country.NewConfirmed}</td>
                        <td id="cases">${country.NewDeaths}</td>
                        <td id="cases">${country.NewRecovered}</td>
                        <td id="cases">${country.TotalConfirmed}</td>
                        <td id="cases">${country.TotalDeaths}</td>
                          <td id="cases">${country.TotalRecovered}</td>

                      </tr>
          `;
         // console.log(pais.value);
      });
      $("#tbody").html(output);
    });
}
//getdatacovid();

function getdata2(string) {
  let output = "";
      let output2 = "";
  $("#tbody").html(output);
  $("#thead").html(output2);
  console.log(string);
  let countryselected = string;//$("#idpais").val();
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
      console.log(response);
      let countries = response.data;
      
      output2 += `
      <tr>
      <th scope="col">#</th>
      <th scope="col">País</th>
      <th scope="col">Fecha</th>
      <th scope="col">Casos Confirmados</th>
      <th scope="col">Casos Activos</th>
      <th scope="col">Casos Recuperados</th>
      <th scope="col">Fallecidos</th>
  </tr>
  
  `;
  console.log(output2);

  $("#thead").html(output2);

      $.each(countries, (index, country) => {
          output += `
            <tr>
                        <td scope="row">${index}</td>
                        <td id="country">${country.Country}</td>
                        <td id="date">${country.Date}</td>
                        <td id="cases">${country.Confirmed}</td>
                        <td id="cases">${country.Active}</td>
                        <td id="cases">${country.Recovered}</td>
                        <td id="cases">${country.Deaths}</td>
                      </tr>
          `;
      });
      $("#tbody").html(output);
    });
}

function ver(parametro){
  console.log(parametro);
  
  //window.location="covid19.html";
  getdata2(parametro);
  
}
