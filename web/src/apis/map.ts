import { Marker } from '@/pages/type';

import fetcher from '@/apis/fetcher';

export const getMarkers = async () => {
  return await fetcher.get<{ markers: Omit<Marker, 'markerType'>[] }>({ endpoint: '/campus/markers' });
};
