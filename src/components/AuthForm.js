import React from "react";

const AuthForm = ({ formData, handleInputChange, handleSubmit, isSigningUp, setIsSigningUp }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSigningUp ? "Sign Up" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="apiKey"
            value={formData.apiKey}
            onChange={handleInputChange}
            placeholder="TMDB API Key"
            className="w-full p-2 border rounded"
            required
          />
          {isSigningUp && (
            <>
              <input
                type="text"
                name="confirmApiKey"
                value={formData.confirmApiKey}
                onChange={handleInputChange}
                placeholder="Confirm TMDB API Key"
                className="w-full p-2 border rounded"
                required
              />
              <label className="block">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                I agree to the terms and conditions
              </label>
            </>
          )}
          {!isSigningUp && (
            <label className="block">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="mr-2"
              />
              Remember Me
            </label>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {isSigningUp ? "REGISTER" : "LOGIN"}
          </button>
        </form>
        <p
          className="text-center mt-4 cursor-pointer text-blue-500 hover:underline"
          onClick={() => setIsSigningUp(!isSigningUp)}
        >
          {isSigningUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
