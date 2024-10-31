import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AvatarLogo from './../../components/UIElements/AvatarLogo';
import MainHeader from './MainHeader';
import HeadLinks from './HeadLinks';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';
const logo = `/images/thebull.png`;


const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>

      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn ml-3"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <div className='main-logo mt-2'>
          <div className="header-item__image">
            <AvatarLogo image={logo} alt={'dropLogik Bull'} />
          </div>
          <h2 className="main-navigation__title passion-one-regular">
            <Link to="/">dropLogik</Link>
          </h2>
        </div>
        <div className='search-pain'></div>
        {/* <input type="text" className='s-box rounded mr-2' placeholder="Search.."></input> */}
        <form>
          <div className='search'>
            <i className="fa fa-search text-muted ml-2 search-icon"></i>
            <input className='search-input text-muted' type='search' placeholder='search dropLogik...'></input>
          </div>
        </form>
        <div type="submit"><i class="s-mag fa fa-search"></i></div>
        <div className='mr-2'></div>
        <nav className="main-navigation__header-nav">
          <HeadLinks />
        </nav>
      </MainHeader>

    </React.Fragment >
  );
};

export default MainNavigation;
