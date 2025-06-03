import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

import { useAuthMutation } from '@/queries/useAuthMutation';

import LoadingImage from '@/assets/loading.gif';

import * as styles from './Loading.styles';

const Loading = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const code = searchParams.get('code');

  const { authLoginMutation } = useAuthMutation();

  useEffect(() => {
    if (code) {
      authLoginMutation(
        { provider: 'GOOGLE', accessToken: code },
        {
          onSuccess: () => {
            localStorage.setItem('accessToken', code);
            navigate('/join');
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
