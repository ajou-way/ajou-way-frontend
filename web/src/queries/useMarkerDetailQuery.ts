import { useQuery } from '@tanstack/react-query';

import { getMarkerDetail } from '@/apis/map';

export const useMarkerDetailQuery = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['markerDetail', id],
    queryFn: () => getMarkerDetail(id),
  });

  return { name: data?.detail?.name ?? '', isLoading };
};
