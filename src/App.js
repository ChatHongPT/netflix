import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/"
          element={isLoggedIn ? <div>Main Page</div> : <Navigate to="/signin" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
