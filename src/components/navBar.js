import React from "react";
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
                <a className='navbar-brand' href='#'>
                  <img
                    src='https://www.macstation.com.ar/assets/img/logo_authorized_reseller.svg'
                    alt=''
                  />
                </a>
              </li>
              {/* <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  <i className='bi bi-apple'></i>
                </a>
              </li> */}
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Macbook
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Ipad
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  AppleWatch
                </a>
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
