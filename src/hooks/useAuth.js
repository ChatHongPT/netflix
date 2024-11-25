// hooks/useAuth.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateTMDBKey } from '/api/auth';
import { validateSignUpForm } from '/utils/validation';

export const useAuth = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const signIn = async (email, password, rememberMe) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
        localStorage.setItem('isLoggedIn', 'true');
      }
      showToastMessage('로그인 성공!', 'success');
      setTimeout(() => navigate('/'), 1000);
      return true;
    } else {
      showToastMessage('아이디 또는 비밀번호가 잘못되었습니다.', 'error');
      return false;
    }
  };

  const signUp = async (email, password, confirmPassword, agreeToTerms) => {
    const validation = validateSignUpForm(email, password, confirmPassword, agreeToTerms);
    if (!validation.isValid) {
      showToastMessage(validation.message, 'error');
      return false;
    }

    const isValidTMDBKey = await validateTMDBKey(password);
    if (!isValidTMDBKey) {
      showToastMessage('유효하지 않은 TMDB API 키입니다.', 'error');
      return false;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === email)) {
      showToastMessage('이미 존재하는 이메일입니다.', 'error');
      return false;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    showToastMessage('회원가입 성공!', 'success');
    return true;
  };

  return {
    signIn,
    signUp,
    showToast,
    toastMessage,
    toastType,
  };
};