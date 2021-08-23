function Bemvindo(props) {
    return (
        <div>
            <h1>Seja Bem vindo(a)</h1>
            <h2>{props.nome} ( {props.idade} anos )</h2>
        </div>
    );
}

let elemento = (
    <div>
        <Bemvindo nome="Nichollas" idade="99" />

        <hr />

        <Bemvindo nome="Antônio" idade="40" />
    </div>
);

ReactDOM.render(
    elemento,
    document.getElementById("app")
);