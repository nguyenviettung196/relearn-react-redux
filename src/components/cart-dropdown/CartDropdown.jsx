import React from 'react';
import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';

import { useNavigate } from 'react-router-dom';
import './CartDropdown.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';


const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    console.log('click');
    navigate('/checkout');
  };
  //My solution for close cart-dropdown when click outside (cart-icon.component.jsx)
  // let dropdownRef = useRef();
  // useEffect(() => {
  //   document.addEventListener('mousedown', (e) => {
  //     if (!dropdownRef.current?.contains(e.target)) {
  //       dispatch(setIsCartOpen(!isCartOpen));
  //     }
  //   });
  // }, [isCartOpen, dispatch]);
  return (
    <div className='cart-dropdown-container'
      // ref={dropdownRef}
    >
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}

      </div>
      <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
