// piccolo script password
const passKey = "facile";

for (let i = 0; i < 3; i++) {
  let inserisci = prompt("Immetti password:");
  if (inserisci === passKey) {
    alert("Bravo hai trovato la password");
    break;
  } else if (i === 2) {
    alert("Riprova tra 10min");
  } else alert("Riprova");
}
