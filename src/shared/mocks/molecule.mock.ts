import type {
  Molecule,
  CandidateMoleculeResult,
  MoleculeDelta,
  OptimizedMoleculeResult,
} from '@/shared/types/molecule';

// 기본 molecule 데이터. 입력 받은 분자 정보
export const MOCK_MOLECULE: Molecule = {
  id: 'CHEMBL1381',
  name: 'O-TOLYLAMINE',
  smiles: 'CC1=CC=CC=C1N',
  molecularFormula: 'C7H9N',
  molecularWeight: '107.16',
  moleculeType: 'Small molecule',
  maxPhase: 'Preclinical',
};

// 기본 후보물질 데이터
export const MOCK_OPTIMIZED_MOLECULE_RESULTS: CandidateMoleculeResult[] = [
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

// 추가 최적화 결과 데이터
export const MOCK_OPTIMIZED: CandidateMoleculeResult[] = [
  {
    smiles: 'CC(=O)NC1최적화(O)C=C1',
    toxicity: 0.37,
    pKi: 8.06,
    pKd: 9.01,
    logP: 3.46,
    qed: 0.66,
    tpsa: 34,
  },
  {
    smiles: 'CC(=O)NC1최적화(O)C=C1',
    toxicity: 0.37,
    pKi: 8.06,
    pKd: 9.01,
    logP: 3.46,
    qed: 0.66,
    tpsa: 34,
  },
  {
    smiles: 'CC(=O)NC1최적화(O)C=C1',
    toxicity: 0.37,
    pKi: 8.06,
    pKd: 9.01,
    logP: 3.46,
    qed: 0.66,
    tpsa: 34,
  },
  {
    smiles: 'CC(=O)NC1최적화(O)C=C1',
    toxicity: 0.37,
    pKi: 8.06,
    pKd: 9.01,
    logP: 3.46,
    qed: 0.66,
    tpsa: 34,
  },
];

// 추가 최적화 결과 데이터 변화량 (delta)
export const MOCK_DELTAS: MoleculeDelta[] = [
  {
    toxicity: +0.2,
    pKi: +0.2,
    pKd: -0.2,
    logP: -0.2,
    qed: +0.2,
    tpsa: +0.2,
  },
  {
    toxicity: +0.2,
    pKi: +0.2,
    pKd: -0.2,
    logP: -0.2,
    qed: +0.2,
    tpsa: +0.2,
  },
  {
    toxicity: +0.2,
    pKi: +0.2,
    pKd: -0.2,
    logP: -0.2,
    qed: +0.2,
    tpsa: +0.2,
  },
  {
    toxicity: +0.2,
    pKi: +0.2,
    pKd: -0.2,
    logP: -0.2,
    qed: +0.2,
    tpsa: +0.2,
  },
];

// 최적화 결과 (MOCK_OPTIMIZED+MOCK_DELTAS 병합)
export const MOCK_OPTIMIZED_RESULTS: OptimizedMoleculeResult[] = MOCK_OPTIMIZED.map(
  (candidate, idx) => ({
    base: candidate,
    delta: MOCK_DELTAS[idx] || MOCK_DELTAS[0],
  })
);
