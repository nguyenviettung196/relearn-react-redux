import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../cart-dropdown/CartDropdown';
import CartIcon from '../../components/cart-icon/CartIcon';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  // console.log(currentUser);
  const signOutHandler = async () => {
    const res = await signOutUser();
    console.log(res);

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