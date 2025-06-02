import GoogleLogo from '@/assets/google.png';

import * as styles from './Landing.styles';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URL = import.meta.env.VITE_GOOGLE_REDIRECT_URL;

const Landing = () => {
  const goToGoogleAuth = () => {
    const params = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: GOOGLE_REDIRECT_URL,
      response_type: 'code',
      scope: 'https://www.googleapis.com/auth/userinfo.profile',
    });

    const url = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

    window.location.href = url;
  };

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1 className={styles.title}>A:WAY</h1>
        <p className={styles.subTitle}>
          아주웨이에서
          <br />
          더욱 자세한 아주대학교 지도를 살펴 보세요
        </p>
      </div>
      <div className={styles.footer}>
        <p className={styles.tooltip}>회원가입하시면 학과별 알림을 받아 보실 수 있어요!</p>
        <button className={styles.googleButton} onClick={goToGoogleAuth}>
          <img src={GoogleLogo} alt="구글 로고" className={styles.googleLogo} />
          구글 이메일로 시작하기
        </button>
      </div>
    </div>
  );
};

export default Landing;
