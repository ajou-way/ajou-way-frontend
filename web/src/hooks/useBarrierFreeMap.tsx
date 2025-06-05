import { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';

import { Facilites, FacilityType } from '@/pages/type';

import InfoWindow from '@/components/_common/InfoWindow/InfoWindow';
import { Marker } from '@/components/_common/Marker';

import { useMap } from '@/hooks/useMap';

import { MARKER_ICON, MARKER_TYPE } from '@/constants/barrierFree';

export const useBarrierFreeMap = (defaultMarkers: Facilites[]) => {
  const { map, mapRef } = useMap();

  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);
  const [categories, setCategories] = useState<Record<FacilityType, boolean>>({
    ELEVATOR: false,
    IMPAIRMENT_TOILET: false,
    RAMP: false,
    NOTE: false,
    AUDIO_DEVICE: false,
    SUPPORT_OFFICE: false,
  });

  const filterCategories = (category: FacilityType) => {
    const newCategories = { ...categories, [category]: !categories[category] };
    setCategories(newCategories);
  };

  const filterMarkers = () => {
    if (!map) return;

    const filteredCategories = Object.entries(categories)
      .filter(([, value]) => value)
      .map(([key]) => key as FacilityType);

    if (filteredCategories.length === 0) {
      initializeMarkers(map, defaultMarkers);
      return;
    }

    const markerData = defaultMarkers.filter((marker) => filteredCategories.includes(marker.facilityMarkerType));
    initializeMarkers(map, markerData);
  };

  const addMarker = (map: naver.maps.Map, facility: Facilites) => {
    const { facilityMarkerType: type, geometry } = facility;

    const markerOptions = {
      map: map,
      position: new naver.maps.LatLng(geometry.coordinates[1], geometry.coordinates[0]),
      icon: {
        content: renderToString(<Marker image={MARKER_ICON[type]} />),
        size: new naver.maps.Size(28, 36),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(14, 36),
      },
    };

    const marker = new naver.maps.Marker(markerOptions);
    setMarkers((prev) => [...prev, marker]);

    addInfoWindow(map, marker, facility);
  };

  const removeMarkers = () => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  };

  const initializeMarkers = (map: naver.maps.Map, facilites: Facilites[]) => {
    removeMarkers();

    facilites.forEach((facility) => {
      addMarker(map, facility);
    });
  };

  // @MEMO: 마커 위에 InfoWindow 생성
  const addInfoWindow = (map: naver.maps.Map, marker: naver.maps.Marker, facility: Facilites) => {
    const { facilityMarkerType: type, buildingName } = facility;

    const content = renderToString(
      <InfoWindow title={buildingName}>
        <p>{MARKER_TYPE[type]}</p>
      </InfoWindow>
    );

    const infowindow = new naver.maps.InfoWindow({
      content,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      anchorSize: new naver.maps.Size(5, 5),
      anchorColor: 'transparent',
    });

    naver.maps.Event.addListener(marker, 'click', () => {
      if (infowindow.getMap()) infowindow.close();
      else infowindow.open(map, marker);
    });
  };

  useEffect(() => {
    if (!map) return;
    if (defaultMarkers.length === 0) return;

    filterMarkers();
  }, [map, defaultMarkers, categories]);

  return { map, mapRef, categories, filterCategories };
};
