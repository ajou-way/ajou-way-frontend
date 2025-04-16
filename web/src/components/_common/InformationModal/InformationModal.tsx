import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router';

import { PATH } from '@/constants/routes';

import * as styles from './InformationModal.styles';

interface InformationModalProps {
  id: number;
  name: string;
  onRoutingClick: (departure: string) => void;
  isOpen: boolean;
  close: () => void;
}

const InformationModal = ({ id, name, onRoutingClick, isOpen, close }: InformationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.buttonContainer}>
            <button className={styles.routingButton} onClick={() => onRoutingClick(name)}>
              출발
            </button>
            <button className={styles.closeButton} onClick={close}>
              <IoIosClose size="2.4rem" />
            </button>
          </div>
        </div>
      </div>
      <Link to={`${PATH.BUILDING_DETAIL}/${id}`}>
        <button className={styles.linkButton}>더 많은 정보 보기</button>
      </Link>
    </div>
  );
};

export default InformationModal;
