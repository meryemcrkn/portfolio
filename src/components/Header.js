import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/about">Hakkımda</Link></li>
            <li><Link to="/skills">Yetenekler</Link></li>
            <li><Link to="/portfolio">Portfolyo</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
