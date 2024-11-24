import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/signin") return null; // 로그인/회원가입 페이지에서는 푸터 숨김

  return (
    <footer className="footer">
      <p>© 2024 HONG-FLIX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
