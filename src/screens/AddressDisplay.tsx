import React, { useState } from 'react';
import { useToast } from '../../hooks/useToast';

const AddressDisplay: React.FC<{ address: string }> = ({ address }) => {
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast.show('Copied!');
    } catch (err) {
      console.error('Failed to copy address:', err);
      toast.show('Failed to copy address');
    }
  };

  return (
    <div>
      <div aria-label="Address" role="status">
        {address}
      </div>
      <button onClick={handleCopy} aria-label="Copy address">
        Copy
      </button>
      {copied && <span className="copied-indicator">Copied!</span>}
    </div>
  );
};

export default AddressDisplay;