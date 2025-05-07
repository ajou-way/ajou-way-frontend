import { useState } from 'react';
import { useParams } from 'react-router';

import { useBuildingDetailMutation } from '@/queries/useBuildingDetailMutation';

import { css } from '../../../styled-system/css';

import * as S from './AddBuildingDetail.styles';

const AddBuildingDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [type, setType] = useState('');
  const [propertyList, setPropertyList] = useState<{ key: string; value: string }[]>([{ key: '', value: '' }]);

  const { addBuildingDetailMutation } = useBuildingDetailMutation();

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const addPropertyItem = () => {
    setPropertyList([...propertyList, { key: '', value: '' }]);
  };

  const handleListChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: 'key' | 'value',
    index: number
  ) => {
    const value = e.target.value;

    const newPropertyList = [...propertyList];

    newPropertyList[index][type] = value;

    setPropertyList(newPropertyList);
  };

  const saveBuildingDetail = () => {
    // { key: string; value: string }[] 형태를 Record<string, string> 형태로 변환
    const properties = propertyList.reduce(
      (acc, { key, value }) => {
        acc[key] = value;
        return acc;
      },
      {} as Record<string, string>
    );

    const info = {
      buildingId: Number(id),
      type,
      properties,
    };

    addBuildingDetailMutation({ info });
  };

  return (
    <div className={S.layout}>
      <h1 className={css({ textStyle: 'title' })}>건물 정보 입력 페이지</h1>
      <div className={S.container}>
        <fieldset>
          <legend className={css({ pb: '1rem' })}>건물 타입을 선택해 주세요.</legend>
          <div className={css({ display: 'flex', gap: '1rem' })}>
            <input type="radio" id="door" name="type" value="DOOR" onChange={handleTypeChange} />
            <label htmlFor="door">출입문 정보</label>
            <input type="radio" id="restaurant" name="type" value="RESTAURANT" onChange={handleTypeChange} />
            <label htmlFor="restaurant">식당</label>
            <input type="radio" id="convenience" name="type" value="CONVENIENCE_STORE" onChange={handleTypeChange} />
            <label htmlFor="convenience">편의점</label>
            <input type="radio" id="parking" name="type" value="PARKING" onChange={handleTypeChange} />
            <label htmlFor="parking">주차장</label>
          </div>
        </fieldset>
        {propertyList.map(({ key, value }, index) => (
          <div key={index} className={S.container}>
            <div className={S.inputField}>
              <label>({index + 1}) 속성 이름을 입력해 주세요.</label>
              <input className={S.input} type="text" value={key} onChange={(e) => handleListChange(e, 'key', index)} />
            </div>
            <div className={S.inputField}>
              <label>({index + 1}) 속성 내용을 입력해 주세요.</label>
              <textarea className={S.input} value={value} onChange={(e) => handleListChange(e, 'value', index)} />
            </div>
          </div>
        ))}
      </div>
      <div className={S.buttonList}>
        <button type="button" className={S.addButton} onClick={addPropertyItem}>
          속성 추가하기
        </button>
        <button type="button" className={S.saveButton} onClick={saveBuildingDetail}>
          저장하기
        </button>
      </div>
    </div>
  );
};

export default AddBuildingDetail;
