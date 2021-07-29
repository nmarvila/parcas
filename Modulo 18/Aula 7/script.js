let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.every(function(item){
    return (item > 10)? true : false;
});

let res = lista2;

console.log(res);