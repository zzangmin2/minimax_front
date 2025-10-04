import type { SearchRecord } from '@/shared/contexts/SearchHistoryContext';
import { MOCK_MOLECULE } from '@/shared/mocks/molecule.mock';

/** 검색 기록 목업 데이터 */
export const MOCK_SEARCH_HISTORY: SearchRecord[] = [
  {
    id: '1',
    query: 'Aspirin',
    timestamp: new Date(),
    results: {
      Smiles: MOCK_MOLECULE.smiles,
      ID: MOCK_MOLECULE.id,
      Name: MOCK_MOLECULE.name,
      MaxPhase: MOCK_MOLECULE.maxPhase,
      MolecularFormula: MOCK_MOLECULE.molecularFormula,
      MolecularWeight: MOCK_MOLECULE.molecularWeight.toString(),
      MoleculeType: MOCK_MOLECULE.moleculeType,
    },
  },
  {
    id: '2',
    query: 'Ibuprofen',
    timestamp: new Date(),
    results: {
      Smiles: MOCK_MOLECULE.smiles,
      ID: MOCK_MOLECULE.id,
      Name: MOCK_MOLECULE.name,
      MaxPhase: MOCK_MOLECULE.maxPhase,
      MolecularFormula: MOCK_MOLECULE.molecularFormula,
      MolecularWeight: MOCK_MOLECULE.molecularWeight.toString(),
      MoleculeType: MOCK_MOLECULE.moleculeType,
    },
  },
];
