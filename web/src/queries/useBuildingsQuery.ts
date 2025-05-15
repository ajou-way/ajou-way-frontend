import { useQuery } from '@tanstack/react-query';

import { getMarkers } from '@/apis/map';

export const useBuildingsQuery = () => {
  const { data } = useQuery({
    queryKey: ['markers'],
    queryFn: getMarkers,
  });

  return { buildings: data?.result ?? [] };
};
