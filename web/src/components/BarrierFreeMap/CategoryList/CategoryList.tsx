import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import { MarkerType } from '@/pages/type';

import CategoryButton from '@/components/_common/CategoryButton/CategoryButton';

import { MARKER_TYPE } from '@/constants/barrierFree';

import * as styles from './CategoryList.styles';

interface CategoryListProps {
  categories: Record<MarkerType, boolean>;
  filterCategories: (category: MarkerType) => void;
}

const CategoryList = ({ categories, filterCategories }: CategoryListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openList = () => setIsOpen(true);
  const closeList = () => setIsOpen(false);

  return (
    <div className={styles.layout}>
      {isOpen ? (
        <ul className={styles.buttonList}>
          <li>
            <button className={styles.cancelButton} onClick={closeList}>
              <IoCloseOutline size="2rem" />
            </button>
          </li>
          {Object.entries(MARKER_TYPE).map(([key, value]) => (
            <li key={key}>
              <CategoryButton
                value={value}
                isActive={categories[key as MarkerType]}
                onClick={() => filterCategories(key as MarkerType)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <CategoryButton value="필터 적용하기" onClick={openList} />
      )}
    </div>
  );
};

export default CategoryList;
