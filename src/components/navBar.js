import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./cartWidget";

const NavBar = () => {
  return (
    <>
      <nav className='container-fluid navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between'>
        <div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav mr-auto'>
              <li>
                <Link to='./'>
                  <div className='navbar-brand'>
                    <img
                      src='https://www.macstation.com.ar/assets/img/logo_authorized_reseller.svg'
                      alt=''
                    />
                  </div>
                </Link>
              </li>
              {/* <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  <i className='bi bi-apple'></i>
                </a>
              </li> */}
              <li className='nav-item'>
                <Link to='/category/1' className='nav-link'>
                  Macbook
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/category/2' className='nav-link'>
                  Ipad
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/category/3' className='nav-link'>
                  Apple Watch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </>
  );
};

export default NavBar;
