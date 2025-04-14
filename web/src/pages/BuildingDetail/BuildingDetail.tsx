import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';

import * as S from './BuildingDetail.styles';

const TAB_ITEM = [
  { id: 1, value: '건물 정보', subTitle: ['소개', '층별 안내'] },
  { id: 2, value: '출입문 정보', subTitle: ['출입문 정보'] },
  { id: 3, value: '식당', subTitle: ['팔달관 매점', '메뉴'] },
  { id: 4, value: '편의점', subTitle: ['CU 팔달관점'] },
  { id: 5, value: '주차장', subTitle: ['주차장 정보'] },
];

const BuildingDetail = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const navigate = useNavigate();

  return (
    <div className={S.layout}>
      <div className={S.buttonContainer}>
        <button onClick={() => navigate(-1)}>
          <IoIosArrowBack size="2rem" />
        </button>
      </div>
      <div className={S.header}>
        <h1 className={S.title}>팔달관</h1>
        <img
          src="https://i.namu.wiki/i/eS12uEAhzad9c3I-ju-LI2uh6SeH_hxTDCmA9-0oCf8lNZ4Iy_QSWK73m_UPWyOri0lvTSyQwfZ_8NlDOj5wsw.webp"
          className={S.image}
        />
      </div>
      <div className={S.tab}>
        {TAB_ITEM.map(({ id, value }) => (
          <div
            key={id}
            className={id === activeIndex ? S.activeItem : S.defaultItem}
            onClick={() => setActiveIndex(id)}
          >
            {value}
          </div>
        ))}
      </div>
      <div className={S.body}>
        {TAB_ITEM.find(({ id }) => id === activeIndex)?.subTitle.map((value) => (
          <div className={S.container}>
            <h2 className={S.subTitle}>{value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingDetail;
