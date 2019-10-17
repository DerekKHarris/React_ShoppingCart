import React from 'react';

class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		let productSelected = {};
		this.props.products.forEach(item => {
			if (item.name === this.state.product) {
				productSelected = {
					id: item.id,
					name: item.name,
					priceInCents: item.priceInCents
				};
			}
		});

		let itemToAdd = {
			product: productSelected,
			quantity: Number(this.state.quantity)
		};
		this.props.onSubmit(itemToAdd);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		let productList = this.props.products;
		let productOptions = productList.map(item => {
			return (
				<option value={item.name} key={item.id}>
					{item.name}
				</option>
			);
		});

		return (
			<div className='container'>
				<form>
					<div className='form-group'>
						<div>
							<label>Quantity</label>
							<input
								type='text'
								className='form-control'
								name='quantity'
								onChange={event => this.handleChange(event)}
							/>
						</div>
						<div>
							<label>Products</label>
							<select
								className='form-control'
								name='product'
								onChange={event => this.handleChange(event)}
							>
								{productOptions}
							</select>
						</div>{' '}
						<button
							type='submit'
							className='btn btn-primary'
							onClick={this.handleSubmit}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddItem;
