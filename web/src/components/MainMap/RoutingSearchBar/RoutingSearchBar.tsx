import { useRef, useState } from 'react';
import { LuArrowUpDown } from 'react-icons/lu';

import { useBackdropClick } from '@/hooks/_common/useBackdropClick';
import { useIsOpen } from '@/hooks/_common/useIsOpen';

import * as styles from './RoutingSearchBar.styles';

const SEARCH_DATA = ['다산관', '연암관', '원천관', '팔달관', '제1학생회관', '제2학생회관']; // TODO: 추후 API 대체 필요

const RoutingSearchBar = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const { isOpen, open, close } = useIsOpen();

  useBackdropClick(ref, close);

  const switchValue = () => {
    setDeparture(arrival);
    setArrival(departure);
  };

  return (
    <div ref={ref} className={styles.layout}>
      <div className={styles.inputContainer}>
        <button className={styles.changeButton} onClick={switchValue}>
          <LuArrowUpDown size={16} />
        </button>
        <input
          className={styles.input}
          placeholder="검색어를 입력하세요."
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          onClick={open}
        />
        <hr className={styles.line} />
        <input
          className={styles.input}
          placeholder="검색어를 입력하세요."
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
          onClick={open}
        />
      </div>
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

export default RoutingSearchBar;
