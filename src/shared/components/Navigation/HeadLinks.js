import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './HeadLinks.css';

const HeadLinks = props => {
  // const auth = useContext(AuthContext);

  return (
    <ul className="head-links">

      {/* {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Log In</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Log Out</button>
        </li>
      )} */}
    </ul>
  );
};

export default HeadLinks;