

// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Inserisco alert



 let casualNumbers = [3,9,5,1,6];

alert( 'Ecco i numeri' +''+ casualNumbers);



 

setTimeout(numberGenerate,30000);

function numberGenerate () {
    parseInt(prompt('Inserisci il primo numero visto in precendenza'));
    parseInt(prompt('Inserisci il secondo numero visto in precendenza'));
    parseInt(prompt('Inserisci il terzo numero visto in precendenza'));
    parseInt(prompt('Inserisci il quarto numero visto in precendenza'));
    parseInt(prompt('Inserisci il quinto numero visto in precendenza'));

    
}