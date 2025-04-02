import { useState, useEffect } from 'react';

import InformationModal from '@/components/_common/InformationModal/InformationModal';
import CategoryList from '@/components/MainMap/CategoryList/CategoryList';
import RoutingBar from '@/components/MainMap/RoutingBar/RoutingBar';
import SearchBar from '@/components/MainMap/SearchBar/SearchBar';

import { useIsOpen } from '@/hooks/_common/useIsOpen';
import { useMainMap } from '@/hooks/useMainMap';

import { useMarkersQuery } from '@/queries/useMarkersQuery';

import * as styles from './MainMap.styles';

const MainMap = () => {
  const { markers } = useMarkersQuery();
  const { map, mapRef, addMarker } = useMainMap();

  const [departure, setDeparture] = useState('');
  const [modalId, setModalId] = useState(0);

  const { isOpen: isListOpen, open: openList, close: closeList } = useIsOpen();
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useIsOpen();
  const { isOpen: isSearchBarOpen, open: openSearchBar, close: closeSearchBar } = useIsOpen();
  const { isOpen: isRoutingBarOpen, open: openRoutingBar, close: closeRoutingBar } = useIsOpen();

  const handleRoutingClick = (departure: string) => {
    setDeparture(departure);
    openRoutingBar();

    closeList();
    closeModal();
    closeSearchBar();
  };

  const handleOpenModal = (id: number) => {
    setModalId(id);
    openModal();
  };

  useEffect(() => {
    if (!map) return;

    markers.forEach((marker) =>
      addMarker(map, marker.geometry.coordinates[1], marker.geometry.coordinates[0], () => handleOpenModal(marker.id))
    );
  }, [map, markers]);

  return (
    <>
      <div className={styles.header}>
        <CategoryList isOpen={isListOpen} open={openList} close={closeList} />
        <SearchBar isOpen={isSearchBarOpen} open={openSearchBar} close={closeSearchBar} />
        <RoutingBar initialDeparture={departure} isOpen={isRoutingBarOpen} close={closeRoutingBar} />
      </div>
      <div className={styles.modalContainer}>
        <InformationModal id={modalId} onRoutingClick={handleRoutingClick} isOpen={isModalOpen} close={closeModal} />
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  );
};

export default MainMap;
