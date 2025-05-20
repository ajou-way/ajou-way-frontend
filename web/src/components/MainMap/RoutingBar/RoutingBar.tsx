import { useRef, useState, useEffect, useMemo } from 'react';
// import { LuArrowUpDown } from 'react-icons/lu';

import { Building } from '@/pages/type';

import { useBackdropClick } from '@/hooks/_common/useBackdropClick';
import { useIsOpen } from '@/hooks/_common/useIsOpen';

import { useBuildingsQuery } from '@/queries/useBuildingsQuery';

import { getRoutes } from '@/apis/map';

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

  useBackdropClick(ref, close);

  // const switchValue = () => {
  //   setDepartureName(arrivalName);
  //   setArrivalName(departureName);

  //   setDeparture(arrival);
  //   setArrival(departure);
  // };

  const handleItemClick = async (building: Building) => {
    console.log(arrival);

    setArrival(building);
    setArrivalName(building.name);

    closeList();

    if (!departure) return;

    const departureCoords = departure.geometry.coordinates;
    const arrivalCoords = building.geometry.coordinates;

    await getRoutes({
      startLat: departureCoords[1],
      startLng: departureCoords[0],
      endLat: arrivalCoords[1],
      endLng: arrivalCoords[0],
    });
  };

  if (!isOpen) return null;

  return (
    <div ref={ref} className={styles.layout}>
      <div className={styles.inputContainer}>
        {/* <button className={styles.changeButton} onClick={switchValue}>
          <LuArrowUpDown size={16} />
        </button> */}
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
