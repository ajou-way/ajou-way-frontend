import { Outlet, useLocation } from 'react-router';

import NavBar from '@/components/_common/NavBar/NavBar';

import { PATH } from '@/constants/routes';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Outlet />
      {(location.pathname !== PATH.LANDING || location.pathname !== PATH.JOIN) && <NavBar />}
    </>
  );
};

export default Layout;
