// api/auth.js
const validateTMDBKey = async (key) => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular',
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      );
      return response.ok;
    } catch {
      return false;
    }
  };
  
  export { validateTMDBKey };