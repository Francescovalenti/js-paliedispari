// Funzione per generare un numero casuale da 1 a 6
function generaNumeroRandom() {
    return Math.floor(Math.random() * 6) + 1;
  }
  // Funzione per determinare se un numero e pari
  function isPari(numero) {
    return numero % 2 === 0;
  }
  // esempi di utilizzo
  const sceltaUtente = prompt("Scegli: pari o dispari?");
  const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 6:"));
  const numeroComputer = generaNumeroRandom();
  const somma = numeroUtente + numeroComputer;
  
  console.log("Numero utente:", numeroUtente);
  console.log("Numero computer:", numeroComputer);
  console.log("Somma:", somma);
  //scelte in base ai numeri scritti in maniera precedente e quello del computer
 
  if (
    (sceltaUtente === "pari" && isPari(somma)) ||
    (sceltaUtente === "dispari" && !isPari(somma))
  ) {
    alert("Hai vinto!");
  } else {
    alert("Hai perso!");

    
  }
