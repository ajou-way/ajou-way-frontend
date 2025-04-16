import { useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { useBackdropClick } from '@/hooks/_common/useBackdropClick';
import { useIsOpen } from '@/hooks/_common/useIsOpen';

import { useAutoCompleteResultsQuery } from '@/queries/useAutoCompleteResultsQuery';

import * as styles from './SearchBar.styles';

interface SearchBarProps {
  onItemClick: (id: number, name: string) => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const SearchBar = ({ onItemClick, isOpen, open, close }: SearchBarProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState('');

  const { isOpen: isListOpen, open: openList, close: closeList } = useIsOpen();

  const { results } = useAutoCompleteResultsQuery(value);

  const handleClose = () => {
    setValue('');
    closeList();
    close();
  };

  const handleItemClick = (id: number, name: string) => {
    onItemClick(id, name);
    handleClose();
  };

  useBackdropClick(ref, handleClose);

  return isOpen ? (
    <div ref={ref} className={styles.layout}>
      <input
        className={styles.input}
        placeholder="검색어를 입력하세요."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClick={openList}
      />
      {results && isListOpen && (
        <ul className={styles.list}>
          {results.map((item) => (
            <li key={item.id} className={styles.item} onClick={() => handleItemClick(item.id, item.name)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <button className={styles.searchButton} onClick={open}>
      <IoSearchOutline size={16} />
    </button>
  );
};

export default SearchBar;
