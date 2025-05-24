import { LuArrowRight } from 'react-icons/lu';
import { useSearchParams } from 'react-router';

import * as styles from './Header.styles';

const Header = () => {
  const [searchParams] = useSearchParams();

  const departure = searchParams.get('departure');
  const arrival = searchParams.get('arrival');

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
