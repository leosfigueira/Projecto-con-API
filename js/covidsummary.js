function getdatacovid() {
  let countryselected = $("#idpais").val();
  axios
    .get(
      "https://api.covid19api.com/summary"
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
      //console.log(output2);
      $("#thead").html(output2);
      $.each(countriesall, (index, country) => {
        output += `
            <tr>
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
      //agrego order
      $("th").click(function () {
        var table = $(this).parents("table").eq(0);
        var rows = table
          .find("tr:gt(0)")
          .toArray()
          .sort(comparer($(this).index()));
        this.asc = !this.asc;
        if (!this.asc) {
          rows = rows.reverse();
        }
        for (var i = 0; i < rows.length; i++) {
          table.append(rows[i]);
        }
        setIcon($(this), this.asc);
      });
      function comparer(index) {
        return function (a, b) {
          var valA = getCellValue(a, index),
            valB = getCellValue(b, index);
          return $.isNumeric(valA) && $.isNumeric(valB)
            ? valA - valB
            : valA.localeCompare(valB);
        };
      }
      function getCellValue(row, index) {
        return $(row).children("td").eq(index).html();
      }
      function setIcon(element, asc) {
        $("th").each(function (index) {
          $(this).removeClass("sorting");
          $(this).removeClass("asc");
          $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
      }
    });
    document.getElementById("menu1").style.height= "120%";
}
//getdatacovid();
function getdata2(string) {
  let output = "";
  let output2 = "";
  $("#tbody").html(output);
  $("#thead").html(output2);
  console.log(string);
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
      console.log(response);
      let countries = response.data;
      let totalcasosdeldia = 0;
      let diaanterior = 0;
      let casosdeldia = 0;
      output2 += `
      <tr>
      <th scope="col">Día nbr</th>
      <th scope="col">País</th>
      <th scope="col">Fecha</th>
      <th scope="col">Casos Confirmados del dia</th>
      <th scope="col">Casos Confirmados</th>
      <th scope="col">Casos Activos</th>
      <th scope="col">Casos Recuperados</th>
      <th scope="col">Fallecidos</th>
  </tr>
  `;
      console.log(output2);
      $("#thead").html(output2);
      $.each(countries, (index, country) => {
        totalcasosdeldia = country.Confirmed;
        //console.log("total de casos confirmados nuevos " + totalcasosdeldia);
        //console.log("antes de validar casosdeldiaanterior  " + diaanterior);
        //console.log("antes de validar casosdeldia  " + casosdeldia);
        if (diaanterior != totalcasosdeldia) {
          casosdeldia = totalcasosdeldia - diaanterior;
        }
        diaanterior = totalcasosdeldia;
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
      });
      $("#tbody").html(output);
      //agrego order
      $("th").click(function ordenar() {
        var table = $(this).parents("table").eq(0);
        var rows = table
          .find("tr:gt(0)")
          .toArray()
          .sort(comparer($(this).index()));
        this.asc = !this.asc;
        if (!this.asc) {
          rows = rows.reverse();
        }
        for (var i = 0; i < rows.length; i++) {
          table.append(rows[i]);
        }
        setIcon($(this), this.asc);
      });
      function comparer(index) {
        return function (a, b) {
          var valA = getCellValue(a, index),
            valB = getCellValue(b, index);
          return $.isNumeric(valA) && $.isNumeric(valB)
            ? valA - valB
            : valA.localeCompare(valB);
        };
      }
      function getCellValue(row, index) {
        return $(row).children("td").eq(index).html();
      }
      function setIcon(element, asc) {
        $("th").each(function (index) {
          $(this).removeClass("sorting");
          $(this).removeClass("asc");
          $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
      }
    });
    document.getElementById("menu1").style.height= "120%";
}
function ver(parametro) {
  console.log(parametro);
  //window.location="covid19.html";
  getdata2(parametro);
}
