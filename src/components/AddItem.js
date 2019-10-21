import React from 'react';

class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		let productSelected = this.props.products.filter(
			item => item.name === this.state.product
		);
		this.props.addItemToCart(productSelected[0], Number(this.state.quantity));
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	createProductOptions() {
		return this.props.products.map(item => {
			return (
				<option value={item.name} key={item.id}>
					{item.name}
				</option>
			);
		});
	}

	render() {
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
								{this.createProductOptions()}
							</select>
						</div>
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
