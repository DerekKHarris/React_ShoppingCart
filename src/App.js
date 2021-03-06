import React from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import Footer from './components/Footer';
import CartItems from './components/CartItems';
import AddItem from './components/AddItem';
import CartTotal from './components/CartTotal';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [
				{ id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
				{ id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
				{ id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
				{ id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
				{ id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
				{ id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
				{ id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
				{ id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
				{ id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
			],
			cartItems: [
				{
					id: 1,
					product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
					quantity: 1
				},
				{
					id: 2,
					product: {
						id: 41,
						name: 'Heavy Duty Concrete Plate',
						priceInCents: 499
					},
					quantity: 2
				},
				{
					id: 3,
					product: {
						id: 42,
						name: 'Intelligent Paper Knife',
						priceInCents: 1999
					},
					quantity: 1
				}
			]
		};

		this.addItemToCart = this.addItemToCart.bind(this);
	}

	addItemToCart(item, quantity) {
		const { cartItems } = this.state;

		const ids = cartItems.map(product => product.id);
		const max_id = ids.length > 0 ? Math.max(...ids) : 0;

		let itemToAdd = {
			id: max_id + 1,
			product: item,
			quantity: quantity
		};

		cartItems.push(itemToAdd);
		this.setState({ cartItems });
	}

	render() {
		return (
			<div>
				<CartHeader />
				<CartItems cartItems={this.state.cartItems} />
				<CartTotal cartItems={this.state.cartItems} />
				<AddItem
					products={this.state.products}
					addItemToCart={this.addItemToCart}
				/>
				<Footer copyright='2019' />
			</div>
		);
	}
}

export default App;
