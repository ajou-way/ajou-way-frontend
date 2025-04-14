import * as styles from './CategoryButton.styles';

interface CategoryButtonProps {
  value: string;
  isActive?: boolean;
  onClick: () => void;
}

const CategoryButton = ({ value, isActive = false, onClick }: CategoryButtonProps) => {
  return (
    <button className={isActive ? styles.activeButton : styles.defaultButton} onClick={onClick}>
      {value}
    </button>
  );
};

export default CategoryButton;
