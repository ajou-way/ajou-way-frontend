import fetcher from '@/apis/fetcher';

interface LoginRequest {
  provider: string;
  accessToken: string;
}

interface LoginResponse {
  accessToken: string;
}

export const login = async ({ provider, accessToken }: LoginRequest) => {
  return await fetcher.post<LoginResponse>({
    endpoint: '/api/auth/login',
    body: JSON.stringify({ provider, accessToken }),
  });
};

interface SignUpRequest {
  major: string;
  studentId: string;
}

export const signUp = async ({ major, studentId }: SignUpRequest) => {
  return await fetcher.put({
    endpoint: '/api/auth/sign-up',
    body: JSON.stringify({ major, studentId }),
  });
};

interface GetProfileResponse {
  userId: number;
  userRole: string;
  userName: string;
  email: string;
}

export const getProfile = async () => {
  return await fetcher.get<GetProfileResponse>({ endpoint: '/api/user/profile' });
};
