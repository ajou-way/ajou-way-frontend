import { useMutation } from '@tanstack/react-query';

import { login, updateProfile } from '@/apis/auth';

export const useAuthMutation = () => {
  const { mutate: authLoginMutation } = useMutation({
    mutationFn: login,
    onError: (error) => alert(error.message),
  });

  const { mutate: updateProfileMutation } = useMutation({
    mutationFn: updateProfile,
    onError: (error) => alert(error.message),
  });

  return { authLoginMutation, updateProfileMutation };
};
