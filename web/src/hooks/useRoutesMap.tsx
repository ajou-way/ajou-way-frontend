import { useMap } from '@/hooks/useMap';

export const useRoutesMap = () => {
  const { map, mapRef } = useMap();

  return { map, mapRef };
};
