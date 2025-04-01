import { useEffect, useState } from 'react';

import { Marker, MarkerType } from '@/pages/type';

import { useMap } from '@/hooks/useMap';

import { MARKER_ICON } from '@/constants/barrierFree';

export const useBarrierFreeMap = (defaultMarkers: Marker[]) => {
  const { map, mapRef } = useMap();

  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);
  const [categories, setCategories] = useState<Record<MarkerType, boolean>>({
    elevator: false,
    impariment_toilet: false,
    ramp: false,
    note: false,
    audio_device: false,
    support_office: false,
  });

  const filterCategories = (category: MarkerType) => {
    const newCategories = { ...categories, [category]: !categories[category] };
    setCategories(newCategories);
  };

  const filterMarkers = () => {
    if (!map) return;

    const filteredCategories = Object.entries(categories)
      .filter(([, value]) => value)
      .map(([key]) => key as MarkerType);

    if (filteredCategories.length === 0) {
      initializeMarkers(map, defaultMarkers);
      return;
    }

    const markerData = defaultMarkers.filter((marker) => filteredCategories.includes(marker.markerType));
    initializeMarkers(map, markerData);
  };

  const addMarker = (map: naver.maps.Map, type: MarkerType, latitude: number, longitude: number) => {
    const markerOptions = {
      map: map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: {
        url: MARKER_ICON[type],
        size: new naver.maps.Size(40, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(20, 26),
      },
    };

    const marker = new naver.maps.Marker(markerOptions);
    setMarkers((prev) => [...prev, marker]);
  };

  const removeMarkers = () => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  };

  const initializeMarkers = (map: naver.maps.Map, markerData: Marker[]) => {
    removeMarkers();

    markerData.forEach((marker) =>
      addMarker(map, marker.markerType, marker.geometry.coordinates[1], marker.geometry.coordinates[0])
    );
  };

  useEffect(() => {
    filterMarkers();
  }, [map, defaultMarkers, categories]);

  return { map, mapRef, categories, filterCategories };
};
