import { Outlet } from 'react-router';

import NavBar from '@/components/NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};

export default Layout;
