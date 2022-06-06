import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd, amount = 1) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

	if (existingCartItem)
		return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
			{ ...cartItem, quantity: cartItem.quantity + amount } :
			cartItem
		)

	return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
	console.log('productToRemove:', productToRemove);
	// console.log(cartItems.map(cartItem => cartItem.id === productToRemove.id));
}

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => { },
	cartItems: [],
	handleCartItem: () => { },
	cartCount: 0
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItems) => total + cartItems.quantity, 0);
		setCartCount(newCartCount);

		const newTotalCount = cartItems.reduce((total, cartItems) => total + cartItems.quantity * cartItems.price, 0);
		setTotalCount(newTotalCount);
	}, [cartItems]);

	const removeItemFromCart = productToRemove => setCartItems(removeCartItem(cartItems, productToRemove));
	const handleCartItem = (productToAdd, amount) => setCartItems(addCartItem(cartItems, productToAdd, amount));

	const value = { isCartOpen, setIsCartOpen, handleCartItem, removeItemFromCart, cartItems, cartCount, totalCount };

	return (
		<CartContext.Provider value={ value }>{ children }</CartContext.Provider>
	)
}