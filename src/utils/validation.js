// utils/validation.js
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validatePassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  
  export const validateSignUpForm = (email, password, confirmPassword, agreeToTerms) => {
    if (!validateEmail(email)) {
      return { isValid: false, message: '유효한 이메일 주소를 입력해주세요.' };
    }
    
    if (!validatePassword(password, confirmPassword)) {
      return { isValid: false, message: '비밀번호가 일치하지 않습니다.' };
    }
    
    if (!agreeToTerms) {
      return { isValid: false, message: '약관에 동의해주세요.' };
    }
    
    return { isValid: true };
  };