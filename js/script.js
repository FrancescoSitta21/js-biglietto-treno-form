var generate = document.getElementById('bottoneUno');
var annulla = document.getElementById('bottoneDue');
var nome = document.getElementById('nomecognome');
var chilo = document.getElementById('chilometri');

//biglietto
var biglietto = document.getElementById('nome-biglietto');

//Chilomerti
var valorechilometri;

//bottoni
generate.addEventListener('click',
  function() {
    valorechilometri = chilo.value;


    biglietto.innerHTML = chilo.value;
  }
);

annulla.addEventListener('click',
function() {
  nomecognome.value = '';
  nomebiglietto.innerHTML = '';

  chilo.value = '';
}
)
