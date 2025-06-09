import MDEditor from '@uiw/react-md-editor';
import { useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router';

import { useBuildingDetailQuery } from '@/queries/useBuildingDetailQuery';

import * as S from './BuildingDetail.styles';

const TAB_ITEM = {
  INFORMATION: '건물 정보',
  ENTRANCE: '출입문 정보',
  RESTAURANT: '식당',
  CONVENIENCE_STORE: '편의점',
  PARKING: '주차장',
};

const BuildingDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [activeTab, setActiveTab] = useState('INFORMATION');

  const { buildingDetail, isLoading } = useBuildingDetailQuery(id || '');

  const activeContent = useMemo(() => {
    if (!buildingDetail) return '';

    const { amenityInfos } = buildingDetail;
    const activeItem = amenityInfos?.find((info) => info.type === activeTab);

    return activeItem?.contents || '';
  }, [activeTab, buildingDetail]);

  if (isLoading) return null;

  return (
    <div className={S.layout}>
      <div className={S.buttonContainer}>
        <button onClick={() => navigate(-1)}>
          <IoIosArrowBack size="2rem" />
        </button>
      </div>
      <div className={S.header}>
        <h1 className={S.title}>{buildingDetail?.name}</h1>
        {/* <img
          src="https://i.namu.wiki/i/eS12uEAhzad9c3I-ju-LI2uh6SeH_hxTDCmA9-0oCf8lNZ4Iy_QSWK73m_UPWyOri0lvTSyQwfZ_8NlDOj5wsw.webp"
          className={S.image}
        /> */}
      </div>
      <div className={S.tab}>
        {Object.entries(TAB_ITEM).map(([key, value]) => (
          <div key={key} className={key === activeTab ? S.activeItem : S.defaultItem} onClick={() => setActiveTab(key)}>
            {value}
          </div>
        ))}
      </div>
      <div className={S.body}>
        <MDEditor.Markdown source={activeContent} style={{ fontSize: '1.2rem' }} />
      </div>
    </div>
  );
};

export default BuildingDetail;
