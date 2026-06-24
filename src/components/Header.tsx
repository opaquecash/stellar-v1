import React, { useState, useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectOfflineStatus } from '@/store/slices/appSlice';

interface HeaderProps {
  onSendClick: () => void;
  onClaimClick: () => void;
  onScanClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSendClick, onClaimClick, onScanClick }) => {
  const [isOffline, setIsOffline] = useState(false);
  const offlineStatus = useAppSelector(selectOfflineStatus);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Use the store's offline status if available, fallback to navigator.onLine
  const currentOffline = offlineStatus !== null ? offlineStatus : isOffline;

  return (
    <header className="header">
      <div className="header-left">
        <h1>Wallet App</h1>
      </div>
      <div className="header-right">
        {currentOffline ? (
          <span className="badge offline-badge">Offline</span>
        ) : (
          <span className="badge online-badge">Online</span>
        )}
        <button
          className={`action-button ${currentOffline ? 'disabled' : ''}`}
          onClick={onSendClick}
          disabled={currentOffline}
        >
          Send
        </button>
        <button
          className={`action-button ${currentOffline ? 'disabled' : ''}`}
          onClick={onClaimClick}
          disabled={currentOffline}
        >
          Claim
        </button>
        <button
          className={`action-button ${currentOffline ? 'disabled' : ''}`}
          onClick={onScanClick}
          disabled={currentOffline}
        >
          Scan
        </button>
      </div>
    </header>
  );
};

export default Header;