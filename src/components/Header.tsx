import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineBadge, setShowOfflineBadge] = useState(false);
  const navigate = useNavigate();

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
    if (!isOnline) {
      alert('You are offline. Please check your connection.');
      return;
    }
    navigate('/send');
  };

  const handleClaimClick = () => {
    if (!isOnline) {
      alert('You are offline. Please check your connection.');
      return;
    }
    navigate('/claim');
  };

  const handleScanClick = () => {
    if (!isOnline) {
      alert('You are offline. Please check your connection.');
      return;
    }
    navigate('/scan');
  };

  return (
    <header className="header">
      <div className="header-left">
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
      {showOfflineBadge && (
        <span className="offline-badge">Offline</span>
      )}
    </header>
  );
};

export default Header;