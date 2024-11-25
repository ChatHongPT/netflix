import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import Toast from "../components/Toast";
import { isValidEmail } from "../utils/validation";
import { saveCredentials, authenticateUser, registerUser } from "../utils/auth";

const SignIn = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    const { email, password, rememberMe, acceptTerms } = formData;

    // 이메일 형식 확인
    if (!isValidEmail(email)) {
      setToastMessage("Invalid email format");
      return;
    }

    if (isLoginMode) {
      // 로그인 처리
      const isAuthenticated = await authenticateUser(email, password);
      if (isAuthenticated) {
        if (rememberMe) saveCredentials(email, password);
        setToastMessage("Login successful!");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setToastMessage("Login failed. Check your email or password.");
      }
    } else {
      // 회원가입 처리
      if (!acceptTerms) {
        setToastMessage("You must accept the terms and conditions.");
        return;
      }
      const isRegistered = await registerUser(email, password);
      if (isRegistered) {
        setToastMessage("Registration successful! You can now log in.");
        setTimeout(() => setIsLoginMode(true), 2000);
      } else {
        setToastMessage("Registration failed. Password must match the API key.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          {isLoginMode ? "Sign In" : "Sign Up"}
        </h1>
        <SignInForm
          isLoginMode={isLoginMode}
          onSubmit={handleFormSubmit}
          toggleMode={() => setIsLoginMode(!isLoginMode)}
        />
      </div>
      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
};

export default SignIn;
