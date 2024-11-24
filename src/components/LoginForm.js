import React from "react";

const LoginForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign in</h2>
      <form onSubmit={handleSubmit} className="w-4/5 space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="apiKey"
          placeholder="TMDB API Key"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={formData.apiKey}
          onChange={handleInputChange}
          required
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            className="mr-2"
            checked={formData.rememberMe}
            onChange={handleInputChange}
          />
          <label htmlFor="rememberMe" className="text-sm">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
