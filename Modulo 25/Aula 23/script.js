class Feed extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {this.props.posts.map((item, index) =>
                    <Post key={item.id} author={item.author} authorComment={item.authorComment} likes={item.likes} liked={item.liked} comments={item.comments} photo={item.photo} like={this.props.like} comment={this.props.comment} index={index} />
                )}
            </div>
        );
    }
}

class Post extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', border: '2px solid #000', margin: '5px' }}>
                <div style={{ margin: '5px' }}>
                    <img style={{ maxWidth: '600px', height: '100%' }} src={this.props.photo}></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ margin: '5px' }}><strong>{this.props.author}</strong> {this.props.authorComment}</p>
                    {this.props.comments.map((item, index) =>
                        <p key={index} style={{ margin: '5px' }}><strong>{item.author}</strong> {item.comment}</p>
                    )}
                    {this.props.liked ? <div style={{ margin: '5px', fontSize: '50px', cursor: 'pointer' }} onClick={(e) => { this.props.like(this.props.index) }}>&#9733;</div> : <div style={{ margin: '5px', fontSize: '50px', cursor: 'pointer' }} onClick={(e) => { this.props.like(this.props.index) }}>&#9734;</div>}
                    <div style={{ margin: '5px', fontWeight: 'bold' }}>{this.props.likes} curtidas</div>
                    <div style={{ margin: '5px', fontWeight: 'bold' }}><input type="text" placeholder="Adicione um comentário..." onKeyUp={(e) => this.props.comment(e, this.props.index)}></input></div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    id: 1,
                    author: 'Nichollas',
                    authorComment: 'Bela foto',
                    likes: 100,
                    liked: false,
                    comments: [{
                        author: 'Paulo',
                        comment: 'Muito bela'
                    }, {
                        author: 'Cláudia',
                        comment: 'Belíssima'
                    }, {
                        author: 'Sávio',
                        comment: 'Amei'
                    }],
                    photo: './pordosol.jpg'
                }, {
                    id: 2,
                    author: 'Nichollas',
                    authorComment: 'Bela foto',
                    likes: 100,
                    liked: false,
                    comments: [{
                        author: 'Paulo',
                        comment: 'Muito bela'
                    }, {
                        author: 'Cláudia',
                        comment: 'Belíssima'
                    }, {
                        author: 'Sávio',
                        comment: 'Amei'
                    }],
                    photo: './pordosol.jpg'
                }
            ]
        };

        this.curtir = this.curtir.bind(this);
        this.comentar = this.comentar.bind(this);
    }

    curtir(post) {
        let newState = this.state.posts;

        if (!newState[post].liked) {
            newState[post].liked = true;
            newState[post].likes += 1;
        } else {
            newState[post].liked = false;
            newState[post].likes -= 1;
        }

        this.setState({ posts: newState });
    }

    comentar(post, index) {
        if (post.keyCode == '13') {
            let newState = this.state.posts;
            newState[index].comments.push({ author: 'Nichollas', comment: post.target.value });
            this.setState({ posts: newState });
            post.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <Feed posts={this.state.posts} like={this.curtir} comment={this.comentar}></Feed>
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);