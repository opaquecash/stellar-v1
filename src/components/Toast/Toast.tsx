import React, { useState, useRef } from 'react';
import { ToastProps } from './Toast.types';

const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const toastRef = useRef<HTMLDivElement>(null);

  const getRole = () => {
    if (type === 'error') return 'alert';
    return 'status';
  };

  const getLivePolicy = () => {
    if (type === 'error') return 'assertive';
    return 'polite';
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [type]);

  React.useEffect(() => {
    if (isVisible && toastRef.current) {
      toastRef.current.setAttribute('role', getRole());
      toastRef.current.setAttribute('aria-live', getLivePolicy());
    }
  }, [isVisible, getRole, getLivePolicy]);

  if (!isVisible) return null;

  return (
    <div
      ref={toastRef}
      className={`fixed bottom-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
        type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
      }`}
      aria-live={getLivePolicy()}
      role={getRole()}
    >
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default Toast;