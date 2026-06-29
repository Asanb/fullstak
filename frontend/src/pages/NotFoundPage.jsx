import React from 'react';
import './NotFound.css'; // Подключаем выделенные полноэкранные стили

export default function NotFoundPage({ setView }) {
  return (
    <div className="notfound-layout">
      <div className="notfound-card">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Страница не найдена</h2>
        <p className="notfound-text">
          Упс! Запрашиваемая вами страница не существует, была удалена или временно недоступна.
        </p>
        <button 
          onClick={() => setView(localStorage.getItem('token') ? 'dashboard' : 'login')} 
          className="btn-notfound"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
}
