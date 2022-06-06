import { useContext, Fragment } from "react";
import { CartContext } from "../../contexts/cart.context";

import './checkout.styles.scss';

const Checkout = () => {
	const { cartItems, handleCartItem, totalCount, removeItemFromCart } = useContext(CartContext);

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
				cartItems.map(item => {
					const { id, name, quantity, price, imageUrl } = item;

					const addProductToCart = () => handleCartItem(item, 1);
					const removeProductToCart = () => handleCartItem(item, -1);
					const removeProductFromCart = () => removeItemFromCart(item);

					return (
						<Fragment key={ id }>
							<div className="separator"></div>
							<div className="checkout-item">
								<img src={ imageUrl } alt={ name } />
								<div>{ name }</div>
								<div className="checkout-item-quantity">
									<span className="checkout-item-quantity-decrement" onClick={ removeProductToCart }>–</span>
									<span className="checkout-item-quantity-number">{ quantity ? quantity : 0 }</span>
									<span className="checkout-item-quantity-increment" onClick={ addProductToCart }>+</span>
								</div>
								<div>${ price }</div>
								<button className="checkout-item-remove" onClick={ removeProductFromCart }>&times;</button>
							</div>
						</Fragment>
					)
				})
			}

			<div className="checkout-total">
				<div>Total:</div>
				<div className="checkout-count">${ totalCount }</div>
			</div>
		</div>
	)
}

export default Checkout;