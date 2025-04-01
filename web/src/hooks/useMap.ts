import { useRef, useState, useEffect } from 'react';

import { CurrentMarker } from '@/assets/markers';

const DEFAULT_CENTER = { latitude: 37.2821, longitude: 127.0463 };

export const useMap = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initializeMap = (latitude: number, longitude: number) => {
    if (mapRef.current) {
      const mapOptions = { center: new naver.maps.LatLng(latitude, longitude), zoom: 17 };
      const map = new naver.maps.Map(mapRef.current, mapOptions);

      addCurrentMarker(map, latitude, longitude);

      setMap(map);
    }
  };

  const addCurrentMarker = (map: naver.maps.Map, latitude: number, longitude: number) => {
    const markerOptions = {
      map: map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: {
        url: CurrentMarker,
        size: new naver.maps.Size(50, 50),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 25),
      },
    };

    new naver.maps.Marker(markerOptions);
  };

  useEffect(() => {
    initializeMap(DEFAULT_CENTER.latitude, DEFAULT_CENTER.longitude);
  }, []);

  return { map, mapRef };
};
