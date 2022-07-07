import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import CartIcon from '../../components/cart-icon/CartIcon';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { selectedCurrentUser } from '../../store/user/user.selector';

import './navigation.styles.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const currentUser = useSelector(selectedCurrentUser);

  const signOutHandler = async () => {
    dispatch(signOutStart());
  };
  return (

    <>
      <div className='navigation'>
        <Link className='logo-container' to={'/'}>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to={'/shop'}>Shop</Link>
          {currentUser ?
            (<span className='nav-link' onClick={signOutHandler}>Sign Out</span>)
            : (<Link className='nav-link' to={'/authentication'}>Sign In</Link>)
          }
          <CartIcon />
          {isCartOpen && <CartDropdown />}

        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;