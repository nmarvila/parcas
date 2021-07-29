let pessoa = {
    nome: 'Nichollas',
    idade: 90,
    social:{
        facebook:'nichollas',
        instagram:{
            url:'@nichollas',
            seguidores:1000
        }
    }
};

function pegarNomeCompleto({nome, sobrenome = 'Silva', social:{instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome} (Siga em ${instagram})`;
}

console.log(pegarNomeCompleto(pessoa));
