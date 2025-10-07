import { http } from './http';
import type {
  Molecule,
  CandidateMoleculeResult,
  OptimizedMoleculeResult,
} from '@/shared/types/molecule';

// 전체 Molecule 목록
export const fetchMolecules = async (): Promise<Molecule[]> => {
  return http.get<Molecule[]>('/molecules');
};

// 특정 Molecule 상세
export const fetchMolecule = async (id: string): Promise<Molecule> => {
  return http.get<Molecule>(`/molecules/${id}`);
};

// 최적화 결과 목록
export const fetchOptimizations = async (targetId?: string): Promise<CandidateMoleculeResult[]> => {
  return http.get<CandidateMoleculeResult[]>('/optimizations', { targetId });
};

// 최적화 실행 (새 데이터 생성)
export const createOptimization = async (payload: {
  targetId: string;
  params?: Record<string, unknown>;
}): Promise<OptimizedMoleculeResult> => {
  return http.post<OptimizedMoleculeResult>('/optimizations', payload);
};
