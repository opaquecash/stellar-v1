import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const Header: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineBadge, setShowOfflineBadge] = useState(false);
  const navigate = useNavigate();
  const { isConnected } = useAppSelector((state) => state.network);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineBadge(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineBadge(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSendClick = () => {
    if (!isOnline) return;
    navigate('/send');
  };

  const handleClaimClick = () => {
    if (!isOnline) return;
    navigate('/claim');
  };

  const handleScanClick = () => {
    if (!isOnline) return;
    navigate('/scan');
  };

  return (
    <header className="header">
      <div className="header-left">
        <button onClick={() => navigate(-1)}>←</button>
        <h1>Wallet</h1>
      </div>

      <div className="header-center">
        <div className="status-indicator" style={{ backgroundColor: isConnected ? '#4CAF50' : '#F44336' }} />
        {showOfflineBadge && (
          <span className="offline-badge">Offline</span>
        )}
      </div>

      <div className="header-right">
        <button onClick={handleSendClick} disabled={!isOnline}>
          Send
        </button>
        <button onClick={handleClaimClick} disabled={!isOnline}>
          Claim
        </button>
        <button onClick={handleScanClick} disabled={!isOnline}>
          Scan
        </button>
      </div>
    </header>
  );
};

export default Header;