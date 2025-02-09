import { useEffect } from 'react';

import { Marker, MarkerType } from '@/pages/BarrierFreeMap/BarrierFreeMap.type';

import useMap from '@/hooks/useMap';

import {
  AudioDeviceMarker,
  ElevatorMarker,
  ImparimentToiletMarker,
  NoteMarker,
  RampMarker,
  SupportOfficeMarker,
} from '@/assets/markers';

const MARKER_ICON: Record<MarkerType, string> = {
  elevator: ElevatorMarker,
  impariment_toilet: ImparimentToiletMarker,
  ramp: RampMarker,
  note: NoteMarker,
  audio_device: AudioDeviceMarker,
  support_office: SupportOfficeMarker,
};

const useBarrierFreeMap = (markers: Marker[]) => {
  const { map, mapRef } = useMap();

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

    new naver.maps.Marker(markerOptions);
  };

  useEffect(() => {
    if (!map) return;

    markers.forEach((marker) =>
      addMarker(map, marker.markerType, marker.geometry.coordinates[1], marker.geometry.coordinates[0])
    );
  }, [map, markers]);

  return { map, mapRef };
};

export default useBarrierFreeMap;
