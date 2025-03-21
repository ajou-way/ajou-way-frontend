import { useRef } from 'react';

import { useBackdropClick } from '@/hooks/_common/useBackdropClick';
import { useIsOpen } from '@/hooks/_common/useIsOpen';

import * as styles from './SearchBar.styles';

const SEARCH_DATA = ['다산관', '연암관', '원천관', '팔달관', '제1학생회관', '제2학생회관']; // TODO: 추후 API 대체 필요

const SearchBar = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { isOpen, open, close } = useIsOpen();

  useBackdropClick(ref, close);

  return (
    <div ref={ref} className={styles.layout}>
      <input className={styles.input} placeholder="검색어를 입력하세요." onClick={open} />
      {isOpen && (
        <ul className={styles.list}>
          {SEARCH_DATA.map((item) => (
            <li key={item} className={styles.item} onClick={close}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
