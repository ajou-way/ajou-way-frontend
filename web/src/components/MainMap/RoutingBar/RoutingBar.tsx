import { useRef, useState, useEffect, useMemo } from 'react';
import { LuArrowDown } from 'react-icons/lu';
import { useNavigate } from 'react-router';

import { Building } from '@/pages/type';

import { useBackdropClick } from '@/hooks/_common/useBackdropClick';
import { useIsOpen } from '@/hooks/_common/useIsOpen';

import { useBuildingsQuery } from '@/queries/useBuildingsQuery';

import * as styles from './RoutingBar.styles';

interface RoutingBarProps {
  initialDeparture: Building | null;
  isOpen: boolean;
  close: () => void;
}

const RoutingBar = ({ initialDeparture, isOpen, close }: RoutingBarProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [departure, setDeparture] = useState<Building | null>(null);
  const [arrival, setArrival] = useState<Building | null>(null);

  const [departureName, setDepartureName] = useState('');
  const [arrivalName, setArrivalName] = useState('');

  useEffect(() => {
    if (!initialDeparture) return;

    setDeparture(initialDeparture);
    setDepartureName(initialDeparture.name);
  }, [initialDeparture]);

  const { buildings } = useBuildingsQuery();

  const results = useMemo(() => {
    return buildings.filter(({ name }) => name.includes(arrivalName));
  }, [arrivalName, buildings]);

  const { isOpen: isListOpen, open: openList, close: closeList } = useIsOpen();

  const closeRoutingBar = () => {
    setArrival(null);
    setArrivalName('');

    closeList();
    close();
  };

  useBackdropClick(ref, closeRoutingBar);

  const handleItemClick = async (building: Building) => {
    setArrival(building);
    setArrivalName(building.name);

    closeList();
  };

  const navigate = useNavigate();

  const moveToRoutesMap = () => {
    if (!departure || !arrival) return;

    const startLat = departure.geometry.coordinates[1];
    const startLng = departure.geometry.coordinates[0];

    const endLat = arrival.geometry.coordinates[1];
    const endLng = arrival.geometry.coordinates[0];

    const searchParams = new URLSearchParams({
      startLat: String(startLat),
      startLng: String(startLng),
      endLat: String(endLat),
      endLng: String(endLng),
      departure: departure.name,
      arrival: arrival.name,
    });

    navigate(`/routes?${searchParams.toString()}`);
  };

  if (!isOpen) return null;

  return (
    <div ref={ref} className={styles.layout}>
      <div className={styles.inputContainer}>
        <div className={styles.circle}>
          <LuArrowDown size={16} />
        </div>
        <input className={styles.input} value={departureName} disabled />
        <hr className={styles.line} />
        <input
          className={styles.input}
          placeholder="검색어를 입력하세요."
          value={arrivalName}
          onChange={(e) => setArrivalName(e.target.value)}
          onClick={openList}
        />
      </div>
      <button
        className={styles.button({ visual: departure && arrival ? 'default' : 'disabled' })}
        disabled={!departure || !arrival}
        onClick={moveToRoutesMap}
      >
        길찾기로 이동
      </button>
      {isListOpen && (
        <ul className={styles.list}>
          {results.map((item) => (
            <li key={item.id} className={styles.item} onClick={() => handleItemClick(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoutingBar;
