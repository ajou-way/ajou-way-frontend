import { Marker, MarkerDetail, Building, BuildingDetail, AmenityInfo } from '@/pages/type';

import fetcher from '@/apis/fetcher';

export const getMarkers = async () => {
  return await fetcher.get<{ result: Building[] }>({ endpoint: '/maps/buildings' });
};

export const getBuildingDetail = async (id: number) => {
  return await fetcher.get<BuildingDetail>({ endpoint: `/maps/buildings/${id}` });
};

export const addBuildingDetail = async ({ info }: { info: Omit<AmenityInfo, 'id'> }) => {
  return await fetcher.post({ endpoint: `/maps/amenities`, body: JSON.stringify(info) });
};

export const getBarrierFreeMarkers = async () => {
  return await fetcher.get<{ markers: Marker[] }>({ endpoint: '/markers' });
};

export const getAutoCompleteResults = async (keyword: string) => {
  return await fetcher.get<{ results: MarkerDetail[] }>({ endpoint: `/search/building?q=${keyword}` });
};
