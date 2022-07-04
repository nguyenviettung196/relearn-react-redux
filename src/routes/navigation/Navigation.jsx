import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import CartIcon from '../../components/cart-icon/CartIcon';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectedCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);

  const currentUser = useSelector(selectedCurrentUser);

  const signOutHandler = async () => {
    await signOutUser();
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