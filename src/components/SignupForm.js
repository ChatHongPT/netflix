import React from "react";

const SignupForm = ({ formData, handleInputChange, handleSubmit, onSignupSuccess }) => {
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const success = await handleSubmit(e); // handleSubmit에서 회원가입 성공 여부 반환
    if (success) {
      onSignupSuccess(); // 회원가입 성공 시 로그인 폼으로 전환
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign up</h2>
      <form onSubmit={handleSignupSubmit} className="w-4/5 space-y-4">
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
        <input
          type="password"
          name="confirmApiKey"
          placeholder="Confirm TMDB API Key"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={formData.confirmApiKey}
          onChange={handleInputChange}
          required
        />
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            name="agreeTerms"
            id="agreeTerms"
            className="mr-2"
            checked={formData.agreeTerms}
            onChange={handleInputChange}
          />
          <label htmlFor="agreeTerms" className="text-sm">
            I have read Terms and Conditions
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
