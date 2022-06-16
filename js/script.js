

// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Inserisco alert
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
let casualNumbers = [1,2,9,5,3];

alert( 'Ecco i numeri' +''+ casualNumbers);

console.log('casual numbers',casualNumbers);



 let sussesfulNumber = [];
 

setTimeout(numberGenerate,30000);

function numberGenerate () {
 let userArray = [];

 for( let i = 1; i <= 5; i++) {

 let userNumber =  parseInt(prompt('Inserisci il primo numero visto in precendenza'));
 
 userArray.push(userNumber);
 
}

console.log('userNumbers', userArray);

for(let i= 0; i < userArray.length; i++) {

    if(casualNumbers.includes(userArray[i])) {
        sussesfulNumber.push(userArray[i]); 
   
    } 
}
console.log('successfull', sussesfulNumber);
}


