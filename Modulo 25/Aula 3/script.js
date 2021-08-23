let nome = 'Antônio';
let sobrenome = 'Nunes';

let titulo = <h2>{nome}</h2>;

let elemento = (
    <div>
        {titulo}
        <p>{sobrenome}</p>
        <small>Seja bem-vindo(a)</small>
    </div>
);

ReactDOM.render(
    elemento,
    document.getElementById("app")
);