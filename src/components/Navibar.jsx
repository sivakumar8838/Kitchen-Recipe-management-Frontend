import React from 'react'
import { Link } from 'react-router-dom'

function Navibar() {

  

  return (
    <div>
      <ul> <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/biryani'>Biryani</Link></li>
        <li><Link to='/chicken'>Chicken</Link></li>
        <li><Link to='/paneer'>Paneer</Link></li>
        <li><Link to='/veg'>veg</Link></li>
        <li><Link to='/create'>My Recipe</Link></li>
      </ul>
    </div>
  );
}

export default Navibar