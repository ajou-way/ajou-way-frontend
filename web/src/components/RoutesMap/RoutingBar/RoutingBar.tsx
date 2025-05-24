import { LuArrowDown } from 'react-icons/lu';

import * as styles from './RoutingBar.styles';

interface RoutingBarProps {
  departure: string;
  arrival: string;
}

const RoutingBar = ({ departure, arrival }: RoutingBarProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.circle}>
          <LuArrowDown size={16} />
        </div>
        <div className={styles.bar}>{departure}</div>
        <hr className={styles.line} />
        <div className={styles.bar}>{arrival}</div>
      </div>
    </div>
  );
};

export default RoutingBar;
