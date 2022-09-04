import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks";
// import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../../CustomUIElements/Backdrop/Backdrop";
import "./MainNavigation.css";
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from "../../../context/auth-context";

const MainNavigation = () => {
  const auth = useContext(AuthContext);
  let processedEmail
  if (auth.email)
    processedEmail = auth.email.substring(0, auth.email.indexOf('@'));
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
      {/* <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}> */}
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      {/* </SideDrawer> */}
      <div className="main-header">
        <MainHeader>
          <button
            className='main-navigation__menu-btn'
            onClick={openDrawerHandler}>
            <MenuIcon fontSize={'large'}></MenuIcon>
          </button>
          <span className="group">
            {/* Logo and Landing Page Link */}
            <h1 className='main-navigation__title'>
              <Link to='/'><span>City Appgrade</span></Link><i className="bi bi-tree"></i>
            </h1>
            {/* User currently logged in */}
            {processedEmail &&
              <h2 className="username"><span>{processedEmail}</span> <i className="bi bi-person icon"></i></h2>
            }
          </span>
        </MainHeader>
      </div>
    </React.Fragment>
  );
};

export default MainNavigation;
