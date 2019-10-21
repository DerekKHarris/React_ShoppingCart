import React from 'react';

class CartTotal extends React.Component {
	calculateTotal(items) {
		return items.reduce(
			(total, current) =>
				total + current.product.priceInCents * current.quantity,
			0
		);
	}

	render() {
		return (
			<div className='container'>
				<p>
					Total Price: $
					{(this.calculateTotal(this.props.cartItems) / 100).toFixed(2)}
				</p>
			</div>
		);
	}
}

export default CartTotal;
