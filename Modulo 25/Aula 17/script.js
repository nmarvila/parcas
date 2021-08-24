class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formValues: {
                email: 'teste@hotmail.com',
                texto: 'Algum texto...',
                sexo: 'feminino'
            }
        };

        this.inputTrocou = this.inputTrocou.bind(this);
    }

    inputTrocou(e) {
        let formValues = this.state.formValues;
        formValues[e.target.name] = e.target.value;
        this.setState({ formValues });
    }

    render() {
        return (
            <form method="POST">
                <input type="email" name="email" value={this.state.formValues.email} onChange={this.inputTrocou} /><br />
                <input type="email" name="senha" /><br />

                <textarea name="corpo" value={this.state.formValues.texto}></textarea><br />

                Sexo:
                <select name="sexo" value={this.state.formValues.sexo} onChange={this.inputTrocou}>
                    <option></option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select><br />

                <input type="submit" value="Entrar" /><br />


                Sexo: {this.state.formValues.sexo}<br />
                E-mail: {this.state.formValues.email}
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