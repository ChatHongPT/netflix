import React, { useState } from "react";

const SignInForm = ({ isLoginMode, onSubmit, toggleMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, rememberMe, acceptTerms });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {!isLoginMode && (
        <>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-700">Accept Terms & Conditions</label>
          </div>
        </>
      )}
      {isLoginMode && (
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600 transition"
      >
        {isLoginMode ? "Login" : "Register"}
      </button>
      <p className="text-center text-gray-600">
        {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          onClick={toggleMode}
          className="text-blue-500 cursor-pointer"
        >
          {isLoginMode ? "Sign Up" : "Sign In"}
        </span>
      </p>
    </form>
  );
};

export default SignInForm;
