import React, { useState, useRef } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const isErrorMessage = type === 'error';

  return (
    <div
      role={isErrorMessage ? 'alert' : 'status'}
      aria-live={isErrorMessage ? 'assertive' : 'polite'}
      className={`fixed bottom-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg ${
        isErrorMessage
          ? 'bg-red-100 text-red-800'
          : 'bg-green-100 text-green-800'
      }`}
      aria-label={message}
    >
      {message}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        aria-label="Close toast"
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;