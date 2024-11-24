const TMDB_API_KEY = "517ff51627420bdc50a849194a4ecee2";

export const savePassword = async (password) => {
  const response = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${TMDB_API_KEY}`, {
    method: "POST",
    body: JSON.stringify({ password }),
    headers: { "Content-Type": "application/json" },
  });
  return response.ok;
};
