import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context/auth-context";
import "./NavLinks.css";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className='nav-links'>
      {(auth.isLoggedIn && auth.roles && auth.roles.includes("admin")) && (
        <li>
          <NavLink to={"/reports"}>Αναφορές <i className="bi bi-file-earmark-text-fill"></i></NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to={"/trees"}>Τα δέντρα μου <i className="bi bi-card-list"></i></NavLink>
        </li>
      )}
      {(auth.isLoggedIn && auth.roles && auth.roles.includes("admin")) && (
        <li>
          <NavLink to={"/accounts-manager"}>Διαχείριση χρηστών <i className="bi bi-people-fill"></i></NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to={"/map"}>Χάρτης δέντρων <i className="bi bi-map-fill"></i></NavLink>
        </li>
      )}
      <li>
        <NavLink to='/legal'>Νομιμότητα <i className="bi bi-bank2"></i></NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Επικοινωνία <i className="bi bi-telephone-fill"></i></NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/settings'>Ρυθμίσεις <i className="bi bi-gear-fill"></i></NavLink>
        </li>
      )}
      {/* Login / Logout */}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'>Σύνδεση <i className="bi bi-box-arrow-in-right"></i></NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'><button onClick={auth.logout}>Αποσύνδεση <i className="bi bi-door-closed-fill"></i></button></NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
