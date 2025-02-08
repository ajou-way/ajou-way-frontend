import useMap from '@/hooks/useMap';

import * as styles from './BarrierFreeMap.styles';

const BarrierFreeMap = () => {
  const { mapRef } = useMap();

  return <div ref={mapRef} className={styles.layout}></div>;
};

export default BarrierFreeMap;
