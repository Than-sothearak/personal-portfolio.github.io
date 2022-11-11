import React from 'react';


import './navbar.css';

const Navbar = () => {
  
  return (
    
    <header className='header'>
      <nav className='app__navbar'>
       <div>
        <h1>Sothearak</h1>
       </div>
       <ul className='app__navbar-links'>
        {['Home', 'About','Skills','contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
       </ul>
    </nav>
    </header>
  );
}

export default Navbar;