import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectOfflineStatus } from '../../store/slices/appSlice';

const Header: React.FC = () => {
  const [isOffline, setIsOffline] = useState(false);
  const offlineStatus = useAppSelector(selectOfflineStatus);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    setIsOffline(!navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <h1>Wallet App</h1>
      </div>
      <div className="header-right">
        {isOffline ? (
          <span className="badge offline-badge">Offline</span>
        ) : (
          <span className="badge online-badge">Online</span>
        )}
      </div>
    </header>
  );
};

export default Header;