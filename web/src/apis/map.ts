import { Marker, MarkerDetail, Building, BuildingDetail } from '@/pages/type';

import fetcher from '@/apis/fetcher';

export const getMarkers = async () => {
  return await fetcher.get<{ result: Building[] }>({ endpoint: '/maps/buildings' });
};

export const getMarkerDetail = async (id: number) => {
  return await fetcher.get<BuildingDetail>({ endpoint: `/maps/building/${id}` });
};

export const getBarrierFreeMarkers = async () => {
  return await fetcher.get<{ markers: Marker[] }>({ endpoint: '/markers' });
};

export const getAutoCompleteResults = async (keyword: string) => {
  return await fetcher.get<{ results: MarkerDetail[] }>({ endpoint: `/search/building?q=${keyword}` });
};
