import { useState } from 'react';
import './Header.css'
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">ui__components</Link>
          <Link to="/components">components</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
};
export default Header;