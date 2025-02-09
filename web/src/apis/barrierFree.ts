import { Marker } from '@/pages/BarrierFreeMap/BarrierFreeMap.type';

import fetcher from '@/apis/fetcher';

export const getBarrierFreeMarkers = async () => {
  return await fetcher.get<{ markers: Marker[] }>({ endpoint: '/markers' });
};
