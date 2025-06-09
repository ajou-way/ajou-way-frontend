import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { useIsOpen } from '@/hooks/_common/useIsOpen';

import { departments } from './departments';
import * as styles from './Dropdown.styles';

interface DropdownProps {
  major: string;
  onSelect: (major: string) => void;
}

const Dropdown = ({ major, onSelect }: DropdownProps) => {
  const { isOpen, open, close } = useIsOpen();

  const handleSelect = (major: string) => {
    onSelect(major);
    close();
  };

  return (
    <div className={styles.layout}>
      <div className={styles.dropdown} onClick={isOpen ? close : open}>
        <div className={styles.selected}>
          <p>{major || '학과를 선택해 주세요'}</p>
          {isOpen ? (
            <IoIosArrowUp size={16} className={styles.icon} />
          ) : (
            <IoIosArrowDown size={16} className={styles.icon} />
          )}
        </div>
        {isOpen && (
          <ul className={styles.list}>
            {departments.map(({ code, name }) => (
              <li key={code} onClick={() => handleSelect(name)} className={styles.item}>
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
