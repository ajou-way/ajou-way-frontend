import { useQuery } from '@tanstack/react-query';

import { getRoutes } from '@/apis/map';

export const useRoutesQuery = (startCoords: number[], endCoords: number[]) => {
  const { data, refetch } = useQuery({
    queryKey: ['routes', startCoords, endCoords],
    queryFn: () =>
      getRoutes({
        startLat: startCoords[0],
        startLng: startCoords[1],
        endLat: endCoords[0],
        endLng: endCoords[1],
      }),
    enabled: false, // @MEMO: 자동 실행 방지
    refetchOnWindowFocus: false,
  });

  return { routes: data?.result ?? [], refetch };
};
