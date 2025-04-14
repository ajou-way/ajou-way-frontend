import { useQuery } from '@tanstack/react-query';

import { getMarkers } from '@/apis/map';

export const useMarkersQuery = () => {
  const { data } = useQuery({
    queryKey: ['markers'],
    queryFn: getMarkers,
  });

  return { markers: data?.markers ?? [] };
};
