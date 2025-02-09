import useBarrierFreeMap from '@/hooks/useBarrierFreeMap';

import useBarrierFreeMarkersQuery from '@/queries/useBarrierFreeMarkersQuery';

import * as styles from './BarrierFreeMap.styles';

const BarrierFreeMap = () => {
  const { markers } = useBarrierFreeMarkersQuery();
  const { mapRef } = useBarrierFreeMap(markers);

  return <div ref={mapRef} className={styles.layout}></div>;
};

export default BarrierFreeMap;
