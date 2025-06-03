export interface GetAccessTokenRequest {
  code: string;
  grant_type?: string;
}

export interface GetAccessTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
  token_type: string;
  id_token?: string;
}

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URL = import.meta.env.VITE_GOOGLE_REDIRECT_URL;

export const getAccessToken = async ({
  code,
  grant_type = 'authorization_code',
}: GetAccessTokenRequest): Promise<GetAccessTokenResponse> => {
  const body = new URLSearchParams({
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URL,
    grant_type,
  });

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Google token fetch failed: ${error}`);
  }

  return response.json();
};
