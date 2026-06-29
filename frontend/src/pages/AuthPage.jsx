import React from 'react';

export default function AuthPage({ view, setView, handleInputChange, onSubmit }) {
  const isLogin = view === 'login';

  return (
    <div className="app-container"> {/* Перенесли класс сюда */}
      <form onSubmit={onSubmit}>
        <h2>{isLogin ? 'Вход в систему' : 'Регистрация'}</h2>
        <input type="text" name="username" placeholder="Логин" onChange={handleInputChange} required className="input-field" />
        {!isLogin && <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required className="input-field" />}
        <input type="password" name="password" placeholder="Пароль" onChange={handleInputChange} required className="input-field" />
        <button type="submit" className={`btn btn-${view}`}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        <p onClick={() => setView(isLogin ? 'register' : 'login')} className="link-text">
          {isLogin ? 'Создать аккаунт' : 'Уже есть аккаунт? Войти'}
        </p>
      </form>
    </div>
  );
}
