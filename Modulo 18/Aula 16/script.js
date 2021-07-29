let pessoa = {
    nome: 'Nichollas',
    sobrenome: 'Nunes',
    idade: 90,
    social:{
        facebook:'nichollas',
        instagram:'nichollas'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

let { nome, sobrenome, idade = 0 } = pessoa;

console.log(nome, sobrenome, idade);