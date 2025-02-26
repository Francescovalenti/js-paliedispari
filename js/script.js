//impostiamo la funzione per vedere se e la parola e palindroma



function isPalindroma(parola) {
    let parolaInversa = "";
    for (let i = parola.length - 1; i >= 0; i--) {
      parolaInversa += parola[i];
    }
    return parola === parolaInversa;
  }
  // chiediamo all'utente di inserire una parola per vedere se e palindroma
  const parolaUtente = prompt("Inserisci una parola:");
  if (isPalindroma(parolaUtente)) {
    alert("La parola è palindroma.");
  } else {
    alert("La parola non è palindroma.");
  }
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
