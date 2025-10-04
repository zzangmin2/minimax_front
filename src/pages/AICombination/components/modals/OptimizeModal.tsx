import React from 'react';

interface OptimizeModalProps {
  open: boolean;
  onClose: () => void;
}

const OptimizeModal: React.FC<OptimizeModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black/50" onClick={onClose}></div>
  );
};

export default OptimizeModal;
