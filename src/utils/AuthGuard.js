import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user")); // 저장된 사용자 정보 확인
  const isLoggedIn = storedUser && storedUser.apiKey; // 로그인 상태 확인

  if (!isLoggedIn) {
    // 로그인이 되어 있지 않으면 /signin으로 리다이렉트
    return <Navigate to="/signin" replace />;
  }

  return children; // 로그인이 되어 있으면 children 컴포넌트 렌더링
};

export default AuthGuard;
