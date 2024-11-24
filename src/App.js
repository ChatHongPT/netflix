import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast"; // Toaster 추가

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("user");
  return isLoggedIn ? children : <Navigate to="/signin" />;
};

const App = () => {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} /> {/* Toaster 추가 */}
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
