import { Marker } from '@/pages/type';

import fetcher from '@/apis/fetcher';

export const getBarrierFreeMarkers = async () => {
  return await fetcher.get<{ markers: Marker[] }>({ endpoint: '/markers' });
};
