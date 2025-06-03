import fetcher from '@/apis/fetcher';

interface LoginRequest {
  provider: string;
  accessToken: string;
}

export const login = async ({ provider, accessToken }: LoginRequest) => {
  return await fetcher.post({
    endpoint: '/api/auth/login',
    body: JSON.stringify({ provider, accessToken }),
  });
};

interface GetProfileResponse {
  userId: number;
  userRole: string;
  userName: string;
  email: string;
}

export const getProfile = async () => {
  return await fetcher.get<GetProfileResponse>({ endpoint: '/api/auth/profile' });
};

interface UpdateProfileRequest {
  major: string;
  studentId: string;
}

export const updateProfile = async ({ major, studentId }: UpdateProfileRequest) => {
  return await fetcher.patch({
    endpoint: '/api/auth/profile',
    body: JSON.stringify({ major, studentId }),
  });
};
