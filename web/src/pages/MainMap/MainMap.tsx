import { useState, useEffect } from 'react';

import InformationModal from '@/components/_common/InformationModal/InformationModal';
import CategoryList from '@/components/MainMap/CategoryList/CategoryList';
import RoutingBar from '@/components/MainMap/RoutingBar/RoutingBar';
import SearchBar from '@/components/MainMap/SearchBar/SearchBar';

import { useIsOpen } from '@/hooks/_common/useIsOpen';
import { useMainMap } from '@/hooks/useMainMap';

import { useBuildingsQuery } from '@/queries/useBuildingsQuery';

import * as styles from './MainMap.styles';

const MainMap = () => {
  const { buildings } = useBuildingsQuery();

  const [departure, setDeparture] = useState('');

  const [modalId, setModalId] = useState(0);
  const [modalName, setModalName] = useState('');

  const { isOpen: isListOpen, open: openList, close: closeList } = useIsOpen();
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useIsOpen();
  const { isOpen: isSearchBarOpen, open: openSearchBar, close: closeSearchBar } = useIsOpen();
  const { isOpen: isRoutingBarOpen, open: openRoutingBar, close: closeRoutingBar } = useIsOpen();

  const { map, mapRef, addMarker, addClusterMarker } = useMainMap();

  const handleRoutingClick = (departure: string) => {
    setDeparture(departure);
    openRoutingBar();

    closeList();
    closeModal();
    closeSearchBar();
  };

  const handleOpenModal = (id: number, name: string) => {
    setModalId(id);
    setModalName(name);

    openModal();
  };

  useEffect(() => {
    if (!map) return;

    const markers: naver.maps.Marker[] = [];

    buildings.forEach((building) => {
      const marker = addMarker(map, building.geometry.coordinates[1], building.geometry.coordinates[0], () =>
        handleOpenModal(building.id, building.name)
      );

      markers.push(marker);
    });

    if (markers.length === buildings.length) {
      addClusterMarker(map, markers);
    }
  }, [map, buildings]);

  return (
    <>
      <div className={styles.header}>
        <CategoryList isOpen={isListOpen} open={openList} close={closeList} />
        <SearchBar onItemClick={handleOpenModal} isOpen={isSearchBarOpen} open={openSearchBar} close={closeSearchBar} />
        <RoutingBar initialDeparture={departure} isOpen={isRoutingBarOpen} close={closeRoutingBar} />
      </div>
      <div className={styles.modalContainer}>
        <InformationModal
          id={modalId}
          name={modalName}
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
