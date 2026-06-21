import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { selectOfflineStatus } from '../store/features/appSlice';

const Header: React.FC = () => {
  const [isOffline, setIsOffline] = useState(false);
  const navigate = useNavigate();
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

  const handleSendClick = () => {
    if (isOffline) return;
    navigate('/send');
  };

  const handleClaimClick = () => {
    if (isOffline) return;
    navigate('/claim');
  };

  const handleScanClick = () => {
    if (isOffline) return;
    navigate('/scan');
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1>Wallet App</h1>
      </div>
      <div className="header-right">
        <button
          className="btn btn-primary"
          onClick={handleSendClick}
          disabled={isOffline}
        >
          Send
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleClaimClick}
          disabled={isOffline}
        >
          Claim
        </button>
        <button
          className="btn btn-tertiary"
          onClick={handleScanClick}
          disabled={isOffline}
        >
          Scan
        </button>
        {isOffline && (
          <span className="badge badge-danger">Offline</span>
        )}
      </div>
    </header>
  );
};

export default Header;