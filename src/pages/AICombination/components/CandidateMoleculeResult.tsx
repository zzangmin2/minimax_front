import React, { useState } from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';
import OptimizeModal from '@/pages/AICombination/components/modals/OptimizeModal';
import type { Molecule } from '@/shared/types/molecule';
import { MOCK_MOLECULE } from '@/shared/mocks/molecule.mock';

const CandidateMoleculeResult = () => {
  const { activeRecord } = useSearchHistory();
  const [openOptimizedModal, setOpenOptimizedModal] = useState(false);

  // 활성화된 기록이 없으면 기본값 사용
  const summary: Molecule = activeRecord?.results
    ? {
        id: activeRecord.results.ID ?? MOCK_MOLECULE.id,
        name: activeRecord.results.Name ?? MOCK_MOLECULE.name,
        maxPhase: activeRecord.results.MaxPhase ?? MOCK_MOLECULE.maxPhase,
        molecularFormula: activeRecord.results.MolecularFormula ?? MOCK_MOLECULE.molecularFormula,
        molecularWeight: activeRecord.results.MolecularWeight ?? MOCK_MOLECULE.molecularWeight,
        moleculeType: activeRecord.results.MoleculeType ?? MOCK_MOLECULE.moleculeType,
        smiles: activeRecord.results.Smiles ?? MOCK_MOLECULE.smiles,
      }
    : MOCK_MOLECULE;

  const candidates = [
    {
      smiles: 'CC(=O)NC1=CC=C(O)C=C1',
      toxicity: 0.37,
      pKi: 8.06,
      pKd: 9.01,
      logP: 3.46,
      qed: 0.66,
      tpsa: 34,
    },
    {
      smiles: 'CC(=O)NC1=CC=C(O)C=C1\nCC(=O)NC1=CC=C(O)C=C1\nCC(=O)NC1=CC=C(O)C=C1',
      toxicity: 0.37,
      pKi: 8.06,
      pKd: 9.01,
      logP: 3.46,
      qed: 0.66,
      tpsa: 34,
    },
    {
      smiles: 'CC(=O)NC1=CC=C(O)C=C1',
      toxicity: 0.37,
      pKi: 8.06,
      pKd: 9.01,
      logP: 3.46,
      qed: 0.66,
      tpsa: 34,
    },
    {
      smiles: 'CC(=O)NC1=CC=C(O)C=C1',
      toxicity: 0.37,
      pKi: 8.06,
      pKd: 9.01,
      logP: 3.46,
      qed: 0.66,
      tpsa: 34,
    },
    {
      smiles: 'CC(=O)NC1=CC=C(O)C=C1',
      toxicity: 0.37,
      pKi: 8.06,
      pKd: 9.01,
      logP: 3.46,
      qed: 0.66,
      tpsa: 34,
    },
  ];

  return (
    <div className="h-full pt-6 px-4 md:px-8 lg:px-12 space-y-6 overflow-y-auto overflow-x-hidden">
      {/* Summary Card */}
      <div className="bg-white rounded-lg p-6">
        <div className="text-lg font-semibold mb-4">{summary.smiles}</div>
        <div className="bg-background rounded-lg p-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-500">ID</span>{' '}
            <span className="font-medium">{summary.id}</span>
          </div>
          <div>
            <span className="text-gray-500">Max Phase</span>{' '}
            <span className="font-medium">{summary.maxPhase}</span>
          </div>
          <div>
            <span className="text-gray-500">Molecular Weight</span>{' '}
            <span className="font-medium">{summary.molecularWeight}</span>
          </div>
          <div>
            <span className="text-gray-500">Name</span>{' '}
            <span className="font-medium">{summary.name}</span>
          </div>
          <div>
            <span className="text-gray-500">Molecular Formula</span>{' '}
            <span className="font-medium">{summary.molecularFormula}</span>
          </div>
          <div>
            <span className="text-gray-500">Molecule Type</span>{' '}
            <span className="font-medium">{summary.moleculeType}</span>
          </div>
        </div>
      </div>

      {/* Candidate List */}
      <div className="space-y-4">
        <div className="text-sm text-gray-600">총 {candidates.length}개</div>
        {candidates.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-4 flex flex-col lg:flex-row items-start gap-4 overflow-hidden"
          >
            {/* Left: SMILES */}
            <div className="flex flex-col sm:flex-row items-start gap-4 flex-1 min-w-0">
              <div className="w-40 h-20 bg-gray-100 flex items-center justify-center rounded flex-shrink-0">
                <span className="text-xs text-gray-400">구조 이미지</span>
              </div>
              <div className="flex-1 text-body16 break-all min-w-0 overflow-hidden">
                {item.smiles}
              </div>
            </div>

            {/* Middle: Property Info */}
            <div className="w-full lg:w-80 bg-tertiary p-4 rounded-lg grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm min-w-0">
              <div>
                <span className="text-gray-500">독성</span>{' '}
                <span className="font-medium text-red-500">{item.toxicity}</span>
              </div>
              <div>
                <span className="text-gray-500">PKi</span>{' '}
                <span className="font-medium">{item.pKi}</span>
              </div>
              <div>
                <span className="text-gray-500">PKd</span>{' '}
                <span className="font-medium">{item.pKd}</span>
              </div>
              <div>
                <span className="text-gray-500">QED</span>{' '}
                <span className="font-medium">{item.qed}</span>
              </div>
              <div>
                <span className="text-gray-500">logP</span>{' '}
                <span className="font-medium">{item.logP}</span>
              </div>
              <div>
                <span className="text-gray-500">TPSA</span>{' '}
                <span className="font-medium">{item.tpsa}</span>
              </div>
            </div>

            <button
              className="w-20 bg-primary text-white py-2 px-4 rounded-lg cursor-pointer"
              onClick={() => setOpenOptimizedModal(true)}
            >
              최적화
            </button>
          </div>
        ))}
      </div>
      <div className="h-20"></div>

      {/* 최적화 모달 */}
      <OptimizeModal open={openOptimizedModal} onClose={() => setOpenOptimizedModal(false)} />
    </div>
  );
};

export default CandidateMoleculeResult;
