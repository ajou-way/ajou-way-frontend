import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useMap } from '@/hooks/useMap';

import { useRoutesQuery } from '@/queries/useRoutesQuery';

export const useRoutesMap = () => {
  const { startCoords, endCoords } = useGetSearchParams();

  const { map, mapRef } = useMap({
    latitude: (startCoords[0] + endCoords[0]) / 2,
    longitude: (startCoords[1] + endCoords[1]) / 2,
    zoom: 18,
  });

  const { routes } = useRoutesQuery(startCoords, endCoords);

  useEffect(() => {
    if (!map) return;
    if (routes.length === 0) return;

    // @MEMO: 길찾기 경로 설정
    new naver.maps.Polyline({
      map: map,
      path: routes,
      strokeColor: '#5d8fd3',
      strokeWeight: 4,
      strokeLineCap: 'round',
      strokeLineJoin: 'round',
      startIcon: naver.maps.PointingIcon.CIRCLE,
      endIcon: naver.maps.PointingIcon.OPEN_ARROW,
      endIconSize: 14,
    });
  }, [map, routes]);

  return { map, mapRef };
};

export const useGetSearchParams = () => {
  const [searchParams] = useSearchParams();

  const startLat = searchParams.get('startLat');
  const startLng = searchParams.get('startLng');

  const endLat = searchParams.get('endLat');
  const endLng = searchParams.get('endLng');

  const departure = searchParams.get('departure');
  const arrival = searchParams.get('arrival');

  const startCoords = [Number(startLat ?? '0'), Number(startLng ?? '0')];
  const endCoords = [Number(endLat ?? '0'), Number(endLng ?? '0')];

  return { departure, arrival, startCoords, endCoords };
};
