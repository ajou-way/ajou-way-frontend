import { Outlet } from 'react-router';

import NavBar from '@/components/_common/NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};

export default Layout;
