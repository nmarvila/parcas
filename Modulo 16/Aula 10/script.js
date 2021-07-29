function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

function somar(x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(10, 15);

console.log(resultado);