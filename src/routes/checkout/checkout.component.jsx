import { useContext, Fragment } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<div className="checkout-container">
			<h3>Checkout</h3>
			<div className="labels">
				<div>Product</div>
				<div>Description</div>
				<div>Quantity</div>
				<div>Price</div>
				<div>Remove</div>
			</div>

			{
				cartItems.map(cartItem =>
					<Fragment key={ cartItem.id }>
						<div className="separator"></div>
						<CheckoutItem cartItem={ cartItem } />
					</Fragment>
				)
			}

			<div className="checkout-total">
				<div>Total:</div>
				<div className="checkout-count">${ cartTotal }</div>
			</div>
		</div>
	)
}

export default Checkout;