class AuthService {
    /**
     * 로그인 시도
     * @param {string} email - 사용자의 이메일
     * @param {string} password - 사용자의 비밀번호
     * @param {boolean} saveToken - Local Storage에 토큰 저장 여부
     * @returns {Promise}
     */
    tryLogin(email, password, saveToken = true) {
      return new Promise((resolve, reject) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(
          (user) => user.id === email && user.password === password
        );
  
        if (user) {
          if (saveToken) {
            localStorage.setItem("TMDb-Key", user.password); // 비밀번호를 토큰처럼 저장
          }
          resolve(user); // 로그인 성공
        } else {
          reject(new Error("Login failed")); // 로그인 실패
        }
      });
    }
  
    /**
     * 회원가입 시도
     * @param {string} email - 새 사용자의 이메일
     * @param {string} password - 새 사용자의 비밀번호
     * @returns {Promise}
     */
    tryRegister(email, password) {
      return new Promise((resolve, reject) => {
        try {
          const users = JSON.parse(localStorage.getItem("users") || "[]");
          const userExists = users.some((existingUser) => existingUser.id === email);
  
          if (userExists) {
            throw new Error("User already exists");
          }
  
          const newUser = { id: email, password: password };
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users)); // Local Storage에 저장
          resolve("Registration successful!"); // 회원가입 성공
        } catch (err) {
          reject(err); // 회원가입 실패
        }
      });
    }
  
    /**
     * 로그아웃
     */
    logout() {
      localStorage.removeItem("TMDb-Key");
    }
  
    /**
     * 사용자가 로그인되어 있는지 확인
     * @returns {boolean}
     */
    isLoggedIn() {
      return !!localStorage.getItem("TMDb-Key");
    }
  }
  
  export default new AuthService();
  