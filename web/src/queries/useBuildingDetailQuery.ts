import { useQuery } from '@tanstack/react-query';

import { getBuildingDetail } from '@/apis/map';

export const useBuildingDetailQuery = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['buildingDetail', id],
    queryFn: () => getBuildingDetail(id),
  });

  return { detail: data, isLoading };
};
