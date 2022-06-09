import { useContext, Fragment } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
	Title,
	Separator,
	CheckoutLabels,
	CheckoutTotal,
	CheckoutContainer,
} from "./checkout.styles";

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<Title>Checkout</Title>
			<CheckoutLabels>
				<div>Product</div>
				<div>Description</div>
				<div>Quantity</div>
				<div>Price</div>
				<div>Remove</div>
			</CheckoutLabels>

			{ cartItems.map((cartItem) => (
				<Fragment key={ cartItem.id }>
					<Separator />
					<CheckoutItem cartItem={ cartItem } />
				</Fragment>
			)) }

			<CheckoutTotal>
				<div>Total:</div>
				<div className="checkout-count">${ cartTotal }</div>
			</CheckoutTotal>
		</CheckoutContainer>
	);
};

export default Checkout;
