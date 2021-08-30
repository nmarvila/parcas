import React, { Component } from 'react';
import { Produto } from '../../components/Cart/Produto';

export class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                { name: 'Teclado', stock: 1, price: 28.0 },
                { name: 'Mouse', stock: 5, price: 36.0 },
                { name: 'Monitor', stock: 3, price: 299.99 },
                { name: 'CPU', stock: 2, price: 1099.0 }
            ],
            cart: [],
            total: 0
        };

        this.add = this.add.bind(this);
    }

    add(index) {
        if (this.state.products[index].stock > 0) {
            let newProducts = this.state.products;
            let newCart = this.state.cart;

            newProducts[index].stock -= 1;
            if (!newCart[index]) {
                newCart[index] = { index: index, qt: 1 };
            } else {
                newCart[index].qt += 1;
            }

            this.setState({ products: newProducts, cart: newCart, total: 0 });
        }
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '3 1 0%' }}>
                    {this.state.products.map((item, index) =>
                        <Produto name={item.name} stock={item.stock} price={item.price} add={this.add} index={index}></Produto>
                    )}
                </div>
                {this.state.cart.length > 0 &&
                    <div style={{ flex: '1 1 0%', flexDirection: 'column' }}>
                        {this.state.cart.map((item) => {
                            return <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <div style={{ fontWeight: 'bold' }}>{this.state.products[item.index].name}</div>
                                    <div>R$ {(this.state.products[item.index].price * item.qt).toFixed(2)}</div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <small style={{ alignSelf: 'start' }}>(Qt: {item.qt})</small>
                                </div>
                            </div>
                        })}
                        <div>
                            <hr />
                        </div>
                        <div style={{ marginTop: 10 }}>
                            {this.state.cart.map((item) => {
                                this.state.total += this.state.products[item.index].price * item.qt;
                            })}
                            <p>Total: R$ {(this.state.total).toFixed(2)}</p>
                        </div>
                    </div>
                }
            </div>
        );
    }

}