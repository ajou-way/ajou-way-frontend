import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router';

import { Building } from '@/pages/type';

import { PATH } from '@/constants/routes';

import * as styles from './InformationModal.styles';

interface InformationModalProps {
  building: Building | null;
  onRoutingClick: (building: Building) => void;
  isOpen: boolean;
  close: () => void;
}

const InformationModal = ({ building, onRoutingClick, isOpen, close }: InformationModalProps) => {
  if (!isOpen || !building) return null;

  const { id, name } = building;

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.buttonContainer}>
            <button className={styles.routingButton} onClick={() => onRoutingClick(building)}>
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
