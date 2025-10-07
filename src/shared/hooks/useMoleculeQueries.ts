// src/shared/hooks/useMoleculeQueries.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchMolecules,
  fetchMolecule,
  fetchOptimizations,
  createOptimization,
} from '@/shared/api/molecule';

export const useMoleculesQuery = () =>
  useQuery({
    queryKey: ['molecules'],
    queryFn: fetchMolecules,
  });

export const useMoleculeQuery = (id: string) =>
  useQuery({
    queryKey: ['molecule', id],
    queryFn: () => fetchMolecule(id),
    enabled: !!id,
  });

export const useOptimizationsQuery = (targetId?: string) =>
  useQuery({
    queryKey: ['optimizations', targetId],
    queryFn: () => fetchOptimizations(targetId),
  });

export const useCreateOptimizationMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createOptimization,
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ['optimizations', variables.targetId] });
    },
  });
};
