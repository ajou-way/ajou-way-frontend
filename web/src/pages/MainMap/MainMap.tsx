import CategoryList from '@/components/MainMap/CategoryList/CategoryList';
import SearchBar from '@/components/MainMap/SearchBar/SearchBar';

import { useMainMap } from '@/hooks/useMainMap';
import { useMapHeader } from '@/hooks/useMapHeader';

import { useMarkersQuery } from '@/queries/useMarkersQuery';

import * as styles from './MainMap.styles';

const MainMap = () => {
  const { markers } = useMarkersQuery();
  const { mapRef } = useMainMap(markers);

  const {
    isListVisible,
    isSearchBarVisible,
    isListOpen,
    isSearchBarOpen,
    openList,
    closeList,
    openSearchBar,
    closeSearchBar,
  } = useMapHeader();

  return (
    <>
      <div className={styles.layout}>
        {isListVisible && <CategoryList isOpen={isListOpen} open={openList} close={closeList} />}
        {isSearchBarVisible && <SearchBar isOpen={isSearchBarOpen} open={openSearchBar} close={closeSearchBar} />}
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  );
};

export default MainMap;
