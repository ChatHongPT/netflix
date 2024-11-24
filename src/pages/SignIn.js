import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { validateApiKey } from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    apiKey: "",
    confirmApiKey: "",
    rememberMe: false,
    agreeTerms: false,
  });
  const [isSigningUp, setIsSigningUp] = useState(false); // 로그인/회원가입 상태 관리

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

    // 이메일 형식 확인
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("유효한 이메일 형식이 아닙니다.");
      return;
    }

    if (isSigningUp) {
      // 회원가입 로직
      if (apiKey !== confirmApiKey) {
        toast.error("API Key가 일치하지 않습니다.");
        return;
      }
      if (!agreeTerms) {
        toast.error("약관에 동의해야 회원가입이 가능합니다.");
        return;
      }

      const isValid = await validateApiKey(apiKey);
      if (!isValid) {
        toast.error("유효하지 않은 TMDB API Key입니다.");
        return;
      }

      // 회원가입 성공: 사용자 정보 저장
      localStorage.setItem("user", JSON.stringify({ email, apiKey }));
      toast.success("회원가입이 완료되었습니다! 로그인 화면으로 이동합니다.");
      setTimeout(() => {
        setIsSigningUp(false); // 로그인 화면으로 전환
      }, 2000);
    } else {
      // 로그인 로직
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser?.email === email && storedUser?.apiKey === apiKey) {
        if (rememberMe) {
          localStorage.setItem("rememberMe", email); // 이메일 저장
        }
        toast.success("로그인 성공!");
        navigate("/"); // 메인 화면으로 이동
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
