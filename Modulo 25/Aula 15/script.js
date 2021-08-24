class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'teste@hotmail.com',
            texto: 'Algum texto qualquer, etc, etc...',
            sexo: 'feminino'
        };
    }

    render() {
        return (
            <form method="POST">
                <input type="email" name="email" value={this.state.email.toUpperCase()} /><br />
                <input type="email" name="senha" /><br />

                <textarea name="corpo" value={this.state.texto}></textarea>

                Sexo:
                <select name="sexo" value={this.state.sexo}>
                    <option></option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>

                <input type="submit" value="Entrar" />
            </form>
        );
    }

}

let elemento = (
    <div>
        <Login />
    </div>
);

ReactDOM.render(
    elemento,
    document.getElementById("app")
);