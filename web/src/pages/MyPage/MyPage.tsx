import { useAuthQuery } from '@/queries/useAuthQuery';

import * as styles from './MyPage.styles';

const MyPage = () => {
  const { profile } = useAuthQuery();

  if (!profile) return null;

  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>마이페이지</h1>
      <div className={styles.container}>
        <p className={styles.name}>{profile.userName}</p>
        <p className={styles.info}>{profile.email}</p>
      </div>
    </div>
  );
};

export default MyPage;
