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
