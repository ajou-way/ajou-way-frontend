import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useAuthMutation } from '@/queries/useAuthMutation';
import { useAuthQuery } from '@/queries/useAuthQuery';

import { PATH } from '@/constants/routes';

import * as styles from './SignUp.styles';

const SignUp = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [major, setMajor] = useState('');
  const [studentId, setStudentId] = useState('');

  const { profile } = useAuthQuery();
  const { updateProfileMutation } = useAuthMutation();

  useEffect(() => {
    if (profile) {
      setUserName(profile.userName);
      setUserEmail(profile.email);
    }
  }, [profile]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!major || !studentId) {
      alert('정보를 모두 입력해 주세요.');
      return;
    }

    updateProfileMutation({ major, studentId }, { onSuccess: () => navigate(PATH.MAIN_MAP) });
  };

  if (!profile) return null;

  return (
    <div className={styles.layout}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>추가 정보 입력</h1>
        <p className={styles.description}>회원가입을 완료하기 위해 추가 정보를 입력해 주세요!</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <p>이름</p>
          <input type="text" className={styles.input} value={userName} disabled />
        </div>
        <div className={styles.container}>
          <p>이메일</p>
          <input type="email" className={styles.input} value={userEmail} disabled />
        </div>
        <div className={styles.container}>
          <p>학과 정보</p>
          <input
            type="text"
            placeholder="학과를 입력하세요"
            className={styles.input}
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>
        <div className={styles.container}>
          <p>학번</p>
          <input
            type="text"
            placeholder="학번을 입력하세요"
            className={styles.input}
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <input type="submit" value="회원가입 완료하기" className={styles.submit} disabled={!major || !studentId} />
      </form>
    </div>
  );
};

export default SignUp;
