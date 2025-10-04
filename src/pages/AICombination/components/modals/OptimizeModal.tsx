import React from 'react';

interface OptimizeModalProps {
  open: boolean;
  onClose: () => void;
}

const OptimizeModal: React.FC<OptimizeModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl mt-10 p-8 w-[720px] h-[320px] max-w-[90%] shadow-lg"
        onClick={e => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default OptimizeModal;
