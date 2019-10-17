import React from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import Footer from './components/Footer';
import CartItems from './components/CartItems';
import AddItem from './components/AddItem';

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

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(item) {
		let cart = this.state.cartItems;

		let itemToAdd = {
			id: cart.length + 1,
			product: {
				id: item.product.id,
				name: item.product.name,
				priceInCents: item.product.priceInCents
			},
			quantity: item.quantity
		};

		cart.push(itemToAdd);
		this.setState({ cartItems: cart });
	}

	calculateTotal(items) {
		let total = 0;
		items.forEach(item => {
			total += item.product.priceInCents * item.quantity;
		});
		return total;
	}

	render() {
		return (
			<div>
				<CartHeader />
				<CartItems cartItems={this.state.cartItems} />
				<div className='container'>
					Total Price: $
					{(this.calculateTotal(this.state.cartItems) / 100).toFixed(2)}
				</div>
				<AddItem products={this.state.products} onSubmit={this.handleChange} />
				<Footer copyright='2019' />
			</div>
		);
	}
}

export default App;
