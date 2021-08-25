class ToDoList extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="2">Sporting Goods</th>
                        </tr>
                        <ToDo name={this.props.products[0].name} price={this.props.products[0].price} stock={this.props.products[0].stock} visible={this.props.products[0].visible} />
                        <ToDo name={this.props.products[1].name} price={this.props.products[1].price} stock={this.props.products[1].stock} visible={this.props.products[1].visible} />
                        <ToDo name={this.props.products[2].name} price={this.props.products[2].price} stock={this.props.products[2].stock} visible={this.props.products[2].visible} />
                        <tr>
                            <th colSpan="2">Electronics</th>
                        </tr>
                        <ToDo name={this.props.products[3].name} price={this.props.products[3].price} stock={this.props.products[3].stock} visible={this.props.products[3].visible} />
                        <ToDo name={this.props.products[4].name} price={this.props.products[4].price} stock={this.props.products[4].stock} visible={this.props.products[4].visible} />
                        <ToDo name={this.props.products[5].name} price={this.props.products[5].price} stock={this.props.products[5].stock} visible={this.props.products[5].visible} />
                    </tbody>
                </table>
            </div>
        );
    }
}

class ToDo extends React.Component {
    render() {
        return (
            <tr style={{ display: this.props.visible ? 'table-row' : 'none' }}>
                <td style={{ color: this.props.stock > 0 ? '#000' : '#F00' }}>{this.props.name}</td>
                <td>${this.props.price}</td>
            </tr>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'Football',
                    price: 49.99,
                    category: 'Sporting Goods',
                    stock: 100,
                    visible: true
                }, {
                    name: 'Baseball',
                    price: 9.99,
                    category: 'Sporting Goods',
                    stock: 100,
                    visible: true
                }, {
                    name: 'Basketball',
                    price: 29.99,
                    category: 'Sporting Goods',
                    stock: 0,
                    visible: true
                }, {
                    name: 'iPod Touch',
                    price: 99.99,
                    category: 'Electronics',
                    stock: 100,
                    visible: true
                }, {
                    name: 'iPhone 5',
                    price: 399.99,
                    category: 'Electronics',
                    stock: 0,
                    visible: true
                }, {
                    name: 'Nexus 7',
                    price: 199.99,
                    category: 'Electronics',
                    stock: 100,
                    visible: true
                }
            ],
            checkbox: false,
            search: ''
        };
    }

    handleChange(param) {
        let newProducts = this.state.products;

        if (typeof param == "boolean") {
            if (this.state.search == '') {
                if (param) {
                    newProducts.map((item) => {
                        if (item.stock <= 0) {
                            item.visible = false;
                        }
                    });
                    this.setState({ products: newProducts });
                    this.setState({ checkbox: true });
                } else {
                    newProducts.map((item) => {
                        if (item.stock <= 0) {
                            item.visible = true;
                        }
                    });
                    this.setState({ products: newProducts });
                    this.setState({ checkbox: false });
                }
            } else {
                if (param) {
                    newProducts.map((item) => {
                        if (item.stock <= 0 && item.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                            item.visible = false;
                        }
                    });
                    this.setState({ products: newProducts });
                    this.setState({ checkbox: true });
                } else {
                    newProducts.map((item) => {
                        if (item.stock <= 0 && item.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                            item.visible = true;
                        }
                    });
                    this.setState({ products: newProducts });
                    this.setState({ checkbox: false });
                }
            }
        } else {
            newProducts.map((item) => {
                if (item.name.toLowerCase().includes(param.toLowerCase())) {
                    item.visible = true;
                } else {
                    item.visible = false;
                }
            });

            this.setState({ search: param });
            this.setState({ products: newProducts });
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." onChange={(e) => { this.handleChange(e.target.value) }} /><br />
                <input type="checkbox" onChange={(e) => { this.handleChange(e.target.checked) }} />Only show products in stock<br />
                <ToDoList products={this.state.products}></ToDoList>
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);