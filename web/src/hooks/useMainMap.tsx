/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderToString } from 'react-dom/server';

import { Marker, ClusterMarker } from '@/components/_common/Marker';

import { useMap } from '@/hooks/useMap';

import {
  AdminMarker,
  BuildingMarker,
  ClusterMarker1,
  ClusterMarker2,
  ClusterMarker3,
  ClusterMarker4,
} from '@/assets/markers';

declare global {
  interface Window {
    MarkerClustering: any;
  }
}

export const useMainMap = () => {
  const { map, mapRef } = useMap();

  const addMarker = (map: naver.maps.Map, latitude: number, longitude: number, onClick: () => void) => {
    const markerOptions = {
      map: map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: {
        content: renderToString(<Marker image={BuildingMarker} />),
        size: new naver.maps.Size(28, 36),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(14, 36),
      },
    };

    const marker = new naver.maps.Marker(markerOptions);
    naver.maps.Event.addListener(marker, 'click', onClick);

    return marker;
  };

  const createClusterMarker = (image: string) => {
    return {
      content: renderToString(<ClusterMarker image={image} />),
      size: new naver.maps.Size(40, 40),
      anchor: new naver.maps.Point(20, 40),
    };
  };

  const addClusterMarker = (map: naver.maps.Map, markers: naver.maps.Marker[]) => {
    const icons = [
      createClusterMarker(ClusterMarker1),
      createClusterMarker(ClusterMarker2),
      createClusterMarker(ClusterMarker3),
      createClusterMarker(ClusterMarker4),
    ];

    new window.MarkerClustering({
      map,
      markers,
      icons,
      maxZoom: 18,
      minClusterSize: 1,
      gridSize: 300,
      disableClickZoom: false,
      indexGenerator: [5, 10, 15, 20],
      stylingFunction: function (clusterMarker: any, count: number) {
        clusterMarker.getElement().querySelector('div:first-child').innerText = count;
      },
    });
  };

  const addAdminMarker = (
    map: naver.maps.Map,
    latitude: number,
    longitude: number,
    title: string,
    contents: string
  ) => {
    const markerOptions = {
      map: map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: {
        content: renderToString(<Marker image={AdminMarker} />),
        size: new naver.maps.Size(28, 36),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(14, 36),
      },
    };

    const marker = new naver.maps.Marker(markerOptions);

    const infowindow = new naver.maps.InfoWindow({
      content: renderToString(
        <div style={{ padding: '5px 8px', fontSize: '10px', color: '#333' }}>
          <p style={{ fontWeight: 'bold' }}>{title}</p>
          <p>{contents}</p>
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

  return { map, mapRef, addMarker, addClusterMarker, addAdminMarker };
};
