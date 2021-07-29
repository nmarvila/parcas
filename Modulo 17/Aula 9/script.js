// FOR LOOP
// FOR LOOP ARRAY

let carros = [ 'Ferrari', 'Fusca', 'Palio', 'Corolla', 'Lamborghini' ];

let html = '<ul>';

for(let i in carros) {
    html += '<li>'+ carros[i] +'</li>';
}

html += '</ul>';

document.getElementById("demo").innerHTML = html;