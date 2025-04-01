import InformationModal from '@/components/_common/InformationModal/InformationModal';
import CategoryList from '@/components/MainMap/CategoryList/CategoryList';
import SearchBar from '@/components/MainMap/SearchBar/SearchBar';

import { useIsOpen } from '@/hooks/_common/useIsOpen';
import { useMainMap } from '@/hooks/useMainMap';

import { useMarkersQuery } from '@/queries/useMarkersQuery';

import * as styles from './MainMap.styles';

const MainMap = () => {
  const { markers } = useMarkersQuery();
  const { mapRef } = useMainMap(markers);

  const { isOpen: isListOpen, open: openList, close: closeList } = useIsOpen();
  const { isOpen: isSearchBarOpen, open: openSearchBar, close: closeSearchBar } = useIsOpen();
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useIsOpen();

  return (
    <>
      <div className={styles.header}>
        <CategoryList isOpen={isListOpen} open={openList} close={closeList} />
        <SearchBar isOpen={isSearchBarOpen} open={openSearchBar} close={closeSearchBar} />
      </div>
      <div className={styles.modalContainer}>
        <InformationModal title="팔달관" />
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  );
};

export default MainMap;
