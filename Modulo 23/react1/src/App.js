import React from 'react';
// import './App.css';

function Avatar(props) {
    return (
        <div style={{ backgroundColor: '#FF0000', padding: 20, width: 150 }}>
            <img style={{ width: 50, height: 50 }} src={props.user.url} alt={props.user.name} />
            <br />
            <span>{props.user.name}</span>
        </div>
    );
}

function App() {
    let user = {
        url: "https://www.google.com.br/google.jpg",
        name: "Nichollas Nunes"
    };

    return <>
        <Avatar user={user} />
    </>;
}

export default App;