import { IoCloseOutline } from 'react-icons/io5';

import CategoryButton from '@/components/_common/CategoryButton/CategoryButton';

import * as styles from './CategoryList.styles';

interface CategoryListProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const CategoryList = ({ isOpen, open, close }: CategoryListProps) => {
  return (
    <div className={styles.layout}>
      {isOpen ? (
        <ul className={styles.buttonList}>
          <li>
            <button className={styles.cancelButton} onClick={close}>
              <IoCloseOutline size="2rem" />
            </button>
          </li>
        </ul>
      ) : (
        <CategoryButton value="필터 적용하기" onClick={open} />
      )}
    </div>
  );
};

export default CategoryList;
