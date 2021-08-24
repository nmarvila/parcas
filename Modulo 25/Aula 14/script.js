class Post extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.titulo}</h4>
                <p>{this.props.corpo}</p>
                <hr />
            </div>
        );
    }
}

class Aviso extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { id: 1, titulo: 'Titulo do post 1', corpo: 'Corpo do post 1' },
                { id: 2, titulo: 'Titulo do post 2', corpo: 'Corpo do post 2' },
                { id: 3, titulo: 'Titulo do post 3', corpo: 'Corpo do post 3' },
                { id: 4, titulo: 'Titulo do post 4', corpo: 'Corpo do post 4' },
                { id: 5, titulo: 'Titulo do post 5', corpo: 'Corpo do post 5' }
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.posts.map((item) =>
                    <Post key={item.id} titulo={item.titulo} corpo={item.corpo} />
                )}
            </div>
        );
    }

}

let elemento = (
    <div>
        <Aviso />
    </div>
);

ReactDOM.render(
    elemento,
    document.getElementById("app")
);