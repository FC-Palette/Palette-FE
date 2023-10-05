import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import { theme } from "@/styles";
import styled from "styled-components";
import { ModifySexIcon } from "../common/svgicon";
import { useState } from "react";

interface CategoryProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Category: React.FC<CategoryProps> = ({ selected, children, onClick }) => (
  <CategoryContainer
    onClick={onClick}
    selected={selected}>
    <ModifySexIcon male={selected} strokeColor={selected ? theme.main.blueL1 : theme.greyScale.grey5} />
    {children}
  </CategoryContainer>
);

export const ModifySex = ({ formData, setFormData }) => {
  const handleSexClick = (isMale) => {
    setSelectedSex(isMale);
    setFormData({
      ...formData,
      sex: isMale ? "남성" : "여성"
    });
  };

  const [selectedSex, setSelectedSex] = useState(formData.sex === "남성");

  return (
    <SexWrap>
      <Category
        onClick={() => handleSexClick(false)}
        selected={selectedSex === false}
      >
        {MODIFY_PROFILE_INPUT_TEXTS.sexFemaleText}
      </Category>
      <Category
        onClick={() => handleSexClick(true)}
        selected={selectedSex === true}
      >
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
  color: ${(props) => (props.selected ? theme.main.blueL1 : "black")};
  background-color: ${(props) =>
    props.selected ? theme.greyScale.blie : "white"};
  padding: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 21px;
  cursor: pointer;
  svg {
    margin-right: 4px;
    stroke: ${(props) => (props.selected ? "white" : theme.greyScale.blueGrey)};
  }
`;
