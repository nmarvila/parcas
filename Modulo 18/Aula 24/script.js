let cartao = '1234123412341234';

let lastDigits = cartao.slice(0, 3);

let cartaoMascarado = lastDigits.padEnd(16, '*');

console.log('Este é o seu cartão? '+cartaoMascarado);