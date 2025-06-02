import { LuArrowRight } from 'react-icons/lu';

import { useGetSearchParams } from '@/hooks/useRoutesMap';

import * as styles from './Header.styles';

const Header = () => {
  const { departure, arrival } = useGetSearchParams();

  return (
    <div className={styles.layout}>
      <div className={styles.container}>{departure}</div>
      <div className={styles.circle}>
        <LuArrowRight size={16} />
      </div>
      <div className={styles.container}>{arrival}</div>
    </div>
  );
};

export default Header;
