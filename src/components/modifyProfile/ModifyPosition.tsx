import { MODIFY_PROFILE_INPUT_TEXTS } from '@/constants/modifyprofile'
import { MODIFY_PROFILE_CATEGORY_TEXTS } from '@/constants/modifyprofile/modifyProfileCategoryText'
import { theme } from '@/styles';
import styled from 'styled-components';

export const ModifyPosition = ({ formData, setFormData }) => {
  const positions = MODIFY_PROFILE_CATEGORY_TEXTS.position;
  const selectedPosition = formData.position || null;

  const handlePositionClick = (position) => {
    const newPosition = position === selectedPosition ? null : position;
    setFormData((prevFormData) => ({
      ...prevFormData,
      position: newPosition,
    }));
  };

  return (
    <PositionWrap>
      <label>{MODIFY_PROFILE_INPUT_TEXTS.positionText}</label>
      <span>{MODIFY_PROFILE_INPUT_TEXTS.necessarySymbol}</span>
      <PositionList>
        {positions.map((position, index) => (
          <PositionItem
            key={index}
            onClick={() => handlePositionClick(position)}
            selected={position === selectedPosition}
          >
            {position}
          </PositionItem>
        ))}
      </PositionList>
    </PositionWrap>
  );
};
const PositionWrap = styled.div`
  max-width: 365px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  span{
    padding-left: 2px;
    color: #FF5A5A;
  }
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

const PositionItem = styled.li<{ selected?: boolean;}>`
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
