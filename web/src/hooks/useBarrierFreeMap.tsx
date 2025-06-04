import { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';

import { Facilites, FacilityType } from '@/pages/type';

import { Marker } from '@/components/_common/Marker';

import { useMap } from '@/hooks/useMap';

import { MARKER_ICON } from '@/constants/barrierFree';

export const useBarrierFreeMap = (defaultMarkers: Facilites[]) => {
  const { map, mapRef } = useMap({ latitude: 37.2821, longitude: 127.0463 });

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

  const addMarker = (
    map: naver.maps.Map,
    type: FacilityType,
    latitude: number,
    longitude: number,
    buildingName: string
  ) => {
    const markerOptions = {
      map: map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: {
        content: renderToString(<Marker image={MARKER_ICON[type]} />),
        size: new naver.maps.Size(28, 36),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(14, 36),
      },
    };

    const marker = new naver.maps.Marker(markerOptions);
    setMarkers((prev) => [...prev, marker]);

    const infowindow = new naver.maps.InfoWindow({
      content: renderToString(
        <div style={{ padding: '5px 8px', fontSize: '10px', color: '#333' }}>
          <p style={{ fontWeight: 'bold' }}>{buildingName}</p>
          <p>
            {type === 'ELEVATOR' && '엘리베이터'}
            {type === 'IMPAIRMENT_TOILET' && '장애인 화장실'}
            {type === 'RAMP' && '경사로'}
            {type === 'NOTE' && '점자블록'}
            {type === 'AUDIO_DEVICE' && '청각장애인 보조기기'}
            {type === 'SUPPORT_OFFICE' && '장애인 지원 사무소'}
          </p>
        </div>
      ),
      borderWidth: 1,
      borderColor: '#eee',
      anchorSize: new naver.maps.Size(10, 10),
    });

    naver.maps.Event.addListener(marker, 'click', function () {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });
  };

  const removeMarkers = () => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  };

  const initializeMarkers = (map: naver.maps.Map, markerData: Facilites[]) => {
    removeMarkers();

    markerData.forEach((marker) => {
      console.log(marker.facilityMarkerType, marker.geometry.coordinates[1], marker.geometry.coordinates[0]);
      addMarker(
        map,
        marker.facilityMarkerType,
        marker.geometry.coordinates[1],
        marker.geometry.coordinates[0],
        marker.buildingName
      );
    });
  };

  useEffect(() => {
    if (!map) return;
    if (defaultMarkers.length === 0) return;

    filterMarkers();
  }, [map, defaultMarkers, categories]);

  return { map, mapRef, categories, filterCategories };
};
