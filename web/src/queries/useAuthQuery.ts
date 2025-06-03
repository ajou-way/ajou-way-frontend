import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/apis/auth';

export const useAuthQuery = () => {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  return { profile: data ?? null };
};
