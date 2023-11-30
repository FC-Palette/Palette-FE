import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import { theme } from "@/styles";
import styled from "styled-components";
import { ModifySexIcon } from "../common/svgicon";
import { useEffect } from "react";

interface CategoryProps {
  selected: boolean;
  children: React.ReactNode;
}

const Category: React.FC<CategoryProps> = ({ selected, children }) => (
  <CategoryContainer
    selected={selected}>
    {children}
  </CategoryContainer>
);

export const ModifySex = ({ formData, setFormData }) => {
  // 수정되지 않도록 하는 selectedSex 상태값을 초기에 받아온 값으로 설정
  useEffect(() => {
    const initialSelectedSex = formData.sex === "여성" ? false : true;
    setFormData({
      ...formData,
      sex: initialSelectedSex ? "남성" : "여성"
    });
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 빈 배열 전달

  return (
    <SexWrap>
      <Category selected={formData.sex === "여성"}>
        <ModifySexIcon isMale={false} strokeColor={formData.sex === "여성" ? theme.main.blueL1 : theme.greyScale.grey4} />
        {MODIFY_PROFILE_INPUT_TEXTS.sexFemaleText}
      </Category>
      <Category selected={formData.sex === "남성"}>
        <ModifySexIcon isMale={true} strokeColor={formData.sex === "남성" ? theme.main.blueL1 : theme.greyScale.grey4} />
        {MODIFY_PROFILE_INPUT_TEXTS.sexMaleText}
      </Category>
    </SexWrap>
  );
};


const SexWrap = styled.div`
  margin-top: 12px;
  display: flex;

`;

const CategoryContainer = styled.div<CategoryProps>`
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid ${(props) => (props.selected ? "white" : theme.greyScale.grey3)};
  color: ${(props) => (props.selected ? theme.main.blueL1 : theme.greyScale.grey4)};
  background-color: ${(props) =>
    props.selected ? theme.greyScale.blie : "white"};
  padding: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 21px;
  pointer-events: none;
  svg {
    margin-right: 4px;
  }
`;
