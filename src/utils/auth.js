const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// 사용자 인증 함수 (로그인)
export const authenticateUser = async (email, password) => {
  // 비밀번호가 API 키와 동일한지 확인
  if (password !== API_KEY) {
    return false;
  }
  // 인증 성공
  return true;
};

// 회원가입 로직 (비밀번호 확인 포함)
export const registerUser = async (email, password) => {
  // 비밀번호가 API 키와 일치해야 회원가입 성공
  if (password !== API_KEY) {
    throw new Error("Password must match the API key");
  }
  // 회원 정보를 Local Storage에 저장
  saveCredentials(email, password);
  return true;
};

// 사용자 자격 증명 저장
export const saveCredentials = (email, password) => {
  localStorage.setItem("credentials", JSON.stringify({ email, password }));
};

// 로그인 상태 확인
export const isAuthenticated = () => {
  return !!localStorage.getItem("credentials");
};
