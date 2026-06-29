import { useState } from 'react';
import { sendRequest } from '../api';

export default function useAuthLogic() {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
  const [view, setView] = useState(() => token ? 'dashboard' : 'login');
  const [serverMessage, setServerMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setServerMessage('');
    setView('login');
  };

  const saveSession = (accessToken) => {
    localStorage.setItem('token', accessToken);
    setToken(accessToken);
    setView('dashboard');
  };

  const fetchPostgresData = async () => {
    setErrorMsg('');
    try {
      const data = await sendRequest('/api/dashboard/', 'GET', null, token);
      setServerMessage(data.message);
    } catch (e) {
      if (e.message === 'UNAUTHORIZED') handleLogout();
      else setErrorMsg('Ошибка получения данных.');
    }
  };

  return { view, setView, errorMsg, setErrorMsg, serverMessage, saveSession, handleLogout, fetchPostgresData };
}
