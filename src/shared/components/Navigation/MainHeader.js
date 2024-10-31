import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


import './MainHeader.css';

const MainHeader = props => {

  let [opened, setOpened] = useState(false);

  const toggleMessenger = () => {
    let mess = document.getElementById("messengerDiv");
    if (opened) {
      mess.classList.add("hideForTheMoment");
      setOpened(false);
    } else {
      mess.classList.remove("hideForTheMoment");
      setOpened(true);

    }

  }

  return (
    <div>
      <header className="main-header">{props.children}</header>
      <div className="top-div">
        <div className="icon-set"><i class=" nav-two-icons fa fa-video-camera"></i><p className="nav2-icon-text">Live Stream</p><span class="tooltiptext">Coming Soon!</span></div>
        <div className="icon-set"><i class=" nav-two-icons fa fa-play"></i><p className="nav2-icon-text">Video</p><span class="tooltiptext">Coming Soon!</span></div>
        <div className="icon-set"><i class=" nav-two-icons fa fa-shopping-bag"></i><p className="nav2-icon-text">Market Place</p><span class="tooltiptext">Coming Soon!</span></div>
        <div onClick={toggleMessenger} className="icon-set"><i class=" nav-two-icons fa fa-comments"></i>
          <p className="nav2-icon-text">Messaging</p><span class="tooltiptext">Coming Soon!</span></div>
        <div className="icon-set"><i class=" nav-two-icons fa fa-users"></i><p className="nav2-icon-text">Groups</p><span class="tooltiptext">Coming Soon!</span></div>
      </div>
    </div>
  );
};

export default MainHeader;
