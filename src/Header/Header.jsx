import React from 'react';
import {NavLink} from 'react-router-dom';

import "./Header.css";

export default function Header() {
  return <div className='header'>
        <NavLink to ='/' className='header__title'>Love Beers</NavLink>
        <nav className='header__nav'>
          <NavLink
            to='/favorites'
            className='header__link'
            activeClassName='header__link--active'>
            Favorites
          </NavLink>
        </nav>
        </div>;
}
