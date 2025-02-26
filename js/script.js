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