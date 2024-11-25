// components/auth/AuthForm.js
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export const AuthForm = ({
  isSignIn,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  rememberMe,
  setRememberMe,
  agreeToTerms,
  setAgreeToTerms,
  onSubmit,
  onToggleMode,
}) => {
  const [slidePosition, setSlidePosition] = useState('translate-x-0');

  useEffect(() => {
    setSlidePosition(isSignIn ? 'translate-x-0' : '-translate-x-full');
  }, [isSignIn]);

  return (
    <div className="relative overflow-hidden">
      <div 
        className={`transition-transform duration-500 ease-in-out ${slidePosition}`}
      >
        <div className="space-y-4">
          {/* Title */}
          <h2 
            className="text-2xl font-bold text-center mb-6 transition-opacity duration-500"
          >
            {isSignIn ? '로그인' : '회원가입'}
          </h2>

          {/* Form Fields */}
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <Input
              type="password"
              placeholder="TMDB API 키"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
            
            {/* Sign Up Additional Fields */}
            <div 
              className={`space-y-4 transition-all duration-500 ${
                isSignIn ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'
              }`}
            >
              {!isSignIn && (
                <>
                  <Input
                    type="password"
                    placeholder="TMDB API 키 확인"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full"
                  />
                  <div className="flex items-center">
                    <Checkbox
                      id="terms"
                      checked={agreeToTerms}
                      onCheckedChange={setAgreeToTerms}
                    />
                    <label htmlFor="terms" className="ml-2 text-sm">
                      이용약관에 동의합니다
                    </label>
                  </div>
                </>
              )}
            </div>

            {/* Remember Me (Sign In only) */}
            <div 
              className={`transition-all duration-500 ${
                isSignIn ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {isSignIn && (
                <div className="flex items-center">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                  />
                  <label htmlFor="remember" className="ml-2 text-sm">
                    Remember me
                  </label>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button 
              className="w-full transition-colors duration-300" 
              onClick={onSubmit}
            >
              {isSignIn ? '로그인' : '회원가입'}
            </Button>

            {/* Toggle Mode Button */}
            <Button
              variant="outline"
              className="w-full transition-colors duration-300"
              onClick={onToggleMode}
            >
              {isSignIn ? '회원가입하기' : '로그인하기'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};