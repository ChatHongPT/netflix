import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
<<<<<<< HEAD
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast"; // Toaster 추가

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("user");
  return isLoggedIn ? children : <Navigate to="/signin" />;
};
=======
import Home from "./pages/Home"; // 메인 페이지 예제
import { isAuthenticated } from "./utils/auth";
>>>>>>> feature/login

const App = () => {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} /> {/* Toaster 추가 */}
      <Header />
      <Routes>
        {/* 로그인 상태 확인 미들웨어 */}
        <Route
          path="/"
          element={
<<<<<<< HEAD
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
=======
            isAuthenticated() ? <Home /> : <Navigate to="/signin" replace />
>>>>>>> feature/login
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
