import { Header } from '@/components/RoutesMap';

import { useRoutesMap } from '@/hooks/useRoutesMap';

import * as styles from './RoutesMap.styles';

const RoutesMap = () => {
  const { mapRef } = useRoutesMap();

  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  );
};

export default RoutesMap;
