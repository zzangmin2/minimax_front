// src/shared/types/molecule.ts

/** 개별 분자 정보 타입 */
export interface Molecule {
  /** 분자 고유 ID (예: CHEMBL1381) */
  id: string;
  /** 분자 이름 (예: O-TOLYLAMINE) */
  name: string;
  /** SMILES 문자열 */
  smiles: string;
  /** 화학식 (예: C7H9N) */
  molecularFormula: string;
  /** 분자량 */
  molecularWeight: string;
  /** 분자 유형 (예: Small molecule) */
  moleculeType: string;
  /** 개발 단계 (예: Preclinical, Phase 1, etc.) */
  maxPhase: string;
}

/** 후보 분자 (기본 수치 데이터) */
export interface CandidateMoleculeResult {
  smiles: string;
  toxicity: number;
  pKi: number;
  pKd: number;
  logP: number;
  qed: number;
  tpsa: number;
}

/** 변화량(delta) 정보만 따로 */
export interface MoleculeDelta {
  toxicity: number;
  pKi: number;
  pKd: number;
  logP: number;
  qed: number;
  tpsa: number;
}

/** 최적화 결과 (후보 + 변화량 병합형. 최적화 모달에서 사용됨) */
export interface OptimizedMoleculeResult {
  base: CandidateMoleculeResult; // 기준값
  delta: MoleculeDelta; // 변화량
}
