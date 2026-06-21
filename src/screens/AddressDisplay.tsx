import React, { useState } from 'react';
import { useToast } from '@components/ui/useToast';

const AddressDisplay: React.FC<{ address: string }> = ({ address }) => {
  const [copied, setCopied] = useState(false);
  const showToast = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      showToast('Copied!');
    } catch (err) {
      console.error('Failed to copy address:', err);
      setCopied(false);
    }
  };

  return (
    <div>
      <div aria-label="Address" role="status">
        {address}
      </div>
      <button
        aria-label="Copy address"
        onClick={handleCopy}
        className="mt-2 text-sm text-blue-500 hover:underline"
      >
        Copy
      </button>
      {copied && <span className="text-xs text-green-500">Copied!</span>}
    </div>
  );
};

export default AddressDisplay;