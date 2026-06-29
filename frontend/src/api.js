const API_URL = 'http://localhost:8000';

export const sendRequest = async (url, method, body = null, token = null) => {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${url}`, { 
    method, 
    headers, 
    body: body ? JSON.stringify(body) : null 
  });

  if (!res.ok) throw new Error(res.status === 401 ? 'UNAUTHORIZED' : 'FAILED');
  return res.json();
};
