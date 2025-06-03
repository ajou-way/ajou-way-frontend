import { useAuthQuery } from '@/queries/useAuthQuery';

const MyPage = () => {
  const { profile } = useAuthQuery();

  if (!profile) return null;

  return (
    <div>
      <h1>마이페이지</h1>
      <div>
        <p>{profile.userName}</p>
        <p>{profile.email}</p>
      </div>
    </div>
  );
};

export default MyPage;
