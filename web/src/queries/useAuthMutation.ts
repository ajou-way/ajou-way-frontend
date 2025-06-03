import { useMutation } from '@tanstack/react-query';

import { login, signUp } from '@/apis/auth';

export const useAuthMutation = () => {
  const { mutate: authLoginMutation } = useMutation({
    mutationFn: login,
    onError: (error) => alert(error.message),
  });

  const { mutate: authSignUpMutation } = useMutation({
    mutationFn: signUp,
    onError: (error) => alert(error.message),
  });

  return { authLoginMutation, authSignUpMutation };
};
