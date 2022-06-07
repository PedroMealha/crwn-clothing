import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-itemcomponent";
import Button from "../button/button.component";

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
	
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	
	const navigate = useNavigate();

	const goToCheckoutHandler = () => navigate('/checkout');

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{
					cartItems.map(item => <CartItem key={ item.id } cartItem={ item } />)
				}
			</div>
			<Button onClick={ () => { toggleIsCartOpen(); goToCheckoutHandler(); } }>CHECKOUT</Button>
		</div>
	)
}

export default CartDropdown;