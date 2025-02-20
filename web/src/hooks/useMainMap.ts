import { useEffect } from 'react';

import { Marker } from '@/pages/BarrierFreeMap/BarrierFreeMap.type';

import useMap from '@/hooks/useMap';

import { BuildingMarker } from '@/assets/markers';

const useMainMap = (defaultMarkers: Marker[]) => {
  const { map, mapRef } = useMap();

  const addMarker = (map: naver.maps.Map, latitude: number, longitude: number) => {
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

    new naver.maps.Marker(markerOptions);
  };

  const initializeMarkers = (map: naver.maps.Map, markerData: Marker[]) => {
    markerData.forEach((marker) => addMarker(map, marker.geometry.coordinates[1], marker.geometry.coordinates[0]));
  };

  useEffect(() => {
    if (!map) return;

    initializeMarkers(map, defaultMarkers);
  }, [map, defaultMarkers]);

  return { mapRef };
};

export default useMainMap;
