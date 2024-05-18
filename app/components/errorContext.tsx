import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ErrorContextType {
  errorMessage: string;
  setError: (message: string) => void;
  clearError: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const setError = (message: string) => {
    setErrorMessage(message);
  };

  const clearError = () => {
    setErrorMessage('');
  };

  return (
    <ErrorContext.Provider value={{ errorMessage, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};
