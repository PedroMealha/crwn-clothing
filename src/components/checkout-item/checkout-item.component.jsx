import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {

	const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);
	const { name, quantity, price, imageUrl } = cartItem;

	return (
		<div className="checkout-item">
			<img src={ imageUrl } alt={ name } />
			<div>{ name }</div>
			<div className="checkout-item-quantity">
				<span className="checkout-item-quantity-decrement" onClick={ () => removeItemToCart(cartItem) }>–</span>
				<span className="checkout-item-quantity-number">{ quantity ? quantity : 0 }</span>
				<span className="checkout-item-quantity-increment" onClick={ () => addItemToCart(cartItem) }>+</span>
			</div>
			<div>${ price }</div>
			<button className="checkout-item-remove" onClick={ () => clearItemFromCart(cartItem) }>&times;</button>
		</div>
	)
}

export default CheckoutItem;