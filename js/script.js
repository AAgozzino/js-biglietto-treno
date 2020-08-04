// chiedere il numero di km
var kilometri = parseInt(prompt("Inserisci quanti kilometri vuoi percorrere"));

// chiedere l'età del passeggero
var userAge = parseInt(prompt("Inserisci l'età del passeggero"));

// calcolare il prezzo totale del viaggio (0.21 €/km)
var ticket = kilometri * 0.21;
console.log(ticket);

// se età < 18 sconto 20%
// se età >= 65 sconto 40%
// altrimenti prezzo base
if (userAge < 18) {
  var ticketPrice = ticket - (ticket / 5);
  document.getElementById('discount').innerHTML = "20%";
} else if (userAge >= 65) {
  var ticketPrice = ticket - ((ticket / 5) * 2);
  document.getElementById('discount').innerHTML = "40%";
} else {
  var ticketPrice = ticket;
  document.getElementById('hide').style.display = "none";
}
console.log(ticketPrice);

// stampare il prezzo del biglietto
document.getElementById("kilometraggio").innerHTML = kilometri
document.getElementById('price').innerHTML = ticketPrice.toFixed(2);
