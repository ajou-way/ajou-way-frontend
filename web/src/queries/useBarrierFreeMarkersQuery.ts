import { useQuery } from '@tanstack/react-query';

import { getBarrierFreeMarkers } from '@/apis/barrierFree';

const useBarrierFreeMarkersQuery = () => {
  const { data } = useQuery({
    queryKey: ['barrierFreeMarkers'],
    queryFn: getBarrierFreeMarkers,
  });

  return { markers: data?.markers ?? [] };
};

export default useBarrierFreeMarkersQuery;
