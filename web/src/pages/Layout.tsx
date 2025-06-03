import { Outlet, useLocation } from 'react-router';

import NavBar from '@/components/_common/NavBar/NavBar';

import { PATH } from '@/constants/routes';

const Layout = () => {
  const location = useLocation();

  const hasNavBar = !(location.pathname === PATH.MAIN || location.pathname === PATH.LANDING);

  return (
    <>
      <Outlet />
      {hasNavBar && <NavBar />}
    </>
  );
};

export default Layout;
