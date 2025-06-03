import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { PATH } from '@/constants/routes';

const Main = () => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!accessToken) navigate(PATH.LANDING, { replace: true });
    else navigate(PATH.MAIN_MAP, { replace: true });
  }, [accessToken]);

  return null;
};

export default Main;
