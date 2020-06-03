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
      console.log(response.data.Countries);
      let countriesall = response.data.Countries;
      let output = "";
      $.each(countriesall, (index, country) => {
        output += `
            <tr>
                        <th scope="row">${index}</th>
                        <td id="country">${country.Country}</td>
                        <td id="date">${country.Date}</td>
                        <td id="cases">${country.NewConfirmed}</td>
                        <td id="cases">${country.NewDeaths}</td>
                        <td id="cases">${country.NewRecovered}</td>
                        <td id="cases">${country.TotalConfirmed}</td>
                        <td id="cases">${country.TotalDeaths}</td>
                          <td id="cases">${country.TotalRecovered}</td>

                      </tr>
          `;
      });
      $("#tbody").html(output);
    });
}
getdatacovid();
