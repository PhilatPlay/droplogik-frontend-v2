import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <div className="top-side">
        <li>
          <div className="side-menu-items">
            <i class="fa fa-home" aria-hidden="true"></i>
            <NavLink to="/" exact>Home</NavLink>
          </div>
        </li>
        {!auth.isLoggedIn && (
          <li>
            <div className="side-menu-items">
              <i class="fa fa-sign-in" aria-hidden="true"></i>
              <NavLink to="/auth">LogIn</NavLink>
            </div>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <div className="side-menu-items">
              <i class="fa fa-sign-out" aria-hidden="true"></i>
              <button onClick={auth.logout}>LogOut</button>
            </div>
          </li>
        )}
      </div>
      <div className="second-side">
        <li>
          <div className="side-menu-items">
            <i class="fa fa-globe ml-1 mr-3" aria-hidden="true"></i>
            <NavLink to="/" exact>Politics</NavLink>
          </div>
        </li>
        <li>
          <div className="side-menu-items">
            <NavLink to="/auth" exact><i class="fa fa-line-chart" aria-hidden="true"></i></NavLink>
            <NavLink to="/" exact>Economy</NavLink>
          </div>
        </li>
        <li>
          <div className="side-menu-items">
            <i class="fa fa-newspaper-o" aria-hidden="true"></i>
            <NavLink to="/" exact>Top Stories</NavLink>
          </div>
        </li>
        <li>
          <div className="side-menu-items">
            <i class="fa fa-exchange" aria-hidden="true"></i>
            <NavLink to="/" exact>Debates</NavLink>
          </div>
        </li>
        <li>
          <div className="side-menu-items">
            <i class="fa fa-address-card" aria-hidden="true"></i>
            <NavLink to="/" exact>Challenge</NavLink>
          </div>
        </li>
      </div>
    </ul>
  );
};

export default NavLinks;
