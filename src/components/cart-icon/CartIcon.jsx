import React, { useContext, useEffect, useRef } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './CartIcon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => { setIsCartOpen(!isCartOpen); };
  // close dropdown when click outside
  //My solution for close cart-dropdown when click outside (cart-icon.component.jsx)
  let dropdownRef = useRef();
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    });
  });
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen} ref={dropdownRef}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;