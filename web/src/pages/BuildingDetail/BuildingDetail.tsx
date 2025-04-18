import { useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router';

import { useBuildingDetailQuery } from '@/queries/useBuildingDetailQuery';

import * as S from './BuildingDetail.styles';

const TAB_ITEM = [
  {
    id: 1,
    value: '건물 정보',
    subTitle: ['소개', '층별 안내'],
    info: [
      '1993년 12월 준공된 건물로, 이름은 아주대학교가 소재하고 있던 수원시 팔달구에서 유래했다. 지상 10층의 건물로, 아주대학교와 수원시를 조망할 수 있다. 공학교육혁신센터, 현장실습지원센터, CSMC(Cyber Security Multiplex Center) 등이 위치해 있다.',
      '',
    ],
  },
  { id: 2, value: '출입문 정보', subTitle: ['출입문 정보'], info: [] },
  { id: 3, value: '식당', subTitle: ['팔달관 매점', '메뉴'], info: [] },
  { id: 4, value: '편의점', subTitle: ['CU 팔달관점'], info: [] },
  { id: 5, value: '주차장', subTitle: ['주차장 정보'], info: [] },
];

const BuildingDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [activeIndex, setActiveIndex] = useState(1);

  const navigate = useNavigate();

  const activeItem = useMemo(() => TAB_ITEM.find(({ id }) => id === activeIndex), [activeIndex]);

  const { detail, isLoading } = useBuildingDetailQuery(1);

  console.log(detail);

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
        {activeItem?.subTitle.map((value, idx) => (
          <div className={S.container}>
            <h2 className={S.subTitle}>{value}</h2>
            {activeItem?.info[idx] ?? ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingDetail;
