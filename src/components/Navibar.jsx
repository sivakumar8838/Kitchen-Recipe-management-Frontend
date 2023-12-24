import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navibar.css';

function Navibar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <nav>
      <div id='portfolio-container'>
      <h1 id='portfolios'>Recipes</h1>
      </div>
      <div className='menu'>
        <ul className={menu ? 'show' : 'hide'}>
          <li><Link to='/Home' >Home</Link></li>
          <li><Link to='/biryani' onClick={closeMenu}>Biryani</Link></li>
          <li><Link to='/chicken' onClick={closeMenu}>Chicken</Link></li>
          <li><Link to='/paneer' onClick={closeMenu}>Paneer</Link></li>
          <li><Link to='/create' onClick={closeMenu}>My Recipe</Link></li>
          <li><Link to='/' onClick={closeMenu}>Logout</Link></li>
        </ul>

        <div id='right'>
          <input
            id="checkbox"
            type="checkbox"
            onChange={toggleMenu}
            checked={menu}
          />
          <label className="toggle" htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navibar;
