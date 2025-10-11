import { useState } from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';
import OptimizeModal from '@/pages/AICombination/components/modals/OptimizeModal';
import type { Molecule } from '@/shared/types/molecule';
import { MOCK_DISEASE_GENERATED_SCAFFOLD } from '@/shared/mocks/molecule.mock';
import { useOptimizationsQuery } from '@/shared/hooks/useMoleculeQueries';

const CandidateMoleculeResult = () => {
  const { activeRecord } = useSearchHistory();
  const [openOptimizedModal, setOpenOptimizedModal] = useState(false);

  // 활성화된 기록이 없으면 기본값 사용
  const summary: Molecule | null = activeRecord?.results
    ? {
        id: activeRecord.results.ID,
        name: activeRecord.results.Name,
        maxPhase: activeRecord.results.MaxPhase,
        molecularFormula: activeRecord.results.MolecularFormula,
        molecularWeight: activeRecord.results.MolecularWeight,
        moleculeType: activeRecord.results.MoleculeType,
        smiles: activeRecord.results.Smiles,
      }
    : null;

  // Hook은 항상 같은 순서로 호출되어야 하므로 조건부로 호출하지 않음
  const { data: candidates, isLoading, error } = useOptimizationsQuery(summary?.id || '');

  // summary가 없는 경우 안내 메시지 표시
  if (!summary) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-text-tertiary text-3xl mb-4">
            <i className="fas fa-flask"></i>
          </div>
          <h3 className="text-body16 text-text-secondary mb-2">분석할 분자를 선택해주세요</h3>
          <p className="text-body14 text-text-tertiary">
            좌측 검색 기록에서 분자를 클릭하면
            <br />
            후보 분자 결과를 확인할 수 있습니다.
          </p>
        </div>
      </div>
    );
  }

  console.log(candidates);

  return (
    <div className="h-full pt-6 px-4 md:px-8 lg:px-12 space-y-6 overflow-y-auto overflow-x-hidden">
      {/* Summary Card */}
      <div className="bg-white rounded-lg p-6">
        <p className="text-body14 text-text-tertiary mb-2">SMILES 정보</p>
        <h1 className="text-title mb-4">{summary.smiles}</h1>
        <div className="bg-background rounded-lg p-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-500">ID</span>{' '}
            <span className="font-medium">{summary.id}</span>
          </div>
          {/* <div>
            <span className="text-gray-500">Max Phase</span>{' '}
            <span className="font-medium">{summary.maxPhase}</span>
          </div>
          <div>
            <span className="text-gray-500">Molecular Weight</span>{' '}
            <span className="font-medium">{summary.molecularWeight}</span>
          </div> */}
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
        {isLoading && <div className="text-gray-500">불러오는 중…</div>}
        {error && <div className="text-red-500">목업 서버 응답 오류</div>}
        <div className="text-body14 text-text-secondary">
          총 {MOCK_DISEASE_GENERATED_SCAFFOLD.length}개의 후보물질
        </div>
        {MOCK_DISEASE_GENERATED_SCAFFOLD.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-4 flex flex-col lg:flex-row items-start gap-4 overflow-hidden"
          >
            {/* Left: SMILES */}
            <div className="flex flex-col sm:flex-row items-start gap-4 flex-1 min-w-0">
              <div className="w-40 h-20 bg-gray-100 flex items-center justify-center rounded flex-shrink-0 overflow-hidden">
                <img
                  src="/src/assets/ex_smiles.png"
                  alt="분자 구조"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-body16 break-all min-w-0 overflow-hidden">
                {item.dnew_smiles}
              </div>
            </div>

            {/* Middle: Property Info */}
            <div className="w-full lg:w-80 bg-tertiary p-4 rounded-lg grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm min-w-0">
              <div>
                <span className="text-gray-500">독성</span>{' '}
                <span className="font-medium text-red-500">{item.dnew_toxic_score}</span>
              </div>
              <div>
                <span className="text-gray-500">PKi</span>{' '}
                <span className="font-medium">{item.dnew_pki}</span>
              </div>
              <div>
                <span className="text-gray-500">PKd</span>{' '}
                <span className="font-medium">{item.dnew_pkd}</span>
              </div>
              <div>
                <span className="text-gray-500">QED</span>{' '}
                <span className="font-medium">{item.dnew_qed}</span>
              </div>
              <div>
                <span className="text-gray-500">logP</span>{' '}
                <span className="font-medium">{item.dnew_logp}</span>
              </div>
              {/* <div>
                <span className="text-gray-500">TPSA</span>{' '}
                <span className="font-medium">{item.dnew_tpsa}</span>
              </div> */}
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
