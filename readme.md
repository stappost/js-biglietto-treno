Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) in console.log()

PROBLEMA
1 - permettere all'utente di inserire i kilometri da percorrere
2 - permettere all'utente di inserire la sua età
3 - definire variabile prezzo_viaggio con il prezzo del biglietto al km
4 - definire variabile prezzo_totale composta da  prezzo_viaggio * km
5.a - SE eta < 18:
    6 - allora applicare sconto del 20%
    7 - arrotondare prezzo scontato a 2 cifre decimali
    8 - mostrare prezzo scontato
5.b - ALTRIMENTI SE eta > 65 
    9 - allora applicare sconto del 20%
    10 - arrotondare prezzo scontato a 2 cifre decimali
    11 - mostrare prezzo scontato
5.c - ALTRIMENTI 
    12 - mostrare prezzo totale