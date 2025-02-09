import FilterList from '@/components/BarrierFreeMap/FilterList/FilterList';

import useBarrierFreeMap from '@/hooks/useBarrierFreeMap';

import useBarrierFreeMarkersQuery from '@/queries/useBarrierFreeMarkersQuery';

import * as styles from './BarrierFreeMap.styles';

const BarrierFreeMap = () => {
  const { markers } = useBarrierFreeMarkersQuery();
  const { mapRef } = useBarrierFreeMap(markers);

  return (
    <>
      <div className={styles.listContainer}>
        <FilterList />
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  );
};

export default BarrierFreeMap;
