import { useRef } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { useBackdropClick } from '@/hooks/_common/useBackdropClick';
import { useIsOpen } from '@/hooks/_common/useIsOpen';

import * as styles from './SearchBar.styles';

const SEARCH_DATA = ['다산관', '연암관', '원천관', '팔달관', '제1학생회관', '제2학생회관']; // TODO: 추후 API 대체 필요

interface SearchBarProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const SearchBar = ({ isOpen, open, close }: SearchBarProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { isOpen: isListOpen, open: openList, close: closeList } = useIsOpen();

  useBackdropClick(ref, close);

  return isOpen ? (
    <div ref={ref} className={styles.layout}>
      <input className={styles.input} placeholder="검색어를 입력하세요." onClick={openList} />
      {isListOpen && (
        <ul className={styles.list}>
          {SEARCH_DATA.map((item) => (
            <li key={item} className={styles.item} onClick={closeList}>
              {item}
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
