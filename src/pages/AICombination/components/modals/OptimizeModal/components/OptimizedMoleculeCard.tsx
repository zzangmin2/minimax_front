import React from 'react';

interface OptimizedMoleculeCardProps {
  selected?: boolean;
  onSelect?: () => void;
}

const OptimizedMoleculeCard: React.FC<OptimizedMoleculeCardProps> = ({
  selected = false,
  onSelect,
}) => {
  return (
    <div
      className={`relative border rounded-xl p-5 bg-white transition cursor-pointer ${
        selected ? 'border-primary shadow-md' : 'border-line hover:shadow-sm'
      }`}
      onClick={onSelect}
    >
      {/* 선택 라디오 표시 */}
      <div
        className={`absolute top-3 left-3 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected ? 'border-primary' : 'border-line'
        }`}
      >
        {selected && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
      </div>

      {/* 분자 구조 이미지 */}
      <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-4">
        <div className="w-40 h-20 bg-gray-50 border border-line flex items-center justify-center rounded">
          <span className="text-xs text-text-primary">구조 이미지</span>
        </div>
        <div className="text-body16 text-text-primary break-all">CC(=O)NC1=CC=C(O)C=C1</div>
      </div>

      {/* 수치 테이블 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-text-secondary">
        {/* 왼쪽 열 */}
        <div className="flex justify-between">
          <span>독성</span>
          <div>
            <span className="text-text-primary text-body14 pr-1">0.37</span>
            <span className="text-text-up bg-up-bg rounded px-1 ml-1">+0.2</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>PKi</span>
          <div>
            <span className="text-text-primary text-body14 pr-1">8.06</span>
            <span className="text-text-up bg-up-bg rounded px-1 ml-1">+0.2</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>PKd</span>
          <div>
            <span className="text-text-primary text-body14 pr-1">9.01</span>
            <span className="text-text-down bg-down-bg rounded px-1 ml-1">-0.2</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>QED</span>
          <div>
            <span className="text-text-primary text-body14 pr-1">8.06</span>
            <span className="text-text-up bg-up-bg rounded px-1 ml-1">+0.2</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>logP</span>
          <div>
            <span className="text-text-primary text-body14 pr-1">3.46</span>
            <span className="text-text-down bg-down-bg rounded px-1 ml-1">-0.2</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>TPSA</span>
          <div>
            <span className="text-text-primary text-body14 pr-1">8.06</span>
            <span className="text-text-up bg-up-bg rounded px-1 ml-1">+0.2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedMoleculeCard;
