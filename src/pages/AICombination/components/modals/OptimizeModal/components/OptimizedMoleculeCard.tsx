import type { OptimizedMoleculeResult } from '@/shared/types/molecule';
import React from 'react';

interface OptimizedMoleculeCardProps {
  data: OptimizedMoleculeResult;
  selected?: boolean;
  onSelect?: () => void;
}

const OptimizedMoleculeCard: React.FC<OptimizedMoleculeCardProps> = ({
  selected = false,
  onSelect,
  data,
}) => {
  const { base, delta } = data;

  const renderRow = (label: string, value: number, change: number) => {
    const isUp = change > 0;
    const isDown = change < 0;
    return (
      <div className="flex justify-between">
        <span>{label}</span>
        <div className="flex items-center">
          <span className="text-text-primary text-body14 pr-1">{value.toFixed(2)}</span>
          {change !== 0 && (
            <span
              className={`rounded px-1 ml-1 text-xs ${
                isUp
                  ? 'text-text-up bg-up-bg'
                  : isDown
                    ? 'text-text-down bg-down-bg'
                    : 'text-text-tertiary'
              }`}
            >
              {isUp ? `+${change.toFixed(2)}` : change.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    );
  };

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
        <div className="text-body16 text-text-primary break-all">{base.smiles}</div>
      </div>

      {/* 수치 테이블 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-text-secondary">
        {renderRow('독성', base.toxicity, delta.toxicity)}
        {renderRow('PKi', base.pKi, delta.pKi)}
        {renderRow('PKd', base.pKd, delta.pKd)}
        {renderRow('QED', base.qed, delta.qed)}
        {renderRow('logP', base.logP, delta.logP)}
        {renderRow('TPSA', base.tpsa, delta.tpsa)}
      </div>
    </div>
  );
};

export default OptimizedMoleculeCard;
