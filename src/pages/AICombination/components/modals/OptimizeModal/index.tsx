import React, { useState } from 'react';
import OptimizedMoleculeCard from '@/pages/AICombination/components/modals/OptimizeModal/components/OptimizedMoleculeCard';

interface OptimizeModalProps {
  open: boolean;
  onClose: () => void;
}

const OptimizeModal: React.FC<OptimizeModalProps> = ({ open, onClose }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(0);

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
        <div className="flex items-center justify-between mb-4 text-text-primary flex-shrink-0">
          <h1 className="text-title">분자 최적화</h1>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <i className="fas fa-close w-5 " />
          </button>
        </div>

        <div className=" overflow-y-scroll flex-1">
          <div className="flex-1 mb-10">
            <div className="flex items-center justify-between text-body16 h-50 w-full bg-background text-text-tertiary">
              최적화 대상 분자 영역 (디자인 미정)
            </div>
          </div>

          <p className="text-text-secondary text-body14 mb-5">
            {' '}
            총 n개의 분자가 최적화 대상입니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((_, idx) => (
              <OptimizedMoleculeCard
                key={idx}
                selected={selectedIdx === idx}
                onSelect={() => setSelectedIdx(idx)}
              />
            ))}
          </div>
        </div>
        <div className="sticky bottom-0 bg-white pt-4">
          <button
            className="w-full bg-primary text-white text-body16 py-3 rounded-lg hover:bg-primary-hover transition cursor-pointer"
            onClick={() => alert('최적화된 분자 선택 완료')}
          >
            선택
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptimizeModal;
