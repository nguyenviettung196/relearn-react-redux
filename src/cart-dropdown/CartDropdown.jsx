import React, { useContext, useEffect, useRef } from 'react';
import CartItem from '../cart-item/CartItem';
import Button from '../components/button/Button';
import { CartContext } from '../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  //My solution for close cart-dropdown when click outside (cart-icon.component.jsx)
  let dropdownRef = useRef();
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsCartOpen(false);
      }
    });
  });
  return (
    <div className='cart-dropdown-container' ref={dropdownRef}>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}

      </div>
      <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;