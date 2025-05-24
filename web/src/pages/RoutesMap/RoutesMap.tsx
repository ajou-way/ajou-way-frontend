import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import RoutingBar from '@/components/RoutesMap/RoutingBar';

import { useRoutesMap } from '@/hooks/useRoutesMap';

import { useRoutesQuery } from '@/queries/useRoutesQuery';

import * as styles from './RoutesMap.styles';

const RoutesMap = () => {
  const [searchParams] = useSearchParams();

  const startLat = searchParams.get('startLat');
  const startLng = searchParams.get('startLng');

  const endLat = searchParams.get('endLat');
  const endLng = searchParams.get('endLng');

  const departure = searchParams.get('departure');
  const arrival = searchParams.get('arrival');

  const startCoords = [Number(startLat ?? '0'), Number(startLng ?? '0')];
  const endCoords = [Number(endLat ?? '0'), Number(endLng ?? '0')];

  const { map, mapRef } = useRoutesMap();

  const { routes } = useRoutesQuery(startCoords, endCoords);

  useEffect(() => {
    if (!map) return;
    if (routes.length === 0) return;

    // 길찾기 경로 설정
    new naver.maps.Polyline({
      map: map,
      path: routes,
      strokeColor: '#3871bf',
      strokeWeight: 3,
      strokeLineCap: 'round',
      strokeLineJoin: 'round',
      startIcon: naver.maps.PointingIcon.CIRCLE,
      endIcon: naver.maps.PointingIcon.CIRCLE,
    });
  }, [map, routes]);

  return (
    <>
      <div className={styles.header}>
        <RoutingBar departure={departure ?? ''} arrival={arrival ?? ''} />
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  );
};

export default RoutesMap;
