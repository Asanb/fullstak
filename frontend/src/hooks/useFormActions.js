import { useState } from 'react';
import { sendRequest } from '../api';

export default function useFormActions(view, setView, setErrorMsg, saveSession) {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const isLogin = view === 'login';
    
    try {
      const body = isLogin ? { username: formData.username, password: formData.password } : formData;
      const data = await sendRequest(`/api/${view}/`, 'POST', body);

      if (isLogin) {
        saveSession(data.access);
      } else {
        alert('Регистрация успешна! Теперь вы можете войти.');
        setView('login');
      }
    } catch (err) {
      setErrorMsg(isLogin ? 'Неверный логин или пароль.' : 'Ошибка регистрации. Логин может быть занят.');
    }
  };

  return { handleInputChange, handleFormSubmit };
}
