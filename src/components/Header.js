import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  if (location.pathname === "/signin") return null; // 로그인/회원가입 페이지에서는 헤더 숨김

  return (
    <header className="header">
      <h1>HONG-FLIX</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/search">Search</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
    </header>
  );
};

export default Header;
