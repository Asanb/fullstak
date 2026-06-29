import React from 'react';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

export const renderPage = (view, auth, forms) => {
  switch (view) {
    case 'login':
    case 'register':
      return (
        <AuthPage 
          view={view} 
          setView={auth.setView} 
          handleInputChange={forms.handleInputChange} 
          onSubmit={forms.handleFormSubmit}
        />
      );
    case 'dashboard':
      return (
        <DashboardPage 
          fetchPostgresData={auth.fetchPostgresData} 
          handleLogout={auth.handleLogout} 
          setView={auth.setView} 
          serverMessage={auth.serverMessage} 
        />
      );
    case 'not_found':
    default:
      return <NotFoundPage setView={auth.setView} />;
  }
};
