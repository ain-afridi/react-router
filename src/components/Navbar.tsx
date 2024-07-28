import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';

const Navbar = () => {

  const auth = useAuth();
    const navLinkStyle = ({ isActive }: any) => {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'none' : 'underline'
      };
    };
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyle} to={"/"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to={"/about"}>
        About
      </NavLink>
      <NavLink style={navLinkStyle} to={"/products"}>
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to={"/Profile"}>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyle} to={"/login"}>
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar