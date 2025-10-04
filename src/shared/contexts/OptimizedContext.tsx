import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

/* -------------------------------------------------------
 * 1. 타입 정의
 * -----------------------------------------------------*/

// 개별 분자 정보 타입
export interface Molecule {
  id: string;
  name: string;
  smiles: string;
  molecularFormula: string;
  molecularWeight: number;
  moleculeType: string;
  maxPhase: string;
}

// 최적화 결과 항목 타입
export interface OptimizedResult {
  id: string;
  smiles: string;
  toxicity: number;
  pKi: number;
  pKd: number;
  logP: number;
  qed: number;
  tpsa: number;
  delta?: {
    toxicity?: number;
    pKi?: number;
    pKd?: number;
    logP?: number;
    qed?: number;
    tpsa?: number;
  };
}

/* -------------------------------------------------------
 * 2. Context Value 타입
 * -----------------------------------------------------*/
interface OptimizedContextType {
  targetMolecule: Molecule | null;
  setTargetMolecule: (molecule: Molecule | null) => void;

  optimizedResults: OptimizedResult[];
  setOptimizedResults: (results: OptimizedResult[]) => void;

  selectedResult: OptimizedResult | null;
  setSelectedResult: (result: OptimizedResult | null) => void;
}

/* -------------------------------------------------------
 * 3. Context 생성
 * -----------------------------------------------------*/
const OptimizedContext = createContext<OptimizedContextType | undefined>(undefined);

export { OptimizedContext };

/* -------------------------------------------------------
 * 4. Provider 정의
 * -----------------------------------------------------*/
export const OptimizedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [targetMolecule, setTargetMolecule] = useState<Molecule | null>(null);
  const [optimizedResults, setOptimizedResults] = useState<OptimizedResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<OptimizedResult | null>(null);

  return (
    <OptimizedContext.Provider
      value={{
        targetMolecule,
        setTargetMolecule,
        optimizedResults,
        setOptimizedResults,
        selectedResult,
        setSelectedResult,
      }}
    >
      {children}
    </OptimizedContext.Provider>
  );
};
