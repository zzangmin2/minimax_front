import type { Molecule } from '@/shared/types/molecule';

/** 기본 Molecule 목업 데이터 (초기 렌더링 시 표시용) */
export const MOCK_MOLECULE: Molecule = {
  id: 'CHEMBL1381',
  name: 'O-TOLYLAMINE',
  smiles: 'CC1=CC=CC=C1N',
  molecularFormula: 'C7H9N',
  molecularWeight: '107.16',
  moleculeType: 'Small molecule',
  maxPhase: 'Preclinical',
};

/** 예시: 최적화 결과 후보 데이터 (목업용) */
export const MOCK_OPTIMIZED_RESULTS = [
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
    smiles: 'CC(=O)NC1=CC=C(O)C=C1\nCC(=O)NC1=CC=C(O)C=C1',
    toxicity: 0.37,
    pKi: 8.06,
    pKd: 9.01,
    logP: 3.46,
    qed: 0.66,
    tpsa: 34,
  },
];
