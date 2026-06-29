import React from 'react';
import './Dashboard.css'; // ПОДКЛЮЧАЕМ ВЫДЕЛЕННЫЕ СТИЛИ СТРАНИЦЫ

// Добавили проп username в параметры компонента
export default function DashboardPage({ username = "Пользователь", fetchPostgresData, handleLogout, setView, serverMessage }) {
  const blogPosts = [
    { id: 1, title: "Запуск Docker Compose", text: "Сегодня мы успешно развернули связку React + Django + PostgreSQL в изолированных контейнерах Docker." },
    { id: 2, title: "Идеальная архитектура", text: "Разделение кода на api, кастомные хуки и чистые визуальные страницы упрощает поддержку фронтенда." },
    { id: 3, title: "Безопасность баз данных", text: "Использование соли (Salt) при хэшировании паролей защищает пользовательские аккаунты от компрометации." }
  ];

  return (
    <div className="dashboard-layout">
      {/* Боковая панель (Sidebar) */}
      <aside className="dashboard-sidebar">
        <div>
          <div className="sidebar-brand">Project Console</div>
          <ul className="sidebar-menu">
            <li className="sidebar-item active" onClick={() => setView('dashboard')}>Главная</li>
            <li className="sidebar-item" onClick={() => setView('not_found')}>Настройки</li>
            <li className="sidebar-item" onClick={() => setView('not_found')}>Профиль</li>
          </ul>
        </div>
        {/* Кнопку "Выйти" отсюда убрали, так как перенесли её в шапку */}
      </aside>

      {/* Основная область (Main) */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <button onClick={fetchPostgresData} className="btn-dash btn-status">
            Проверить статус PostgreSQL
          </button>
          
          {/* Правая часть шапки: имя пользователя + кнопка выхода */}
          <div className="header-user-zone">
            <div className="user-profile">
              <span className="status-indicator"></span>
              <span className="username-text">{username}</span>
            </div>
            <button onClick={handleLogout} className="btn-dash btn-logout">
              Выйти
            </button>
          </div>
        </header>

        <div className="dashboard-content">
          <h2>Добро пожаловать в Личный Кабинет!</h2>
          
          {serverMessage && (
            <div className="server-response">
              <strong>Статус БД:</strong> {serverMessage}
            </div>
          )}

          <section className="blog-section">
            <h3>Актуальные новости проекта</h3>
            <div className="blog-grid">
              {blogPosts.map(post => (
                <article key={post.id} className="blog-card">
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}