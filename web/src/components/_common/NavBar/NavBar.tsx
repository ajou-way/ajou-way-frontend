import { GoHomeFill } from 'react-icons/go';
import { IoMapOutline, IoChatboxEllipsesOutline, IoPersonOutline } from 'react-icons/io5';
import { TbDisabled } from 'react-icons/tb';
import { NavLink, useLocation } from 'react-router';

import { PATH } from '@/constants/routes';

import * as styles from './NavBar.styles';

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className={styles.layout}>
        <NavLink to={PATH.MAIN_MAP} className={({ isActive }) => (isActive ? styles.activeLink : styles.defaultLink)}>
          {location.pathname === PATH.MAIN_MAP && <div className={styles.line} />}
          <IoMapOutline size="2rem" />
        </NavLink>
        <NavLink to={PATH.BARRIER_FREE_MAP} className={({ isActive }) => (isActive ? styles.activeLink : styles.defaultLink)}>
          {location.pathname === PATH.BARRIER_FREE_MAP && <div className={styles.line} />}
          <TbDisabled size="2rem" />
        </NavLink>
        <NavLink to={PATH.MAIN} className={styles.homeLink}>
          <div className={styles.homeIcon}>
            <GoHomeFill size="2rem" />
          </div>
        </NavLink>
        <NavLink to="/community" className={({ isActive }) => (isActive ? styles.activeLink : styles.defaultLink)}>
          {location.pathname === '/community' && <div className={styles.line} />}
          <IoChatboxEllipsesOutline size="2rem" />
        </NavLink>
        <NavLink to="/my-page" className={({ isActive }) => (isActive ? styles.activeLink : styles.defaultLink)}>
          {location.pathname === '/mypage' && <div className={styles.line} />}
          <IoPersonOutline size="2rem" />
        </NavLink>
      </div>
      <div className={styles.gap} />
    </>
  );
};

export default NavBar;
