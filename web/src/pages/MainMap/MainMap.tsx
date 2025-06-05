import { useState, useEffect } from 'react';

import { Building } from '@/pages/type';

import InformationModal from '@/components/_common/InformationModal/InformationModal';
import RoutingBar from '@/components/MainMap/RoutingBar/RoutingBar';
import SearchBar from '@/components/MainMap/SearchBar/SearchBar';

import { useIsOpen } from '@/hooks/_common/useIsOpen';
import { useMainMap } from '@/hooks/useMainMap';

import { useAdminMarkersQuery } from '@/queries/useAdminMarkersQuery';
import { useBuildingsQuery } from '@/queries/useBuildingsQuery';

import * as styles from './MainMap.styles';

const MainMap = () => {
  const { buildings } = useBuildingsQuery();
  const { adminMarkers } = useAdminMarkersQuery();

  const [activeBuilding, setActiveBuilding] = useState<Building | null>(null);
  const [departureBuilding, setDepartureBuilding] = useState<Building | null>(null);

  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useIsOpen();
  const { isOpen: isSearchBarOpen, open: openSearchBar, close: closeSearchBar } = useIsOpen();
  const { isOpen: isRoutingBarOpen, open: openRoutingBar, close: closeRoutingBar } = useIsOpen();

  const { map, mapRef, addBuildingMarker, addClusterMarker, addAdminMarker } = useMainMap();

  const handleRoutingClick = (building: Building) => {
    setDepartureBuilding(building);
    openRoutingBar();

    closeModal();
    closeSearchBar();
  };

  const handleOpenModal = (building: Building) => {
    if (!map) return;

    const latitude = building.geometry.coordinates[1];
    const longitude = building.geometry.coordinates[0];

    map.setCenter(new naver.maps.LatLng(latitude, longitude)); // 지도 중심 좌표 이동
    map.setZoom(19); // 지도 확대

    setActiveBuilding(building);
    openModal();
  };

  // @MEMO: 건물 마커 지도에 추가
  useEffect(() => {
    if (!map) return;
    if (buildings.length === 0) return;

    const markers: naver.maps.Marker[] = [];

    buildings.forEach((building) => {
      const marker = addBuildingMarker(map, building, () => handleOpenModal(building));
      markers.push(marker);
    });

    if (markers.length === buildings.length) {
      addClusterMarker(map, markers);
    }
  }, [map, buildings]);

  // @MEMO: 관리자 마커 지도에 추가
  useEffect(() => {
    if (!map) return;
    if (adminMarkers.length === 0) return;

    adminMarkers.forEach((adminMarker) => addAdminMarker(map, adminMarker));
  }, [map, adminMarkers]);

  return (
    <>
      <div className={styles.header}>
        <SearchBar onItemClick={handleOpenModal} isOpen={isSearchBarOpen} open={openSearchBar} close={closeSearchBar} />
        <RoutingBar initialDeparture={departureBuilding} isOpen={isRoutingBarOpen} close={closeRoutingBar} />
      </div>
      <div className={styles.modalContainer}>
        <InformationModal
          building={activeBuilding}
          onRoutingClick={handleRoutingClick}
          isOpen={isModalOpen}
          close={closeModal}
        />
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  );
};

export default MainMap;
