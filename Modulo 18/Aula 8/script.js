let lista = [
    {id:1, nome:'Nichollas', sobrenome:'Nunes'},
    {id:2, nome:'Paulo', sobrenome:'XYZ'},
    {id:3, nome:'Fulano', sobrenome:'Da Silva'}
];

let pessoa = lista.findIndex(function(item){
    return (item.id == 3) ? true : false;
});

let res = pessoa;

console.log(res);