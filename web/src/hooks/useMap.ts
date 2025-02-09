import { useRef, useState, useEffect } from 'react';

const DEFAULT_CENTER = { latitude: 37.2821, longitude: 127.0463 };

const useMap = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initializeMap = (latitude: number, longitude: number) => {
    if (mapRef.current) {
      const mapOptions = { center: new naver.maps.LatLng(latitude, longitude), zoom: 16 };
      const map = new naver.maps.Map(mapRef.current, mapOptions);

      setMap(map);
    }
  };

  useEffect(() => {
    initializeMap(DEFAULT_CENTER.latitude, DEFAULT_CENTER.longitude);
  }, []);

  return { map, mapRef };
};

export default useMap;
