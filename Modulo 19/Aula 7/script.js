function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);
    })
}

// USANDO A PROMISE
console.log("código antes!");

let temp = pegarTemperatura();

console.log("código durante!");

temp.then(function(resultado) {
    console.log("TEMPERATURA: "+resultado);
});
temp.catch(function(error){
    console.log("Eita, deu erro!");
});

console.log("código depois!");