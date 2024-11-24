import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { validateApiKey } from "../api/api";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [isSigningUp, setIsSigningUp] = useState(false); // 회원가입/로그인 전환 상태
  const [formData, setFormData] = useState({
    email: "",
    apiKey: "",
    confirmApiKey: "",
    rememberMe: false, // 로그인 시에만 사용
    agreeTerms: false, // 회원가입 시 필수 약관 동의
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, apiKey, confirmApiKey, rememberMe, agreeTerms } = formData;

    // 회원가입 로직
    if (isSigningUp) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast.error("유효한 이메일 형식이 아닙니다.");
        return;
      }
      if (apiKey !== confirmApiKey) {
        toast.error("API Key가 일치하지 않습니다.");
        return;
      }
      if (!agreeTerms) {
        toast.error("약관에 동의해야 회원가입 가능합니다.");
        return;
      }

      const isValid = await validateApiKey(apiKey);
      if (!isValid) {
        toast.error("유효하지 않은 TMDB API Key입니다.");
        return;
      }

      localStorage.setItem("user", JSON.stringify({ email, apiKey }));
      localStorage.setItem("TMDb-Key", apiKey);
      toast.success("회원가입 완료! 로그인 화면으로 이동합니다.");
      setIsSigningUp(false); // 로그인 화면으로 전환
    } else {
      // 로그인 로직
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser?.email === email && storedUser?.apiKey === apiKey) {
        if (rememberMe) {
          localStorage.setItem("rememberMe", email);
        }
        toast.success("로그인 성공!");
        navigate("/");
      } else {
        toast.error("이메일 또는 API Key가 잘못되었습니다.");
      }
    }
  };

  return (
    <AuthForm
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isSigningUp={isSigningUp}
      setIsSigningUp={setIsSigningUp}
    />
  );
};

export default SignIn;
