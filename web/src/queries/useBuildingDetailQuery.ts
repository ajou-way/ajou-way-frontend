import { useQuery } from '@tanstack/react-query';

import { getBuildingDetail } from '@/apis/map';

export const useBuildingDetailQuery = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['buildingDetail', id],
    queryFn: () => getBuildingDetail(Number(id)),
  });

  return { detail: data, isLoading };
};
