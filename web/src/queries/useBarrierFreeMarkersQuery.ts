import { useQuery } from '@tanstack/react-query';

import { getBarrierFreeMarkers } from '@/apis/map';

export const useBarrierFreeMarkersQuery = () => {
  const { data } = useQuery({
    queryKey: ['barrierFreeMarkers'],
    queryFn: getBarrierFreeMarkers,
  });

  return { markers: data?.markers ?? [] };
};
