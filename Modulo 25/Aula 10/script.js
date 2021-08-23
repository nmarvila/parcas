class Relogio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentDidUpdate() {
        console.log("COMPONENTE FOI ATUALIZADO!");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    shouldComponentUpdate() {

    }

    render() {
        return (
            <div>
                <h1>Horário:</h1>
                <h2>{this.state.hora}</h2>
            </div>
        );
    }

}


let elemento = (
    <div>
        <Relogio />
    </div>
);

ReactDOM.render(
    elemento,
    document.getElementById("app")
);