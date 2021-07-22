import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <nav>
        <h1 className="brand">Lex Food</h1>
        <ul className="menu">
          <li><Link to="/" className='menu-item'>Home</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;