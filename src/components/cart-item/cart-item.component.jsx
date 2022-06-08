import { CartItemContainer, BackgroundImage, Details } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<CartItemContainer>
			<BackgroundImage src={ imageUrl } alt={ name } />
			<Details>
				<span className="name">{ name }</span>
				<span className="price">{ quantity } x ${ price }</span>
			</Details>
		</CartItemContainer>
	)
}

export default CartItem;