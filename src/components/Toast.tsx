import React, { useState, useRef } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const isError = type === 'error';

  return (
    <div
      role={isError ? 'alert' : 'status'}
      aria-live={isError ? 'assertive' : 'polite'}
      className={`fixed bottom-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg ${
        isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
      }`}
      aria-label={message}
    >
      <span className="block">{message}</span>
      <button
        onClick={onClose}
        className="mt-2 text-gray-500 hover:text-gray-700"
        aria-label="Close toast"
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;