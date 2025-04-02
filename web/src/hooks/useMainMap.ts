import { useMap } from '@/hooks/useMap';

import { BuildingMarker } from '@/assets/markers';

export const useMainMap = () => {
  const { map, mapRef } = useMap();

  const addMarker = (map: naver.maps.Map, latitude: number, longitude: number, onClick: () => void) => {
    const markerOptions = {
      map: map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: {
        url: BuildingMarker,
        size: new naver.maps.Size(40, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(20, 26),
      },
    };

    const marker = new naver.maps.Marker(markerOptions);
    naver.maps.Event.addListener(marker, 'click', onClick);
  };

  return { map, mapRef, addMarker };
};
