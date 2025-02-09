import { useState } from 'react';

import type { MarkerType } from '@/pages/BarrierFreeMap/BarrierFreeMap.type';

import * as styles from './FilterList.styles';

const MARKER_TYPE: Record<MarkerType, string> = {
  elevator: '엘리베이터',
  impariment_toilet: '장애인 화장실',
  ramp: '경사로',
  note: '특이 사항 존재',
  audio_device: '음성 유도기',
  support_office: '장애학생지원실',
};

const FilterList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState<Record<MarkerType, boolean>>({
    elevator: false,
    impariment_toilet: false,
    ramp: false,
    note: false,
    audio_device: false,
    support_office: false,
  });

  const toggleSelected = (key: MarkerType) => {
    setIsSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.layout}>
      {isOpen ? (
        <ul className={styles.buttonList}>
          {Object.entries(MARKER_TYPE).map(([key, value]) => (
            <li key={key}>
              <button
                className={isSelected[key as MarkerType] ? styles.activeButton : styles.defaultButton}
                onClick={() => toggleSelected(key as MarkerType)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <button className={styles.defaultButton} onClick={() => setIsOpen(true)}>
          필터 적용하기
        </button>
      )}
    </div>
  );
};

export default FilterList;
