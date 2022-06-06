import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { Link } from "react-router-dom";

import CartItem from "../cart-item/cart-itemcomponent";
import Button from "../button/button.component";

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{
					cartItems.map(item => <CartItem key={ item.id } cartItem={ item } />)
				}
			</div>
			<Link to='/checkout'><Button onClick={ toggleIsCartOpen }>CHECKOUT</Button></Link>
		</div>
	)
}

export default CartDropdown;