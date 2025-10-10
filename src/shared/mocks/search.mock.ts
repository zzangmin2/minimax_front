import type { SearchRecord } from '@/shared/contexts/SearchHistoryContext';
import { MOCK_DISEASE_SCAFFOLD } from '@/shared/mocks/molecule.mock';

/** 검색 기록 목업 데이터 */
export const MOCK_SEARCH_HISTORY: SearchRecord[] = [
  {
    id: '1',
    query: 'Aspirin',
    timestamp: new Date(),
    results: {
      Smiles: MOCK_DISEASE_SCAFFOLD.disease_smiles,
      ID: MOCK_DISEASE_SCAFFOLD.disease_Chembl_ID,
      Name: MOCK_DISEASE_SCAFFOLD.disease_molecule_name,
      MaxPhase: 'Phase 3',
      MolecularFormula: MOCK_DISEASE_SCAFFOLD.disease_formula,
      MolecularWeight: '493.60',
      MoleculeType: MOCK_DISEASE_SCAFFOLD.disease_mol_type,
    },
  },
  {
    id: '2',
    query: 'Ibuprofen',
    timestamp: new Date(),
    results: {
      Smiles: MOCK_DISEASE_SCAFFOLD.disease_smiles,
      ID: MOCK_DISEASE_SCAFFOLD.disease_Chembl_ID,
      Name: MOCK_DISEASE_SCAFFOLD.disease_molecule_name,
      MaxPhase: 'Phase 3',
      MolecularFormula: MOCK_DISEASE_SCAFFOLD.disease_formula,
      MolecularWeight: '493.60',
      MoleculeType: MOCK_DISEASE_SCAFFOLD.disease_mol_type,
    },
  },
];
