function getdata(string) {
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
      let output = "";
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
