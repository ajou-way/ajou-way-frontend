import { Marker, MarkerDetail, Building, BuildingDetail } from '@/pages/type';

import fetcher from '@/apis/fetcher';

export const getBuildings = async () => {
  return await fetcher.get<{ result: Building[] }>({ endpoint: '/api/maps/buildings' });
};

export const getBuildingDetail = async (id: number) => {
  return await fetcher.get<BuildingDetail>({ endpoint: `/api/maps/buildings/${id}` });
};

export const getBarrierFreeMarkers = async () => {
  return await fetcher.get<{ markers: Marker[] }>({ endpoint: '/markers' });
};

export const getAutoCompleteResults = async (keyword: string) => {
  return await fetcher.get<{ results: MarkerDetail[] }>({ endpoint: `/search/building?q=${keyword}` });
};

interface GetRoutesRequest {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
}

interface GetRoutesResponse {
  nodes: {
    nodeId: number;
    lat: number;
    lng: number;
    aggCost: number;
  }[];
  cost: number;
}

export const getRoutes = async ({ startLat, startLng, endLat, endLng }: GetRoutesRequest) => {
  const endpoint = `/api/maps/routes?startLng=${startLng}&startLat=${startLat}&endLng=${endLng}&endLat=${endLat}`;
  return await fetcher.get<{ result: GetRoutesResponse }>({ endpoint });
};
