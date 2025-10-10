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

/** 질병별 분자 스캐폴드 정보 */
export interface DiseaseScaffold {
  /** 분자 이름 (예: IMATINIB) */
  disease_molecule_name: string;
  /** ChEMBL ID (예: CHEMBL941) */
  disease_Chembl_ID: string;
  /** SMILES 문자열 */
  disease_smiles: string;
  /** 스캐폴드 구조 */
  disease_scaffold: string;
  /** 질병명 (예: 위암) */
  disease_name: string;
  /** 분자식 (예: C29H31N7O) */
  disease_formula: string;
  /** 분자 타입 (예: Small molecule) */
  disease_mol_type: string;
}

/** 질병별 생성된 스캐폴드 정보 */
export interface DiseaseGeneratedScaffold {
  /** 새로운 분자 ID */
  dnew_molecule_id: string;
  /** 새로운 SMILES 문자열 */
  dnew_smiles: string;
  /** 분자 이미지 (PIL 이미지 객체 문자열) */
  dnew_mol_image: string;
  /** 독성 점수 */
  dnew_toxic_score: number;
  /** 분자량 */
  dnew_mol_weight: number;
  /** LogP 값 */
  dnew_logp: number;
  /** QED 점수 */
  dnew_qed: number;
  /** 수소 결합 공여체 개수 */
  dnew_hbd: number;
  /** 수소 결합 수용체 개수 */
  dnew_hba: number;
  /** pKi 값 */
  dnew_pki: number;
  /** pKd 값 */
  dnew_pkd: number;
  /** ChEMBL ID */
  dnew_Chembl_ID: string;
  /** 스캐폴드 구조 */
  dnew_scaffold: string;
  /** 질병명 */
  dnew_disease_name: string;
  /** 생성 날짜 (타임스탬프) */
  dnew_created_date: number;
}
