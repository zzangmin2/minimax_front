import React from 'react';
import SelectOptimizedMoleculeBtn from '@/pages/AICombination/components/modals/OptimizeModal/components/SelectOptimizedMoleculeBtn';

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
        className="bg-white rounded-xl mt-10 p-8 w-[1200px] h-[700px] max-w-[90%] shadow-lg flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 text-text-secondary flex-shrink-0">
          <h1 className="text-title">분자 최적화</h1>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <i className="fas fa-close w-5 " />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between text-body16 h-50 w-full bg-background text-text-tertiary">
            최적화 대상 분자 영역 (디자인 미정)
          </div>
        </div>

        <SelectOptimizedMoleculeBtn />
      </div>
    </div>
  );
};

export default OptimizeModal;
