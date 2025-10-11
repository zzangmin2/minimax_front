import type {
  Molecule,
  CandidateMoleculeResult,
  MoleculeDelta,
  OptimizedMoleculeResult,
  DiseaseGeneratedScaffold,
  DiseaseScaffold,
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

// 10/11 실제 데이터기반 질병 관련 scaffold
export const MOCK_DISEASE_SCAFFOLD: DiseaseScaffold = {
  disease_molecule_name: 'IMATINIB',
  disease_Chembl_ID: 'CHEMBL941',
  disease_smiles: 'Cc1ccc(NC(=O)c2ccc(CN3CCN(C)CC3)cc2)cc1Nc1nccc(-c2cccnc2)n1',
  disease_scaffold: 'O=C(Nc1cccc(Nc2nccc(-c3cccnc3)n2)c1)c1ccc(CN2CCNCC2)cc1',
  disease_name: '위암',
  disease_formula: 'C29H31N7O',
  disease_mol_type: 'Small molecule',
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

// 10/11 실제 데이터기반 질병 후보 물질 scaffold
export const MOCK_DISEASE_GENERATED_SCAFFOLD: DiseaseGeneratedScaffold[] = [
  {
    dnew_molecule_id: 'new molecule0',
    dnew_smiles: '[C-1]#[N+1][C-1][S+1]CCC(C=NC=NC1=NOC=N1)CCC2OC=CO2',
    dnew_mol_image:
      '<PIL.PngImagePlugin.PngImageFile image mode=RGB size=300x300 at 0x270B8CDE140>',
    dnew_toxic_score: -3.91,
    dnew_mol_weight: 333.37,
    dnew_logp: 2.43,
    dnew_qed: 0.21,
    dnew_hbd: 0,
    dnew_hba: 7,
    dnew_pki: 7.99,
    dnew_pkd: 8.16,
    dnew_Chembl_ID: 'CHEMBL941',
    dnew_scaffold: 'O=C(Nc1cccc(Nc2nccc(-c3cccnc3)n2)c1)c1ccc(CN2CCNCC2)cc1',
    dnew_disease_name: '위암',
    dnew_created_date: 1760140800000,
  },
  {
    dnew_molecule_id: 'new molecule1',
    dnew_smiles: 'FC=CNC(OCN(NC1=NC=NC(Cl)=C1Cl)C=NO)OC',
    dnew_mol_image:
      '<PIL.PngImagePlugin.PngImageFile image mode=RGB size=300x300 at 0x270B8DB2D70>',
    dnew_toxic_score: -4.05,
    dnew_mol_weight: 355.16,
    dnew_logp: 1.76,
    dnew_qed: 0.15,
    dnew_hbd: 3,
    dnew_hba: 8,
    dnew_pki: 7.38,
    dnew_pkd: 9.88,
    dnew_Chembl_ID: 'CHEMBL941',
    dnew_scaffold: 'O=C(Nc1cccc(Nc2nccc(-c3cccnc3)n2)c1)c1ccc(CN2CCNCC2)cc1',
    dnew_disease_name: '위암',
    dnew_created_date: 1760140800000,
  },
  {
    dnew_molecule_id: 'new molecule2',
    dnew_smiles: 'ClC(C1=CC=CC=C1Br)=P=NON(NC=NN(C=C2N=NC=N2)N=CN=CN)C',
    dnew_mol_image:
      '<PIL.PngImagePlugin.PngImageFile image mode=RGB size=300x300 at 0x270B8DB4760>',
    dnew_toxic_score: -3.74,
    dnew_mol_weight: 500.69,
    dnew_logp: 2.78,
    dnew_qed: 0.23,
    dnew_hbd: 2,
    dnew_hba: 9,
    dnew_pki: 8.56,
    dnew_pkd: 14.14,
    dnew_Chembl_ID: 'CHEMBL941',
    dnew_scaffold: 'O=C(Nc1cccc(Nc2nccc(-c3cccnc3)n2)c1)c1ccc(CN2CCNCC2)cc1',
    dnew_disease_name: '위암',
    dnew_created_date: 1760140800000,
  },
  {
    dnew_molecule_id: 'new molecule3',
    dnew_smiles: '[C-1]#[N+1][N-1]CNNOC=NCOCCNN=NC1=NC(NN=NN=NN=N)=N1',
    dnew_mol_image:
      '<PIL.PngImagePlugin.PngImageFile image mode=RGB size=300x300 at 0x270B6BAB9D0>',
    dnew_toxic_score: -3.9,
    dnew_mol_weight: 380.32,
    dnew_logp: 0.13,
    dnew_qed: 0.07,
    dnew_hbd: 5,
    dnew_hba: 11,
    dnew_pki: 6.29,
    dnew_pkd: 20.09,
    dnew_Chembl_ID: 'CHEMBL941',
    dnew_scaffold: 'O=C(Nc1cccc(Nc2nccc(-c3cccnc3)n2)c1)c1ccc(CN2CCNCC2)cc1',
    dnew_disease_name: '위암',
    dnew_created_date: 1760140800000,
  },
  {
    dnew_molecule_id: 'new molecule4',
    dnew_smiles: 'Br[N+1]=CN=C(NC1=NC(=CC(OC=COCF)NN=CN1N)CCl)NON(COC=CC=N)F',
    dnew_mol_image:
      '<PIL.PngImagePlugin.PngImageFile image mode=RGB size=300x300 at 0x270B8DA51B0>',
    dnew_toxic_score: -3.78,
    dnew_mol_weight: 572.76,
    dnew_logp: 0.32,
    dnew_qed: 0.03,
    dnew_hbd: 5,
    dnew_hba: 12,
    dnew_pki: 9.78,
    dnew_pkd: 13.13,
    dnew_Chembl_ID: 'CHEMBL941',
    dnew_scaffold: 'O=C(Nc1cccc(Nc2nccc(-c3cccnc3)n2)c1)c1ccc(CN2CCNCC2)cc1',
    dnew_disease_name: '위암',
    dnew_created_date: 1760140800000,
  },
];

// 모달에서 사용되는 부분들 --------------------------------
// 추가 최적화 결과 데이터
export const MOCK_OPTIMIZED: CandidateMoleculeResult[] = [
  {
    smiles: 'CC(=O)NC1O)C=C1',
    toxicity: 0.37,
    pKi: 8.06,
    pKd: 9.01,
    logP: 3.46,
    qed: 0.66,
    tpsa: 34,
  },
  {
    smiles: 'CC(=O)NC1O)C=C1',
    toxicity: 0.37,
    pKi: 8.06,
    pKd: 9.01,
    logP: 3.46,
    qed: 0.66,
    tpsa: 34,
  },
  {
    smiles: 'CC(=O)NC1O)C=C1',
    toxicity: 0.37,
    pKi: 8.06,
    pKd: 9.01,
    logP: 3.46,
    qed: 0.66,
    tpsa: 34,
  },
  {
    smiles: 'CC(=O)NC1O)C=C1',
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
