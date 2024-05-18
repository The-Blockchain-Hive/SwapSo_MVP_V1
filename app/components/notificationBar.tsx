// components/NotificationBar.tsx
import React from 'react';
import { useError } from './errorContext'; // Adjust the path as needed

const NotificationBar: React.FC = () => {
  const { errorMessage, clearError } = useError();

  if (!errorMessage) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 text-white p-4 z-50">
      <p>{errorMessage}</p>
      <button onClick={clearError} className="absolute top-2 right-2">Dismiss</button>
    </div>
  );
};

export default NotificationBar;
