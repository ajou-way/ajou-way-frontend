import { useRef, useState } from 'react';

import { css } from '../../../styled-system/css';

import * as S from './Admin.styles';

const Admin = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [coords, setCoords] = useState<{ lat: number; lng: number }[]>([]);

  const stopRecord = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 5초마다 좌표 기록
  const startRecord = () => {
    console.log('좌표 기록 시작');

    stopRecord();

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoords((prev) => [...prev, { lat: latitude, lng: longitude }]);
    });

    intervalRef.current = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCoords((prev) => [...prev, { lat: latitude, lng: longitude }]);
      });
    }, 5000);
  };

  const resetRecord = () => {
    console.log('좌표 기록 초기화');

    stopRecord();
    setCoords([]);
  };

  const sendRecord = () => {
    console.log('좌표 전송');
  };

  return (
    <div className={S.layout}>
      <h1 className={css({ textStyle: 'title' })}>좌표 기록 페이지</h1>
      <div className={S.buttonList}>
        <button className={S.button} onClick={startRecord}>
          좌표 기록 시작
        </button>
        <button className={S.button} onClick={stopRecord}>
          좌표 기록 중지
        </button>
        <button className={S.button} onClick={resetRecord}>
          좌표 기록 초기화
        </button>
        <button className={S.button} onClick={sendRecord}>
          좌표 전송
        </button>
      </div>
      <h2 className={css({ textStyle: 'subTitle', fontWeight: 'semibold' })}>기록된 좌표</h2>
      <ul className={S.list}>
        {coords.map(({ lat, lng }, index) => (
          <li key={index}>
            {index + 1}번: 위도 {lat.toFixed(6)}, 경도 {lng.toFixed(6)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
