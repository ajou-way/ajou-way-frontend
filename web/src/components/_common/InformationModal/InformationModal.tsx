import { IoIosClose } from 'react-icons/io';

import { useMarkerDetailQuery } from '@/queries/useMarkerDetailQuery';

import * as styles from './InformationModal.styles';

interface InformationModalProps {
  id: number;
  isOpen: boolean;
  close: () => void;
}

const InformationModal = ({ id, isOpen, close }: InformationModalProps) => {
  const { name, isLoading } = useMarkerDetailQuery(id);

  if (!isOpen && isLoading) return null;

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.buttonContainer}>
            <button className={styles.routingButton}>출발</button>
            <button className={styles.closeButton} onClick={close}>
              <IoIosClose size="2.4rem" />
            </button>
          </div>
        </div>
      </div>
      <button className={styles.linkButton}>더 많은 정보 보기</button>
    </div>
  );
};

export default InformationModal;
