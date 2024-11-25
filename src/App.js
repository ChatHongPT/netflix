import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"; // 메인 페이지 예제
import { isAuthenticated } from "./utils/auth";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 로그인 상태 확인 미들웨어 */}
        <Route
          path="/"
          element={
            isAuthenticated() ? <Home /> : <Navigate to="/signin" replace />
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
