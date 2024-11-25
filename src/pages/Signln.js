// pages/SignIn.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Toast } from '@/components/ui/toast';
import { AuthForm } from '../components/auth/AuthForm';
import { useAuth } from '../hooks/useAuth';

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const { signIn, signUp, showToast, toastMessage, toastType } = useAuth();

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }

    window.addEventListener('beforeunload', clearLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    if (!rememberMe) {
      localStorage.clear();
    }
  };

  const handleSubmit = async () => {
    if (isSignIn) {
      await signIn(email, password, rememberMe);
    } else {
      const success = await signUp(email, password, confirmPassword, agreeToTerms);
      if (success) {
        setIsSignIn(true);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center">
            {isSignIn ? '로그인' : '회원가입'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AuthForm
            isSignIn={isSignIn}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
            agreeToTerms={agreeToTerms}
            setAgreeToTerms={setAgreeToTerms}
            onSubmit={handleSubmit}
            onToggleMode={() => setIsSignIn(!isSignIn)}
          />
        </CardContent>
      </Card>
      {showToast && (
        <Toast variant={toastType} className="fixed bottom-4 right-4">
          {toastMessage}
        </Toast>
      )}
    </div>
  );
};

export default SignIn;