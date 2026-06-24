import React, { useState, useRef } from 'react';

import { ToastProps } from './types';

const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const toastRef = useRef<HTMLDivElement>(null);

  const getRole = () => {
    if (type === 'error') {
      return 'alert';
    }
    return 'status';
  };

  const getLivePolicy = () => {
    if (type === 'error') {
      return 'assertive';
    }
    return 'polite';
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  return (
    <div
      ref={toastRef}
      role={getRole()}
      aria-live={getLivePolicy()}
      aria-atomic="true"
      className={`fixed bottom-4 right-4 z-[1000] max-w-md p-4 rounded-lg shadow-lg transition-opacity duration-300 ${
        type === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
      } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={handleClose}
    >
      <span className="block">{message}</span>
    </div>
  );
};

export default Toast;