import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  BackgroundImage,
  Remove,
  Quantity,
  Value,
  Decrement,
  Increment,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CheckoutItemContainer>
      <BackgroundImage src={imageUrl} alt={name} />
      <div>{name}</div>
      <Quantity>
        <Decrement onClick={() => removeItemToCart(cartItem)}> – </Decrement>
        <Value>{quantity ? quantity : 0}</Value>
        <Increment onClick={() => addItemToCart(cartItem)}>+</Increment>
      </Quantity>
      <div>${price}</div>
      <Remove onClick={() => clearItemFromCart(cartItem)}>&times;</Remove>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
