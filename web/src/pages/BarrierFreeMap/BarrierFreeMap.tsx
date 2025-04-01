import CategoryList from '@/components/BarrierFreeMap/CategoryList/CategoryList';

import { useBarrierFreeMap } from '@/hooks/useBarrierFreeMap';

import { useBarrierFreeMarkersQuery } from '@/queries/useBarrierFreeMarkersQuery';

import * as styles from './BarrierFreeMap.styles';

const BarrierFreeMap = () => {
  const { markers } = useBarrierFreeMarkersQuery();
  const { mapRef, categories, filterCategories } = useBarrierFreeMap(markers);

  return (
    <>
      <div className={styles.listContainer}>
        <CategoryList categories={categories} filterCategories={filterCategories} />
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  );
};

export default BarrierFreeMap;
