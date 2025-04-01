import { IoIosClose } from 'react-icons/io';

import * as styles from './InformationModal.styles';

interface InformationModalProps {
  isOpen: boolean;
  close: () => void;
  title: string;
}

const InformationModal = ({ isOpen, close, title }: InformationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
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
