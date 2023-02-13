const BASE_URL = 'http://localhost:3000';

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  const responseData = await res.json();

  return responseData;
};

export const getUser = async (userId) => {
  const res = await fetch(`${BASE_URL}api/users/${userId}`);
  const responseData = await res.json();

  if (responseData) return responseData;
  return {};
};
