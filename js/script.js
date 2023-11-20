// PROMPT KM E ETA 
let km = prompt("inserire kilometri che si desidera percorrere");
let eta = prompt("inserire la propria eta'");
// VARIABILI PREZZO VIAGGI E TOTALE 
let prezzo_viaggio = 0.21;
let prezzo_totale = prezzo_viaggio * km;

// SCONTO MINORI 
if(eta<18){
    prezzo_totale -= prezzo_totale * 0.20;
    let prezzo_scontato = prezzo_totale.toFixed(2);
    console.log(prezzo_scontato);
    // SCONTO OVER 65 
} else if(eta > 65){
    prezzo_totale -= prezzo_totale * 0.40;
    let prezzo_scontato = prezzo_totale.toFixed(2);
    console.log(prezzo_scontato);
} else {
    console.log(prezzo_totale);
}