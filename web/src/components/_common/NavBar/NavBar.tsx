import { GoHomeFill } from 'react-icons/go';
import { IoMapOutline, IoChatboxEllipsesOutline, IoPersonOutline } from 'react-icons/io5';
import { TbDisabled } from 'react-icons/tb';
import { NavLink, useLocation } from 'react-router';

import * as styles from './NavBar.styles';

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className={styles.layout}>
        <NavLink
          to="/map"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.defaultLink)}
        >
          {location.pathname === '/map' && <div className={styles.line} />}
          <IoMapOutline size="2rem" />
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.defaultLink)}
        >
          {location.pathname === '/' && <div className={styles.line} />}
          <TbDisabled size="2rem" />
        </NavLink>
        <NavLink to="/" className={styles.homeLink}>
          <div className={styles.homeIcon}>
            <GoHomeFill size="2rem" />
          </div>
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.defaultLink)}
        >
          {location.pathname === '/community' && <div className={styles.line} />}
          <IoChatboxEllipsesOutline size="2rem" />
        </NavLink>
        <NavLink
          to="/mypage"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.defaultLink)}
        >
          {location.pathname === '/mypage' && <div className={styles.line} />}
          <IoPersonOutline size="2rem" />
        </NavLink>
      </div>
      <div className={styles.gap} />
    </>
  );
};

export default NavBar;
