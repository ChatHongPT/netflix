// 이메일 형식 검증 함수
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // 비밀번호 검증 함수
  export const isValidPassword = (password) => {
    // 최소 8자, 대문자, 소문자, 숫자, 특수 문자 포함
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  // 확인 비밀번호가 동일한지 검증
  export const isPasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  