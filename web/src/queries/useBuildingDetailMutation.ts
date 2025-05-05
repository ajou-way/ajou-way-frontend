import { useMutation } from '@tanstack/react-query';

import { addBuildingDetail } from '@/apis/map';

export const useBuildingDetailMutation = () => {
  const { mutate: addBuildingDetailMutation } = useMutation({
    mutationFn: addBuildingDetail,
    onSuccess: () => alert('저장에 성공했습니다.'),
    onError: (error) => alert(error.message),
  });

  return { addBuildingDetailMutation };
};
