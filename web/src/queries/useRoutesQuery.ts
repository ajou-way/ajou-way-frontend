import { useQuery } from '@tanstack/react-query';

import { getRoutes, GetRoutesResponse } from '@/apis/map';

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
    refetchOnWindowFocus: false,
  });

  const formatRoutes = (result: GetRoutesResponse[]) => {
    if (result.length === 0) return [];

    return result[0].nodes.map(({ lat, lng }) => {
      const coords = naver.maps.TransCoord.fromEPSG3857ToLatLng(new naver.maps.Point(lng, lat));
      return new naver.maps.LatLng(coords.y, coords.x);
    });
  };

  return { routes: formatRoutes(data?.result ?? []), refetch };
};
