import { useRef, useState, useEffect } from 'react';

import { CurrentMarker } from '@/assets/markers';

const DEFAULT_CENTER = { latitude: 37.2821, longitude: 127.0463 };

interface Params {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  minZoom?: number;
}

export const useMap = ({ latitude, longitude, zoom = 16, minZoom = 16 }: Params = {}) => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initializeMap = (latitude: number, longitude: number) => {
    if (mapRef.current) {
      const mapOptions = {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom,
        minZoom,
      };

      const map = new naver.maps.Map(mapRef.current, mapOptions);
      setMap(map);

      return map;
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
    // @MEMO: 위도, 경도 값이 주어지면 해당 위치로 지도 초기화
    if (latitude && longitude) {
      initializeMap(latitude, longitude);
      return;
    }

    // @MEMO: 위도, 경도 값이 주어지지 않으면 현재 위치로 지도 초기화
    if (!navigator.geolocation) {
      initializeMap(DEFAULT_CENTER.latitude, DEFAULT_CENTER.longitude);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const map = initializeMap(position.coords.latitude, position.coords.longitude);
        if (map) addCurrentMarker(map, position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error(error.message);

        const map = initializeMap(DEFAULT_CENTER.latitude, DEFAULT_CENTER.longitude);
        if (map) addCurrentMarker(map, DEFAULT_CENTER.latitude, DEFAULT_CENTER.longitude);
      }
    );
  }, [latitude, longitude]);

  return { map, mapRef };
};
