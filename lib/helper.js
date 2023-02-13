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

export const addingUser = async (formData) => {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${BASE_URL}api/users`, Options);
    const responseData = await res.json();

    return responseData;
  } catch (error) {
    return error;
  }
};

export const updatingUser = async (userId, formData) => {
  const Options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  };

  const res = await fetch(`${BASE_URL}api/users/${userId}`, Options);
  const responseData = await res.json();

  return responseData;
};