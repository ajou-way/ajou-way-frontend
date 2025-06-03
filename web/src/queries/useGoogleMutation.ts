import { useMutation } from '@tanstack/react-query';

import { getAccessToken } from '@/apis/google';

export const useGoogleMutation = () => {
  const { mutate: getAccessTokenMutation, data } = useMutation({
    mutationFn: getAccessToken,
    onError: (error) => alert(error.message),
  });

  return { getAccessTokenMutation, data };
};
