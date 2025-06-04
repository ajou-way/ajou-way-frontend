import { useQuery } from '@tanstack/react-query';

import { getAdminMarkers } from '@/apis/map';

export const useAdminMarkersQuery = () => {
  const { data } = useQuery({
    queryKey: ['adminMarkers'],
    queryFn: getAdminMarkers,
  });

  return { adminMarkers: data?.result ?? [] };
};
