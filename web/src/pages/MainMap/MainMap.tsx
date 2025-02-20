import useMainMap from '@/hooks/useMainMap';

import useBarrierFreeMarkersQuery from '@/queries/useBarrierFreeMarkersQuery';

import * as styles from './MainMap.styles';

const MainMap = () => {
  const { markers } = useBarrierFreeMarkersQuery();
  const { mapRef } = useMainMap(markers);

  return <div ref={mapRef} className={styles.mapContainer} />;
};

export default MainMap;
