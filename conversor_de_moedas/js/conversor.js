// Selecionar os elementos do DOM
let inputValue = document.getElementById("value");
let selectFromCoin = document.getElementById("fromCoin");
let selectToCoin = document.getElementById("toCoin");
let button = document.getElementById("btnConvert");

//console.log(inputValue,selectFromCoin,selectToCoin,button)
button.addEventListener("click", function () {
  let inputValueContent = parseFloat(inputValue.value);
  let selectFromCoinValue = selectFromCoin.value;
  let selectToCoinValue = selectToCoin.value;

  if (selectFromCoinValue == "dollar" && selectToCoinValue == "real") {
    let result = convertCoin(inputValueContent, 5.62);
    alert(`R$ ${result}`);
  } else if (selectFromCoinValue == "real" && selectToCoinValue == "dollar") {
    let result = convertCoin(inputValueContent, 5.62, false);
    alert(`USD$ ${result}`);
  }
});

function convertCoin(value, rate, favorableRate = true) {
  if (favorableRate) {
    return value * rate;
  }
  return value / rate;
}
