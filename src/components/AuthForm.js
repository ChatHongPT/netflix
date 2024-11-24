import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Toaster } from "react-hot-toast";

const AuthForm = ({ handleSubmit, formData, handleInputChange }) => {
  const [isSigningUp, setIsSigningUp] = useState(false); // 로그인/회원가입 상태 관리

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <Toaster />
      <div className="relative w-full max-w-lg h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
            isSigningUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <LoginForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
            isSigningUp ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <SignupForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="absolute bottom-4 w-full text-center">
          {isSigningUp ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setIsSigningUp(false)}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Sign in
              </span>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsSigningUp(true)}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
