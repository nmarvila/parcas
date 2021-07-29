function adicionar(nomes, ...novosNomes) {

    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;

}

let nomes = ["Nichollas", "Paulo"];

let outros = adicionar(nomes, "Antonio", "Maria", "José");

console.log(outros);