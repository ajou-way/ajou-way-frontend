import { IoSearchOutline } from 'react-icons/io5';

import SearchBar from '@/components/MainMap/SearchBar/SearchBar';

import { useIsOpen } from '@/hooks/_common/useIsOpen';
import useMainMap from '@/hooks/useMainMap';

import useBarrierFreeMarkersQuery from '@/queries/useBarrierFreeMarkersQuery';

import * as styles from './MainMap.styles';

const MainMap = () => {
  const { markers } = useBarrierFreeMarkersQuery();
  const { mapRef } = useMainMap(markers);

  const { isOpen, open } = useIsOpen();

  return (
    <>
      <div className={styles.layout}>
        {isOpen ? (
          <SearchBar />
        ) : (
          <button className={styles.searchButton} onClick={open}>
            <IoSearchOutline size={16} />
          </button>
        )}
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  );
};

export default MainMap;
