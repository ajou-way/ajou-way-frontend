import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

import { useAuthMutation } from '@/queries/useAuthMutation';
import { useGoogleMutation } from '@/queries/useGoogleMutation';

import { PATH } from '@/constants/routes';

import LoadingImage from '@/assets/loading.gif';

import * as styles from './Loading.styles';

const Loading = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const code = searchParams.get('code');

  const { authLoginMutation } = useAuthMutation();
  const { getAccessTokenMutation } = useGoogleMutation();

  useEffect(() => {
    if (code) {
      getAccessTokenMutation(
        { code },
        {
          onSuccess: ({ access_token }) => {
            return authLoginMutation(
              { provider: 'GOOGLE', accessToken: access_token },
              {
                onSuccess: ({ accessToken }) => {
                  localStorage.setItem('accessToken', accessToken);
                  navigate(PATH.JOIN, { replace: true });
                },
              }
            );
          },
        }
      );
    }
  }, [code]);

  return (
    <div className={styles.layout}>
      <img src={LoadingImage} alt="" className={styles.loadingImage} />
      <p className={styles.loadingText}>
        로그인을 진행하고 있어요
        <br />
        잠시만 기다려 주세요...
      </p>
    </div>
  );
};

export default Loading;
