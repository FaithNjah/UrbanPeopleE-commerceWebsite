import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faAngleDown, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import "../FirstPage/Navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      {/* <!-- First-Nav-bar --> */}
      <nav className="navbar navbar-expand-lg First-Nav-bar">
        <div className="container-fluid div-nav">
          <div className="toggle">
            <a className="navbar-brand" href="#">Order online or call us: 234 7156</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav first-Nav-bar-ul">
              <li className="nav-item">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faSearch} /> Search</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faUser} /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faHeart} /> Wish List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">USD <FontAwesomeIcon icon={faAngleDown} /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg second-nav-bar">
      <div className="container-fluid div-nav">
        <div className="toggle">
          <a className="navbar-brand" href="#">urban people</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to = {'/'} className="nav-link active" aria-current="page" href="index.html">home</Link>
            </li>
            <li className="nav-item one">
              <Link to = {'/secondpage'} className="nav-link" href="Catalog.html">catalog</Link>
            </li>
            <li className="nav-item one">
              <Link to = {'/'} className="nav-link" href="Catalog.html">catalog</Link>
            </li>
            <li className="nav-item one">
              <Link to = {'/'} className="nav-link" href="Catalog.html">catalog</Link>
            </li>
            <li className="nav-item one">
              <Link to = {'/'} className="nav-link" href="Catalog.html">catalog</Link>
            </li>
            
            <li className="nav-item two">
              <Link to = {'/'} className="nav-link disabled" aria-disabled="true">
                <FontAwesomeIcon icon={faShoppingBag} />  0 articles
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>

    
  );
}

export default Navbar;
