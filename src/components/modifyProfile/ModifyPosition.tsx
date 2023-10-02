import { MODIFY_PROFILE_INPUT_TEXTS } from '@/constants/modifyprofile'
import { MODIFY_PROFILE_CATEGORY_TEXTS } from '@/constants/modifyprofile/modifyProfileCategoryText'
import { theme } from '@/styles';
import styled from 'styled-components';
import React, { useState } from 'react';

export const ModifyPosition = () => {
  const positions = MODIFY_PROFILE_CATEGORY_TEXTS.position;
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handlePositionClick = (position) => {
    setSelectedPosition(position);
  };

  return (
    <PositionWrap>
      <label>{MODIFY_PROFILE_INPUT_TEXTS.positionText}</label>
      <PositionList>
        {positions.map((position, index) => (
          <PositionItem
            key={index}
            onClick={() => handlePositionClick(position)}
            selected={selectedPosition === position}
          >
            {position}
          </PositionItem>
        ))}
      </PositionList>
    </PositionWrap>
  )
}

const PositionWrap = styled.div`
  max-width: 365px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const PositionList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  margin-top: 12px;
`

const PositionItem = styled.li`
  color: black;
  background-color: ${(props) =>
    props.selected ? theme.greyScale.blie :theme.greyScale.blueGrey};

  color: ${(props) => (props.selected ? theme.main.blueL1 : "black")};
  padding: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 21px;
  cursor: pointer;
`
