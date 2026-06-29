import React from 'react';
import useAuthLogic from './hooks/useAuthLogic';
import useFormActions from './hooks/useFormActions';
import { renderPage } from './pageConfig';
import './App.css';

export default function App() {
  const auth = useAuthLogic();
  const forms = useFormActions(auth.view, auth.setView, auth.setErrorMsg, auth.saveSession);

  return (
    <> {/* Используем фрагмент вместо app-container */}
      {auth.errorMsg && <p className="error-message">{auth.errorMsg}</p>}
      {renderPage(auth.view, auth, forms)}
    </>
  );
}
