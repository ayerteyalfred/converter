function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
  
    var url = "https://api.exchangerate-api.com/v4/latest/" + from;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var rate = data.rates[to];
        var result = amount * rate;
        document.getElementById("result").value = result.toFixed(2);
      })
      .catch(error => console.log(error));
  }


  const convert = document.getElementById("convert");
  
  convert.addEventListener("click", convertCurrency)
  