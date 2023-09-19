import { theme } from "styles/index";
import { css, styled } from "styled-components";
import { useState, useEffect } from "react";
import { alarmCategoryProps } from "types/index";
import { ALARM_CATEGORY_TEXT } from "constants/index";

export const AlarmCategory = ({ activeTab }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setActiveCategory(0);
  }, [activeTab]);

  return (
    <CategoryWrap>
      {activeTab === 0 && (
        <>
          <Notice
            activeCategory={activeCategory === 0}
            onClick={() => setActiveCategory(0)}
          >
            {ALARM_CATEGORY_TEXT.NoticeText}
          </Notice>
          <Survey
            activeCategory={activeCategory === 1}
            onClick={() => setActiveCategory(1)}
          >
            {ALARM_CATEGORY_TEXT.SurveyText}
          </Survey>
          <ReadAll
            activeCategory={activeCategory === 2}
            onClick={() => setActiveCategory(2)}
          >
            {ALARM_CATEGORY_TEXT.allReadText}
          </ReadAll>
        </>
      )}
      {activeTab === 1 && (
        <>
          <WithDevelop
            activeCategory={activeCategory === 0}
            onClick={() => setActiveCategory(0)}
          >
            {ALARM_CATEGORY_TEXT.WithDevelopText}
          </WithDevelop>
          <WithBuy
            activeCategory={activeCategory === 1}
            onClick={() => setActiveCategory(1)}
          >
            {ALARM_CATEGORY_TEXT.WithBuyText}
          </WithBuy>
          <ReadAll
            activeCategory={activeCategory === 2}
            onClick={() => setActiveCategory(2)}
          >
            {ALARM_CATEGORY_TEXT.allReadText}
          </ReadAll>
        </>
      )}
      {activeTab === 2 && (
        <>
          <WithDevelop
            activeCategory={activeCategory === 0}
            onClick={() => setActiveCategory(0)}
          >
            {ALARM_CATEGORY_TEXT.WithDevelopText}
          </WithDevelop>
          <WithBuy
            activeCategory={activeCategory === 1}
            onClick={() => setActiveCategory(1)}
          >
            {ALARM_CATEGORY_TEXT.WithBuyText}
          </WithBuy>
          <ReadAll
            activeCategory={activeCategory === 2}
            onClick={() => setActiveCategory(2)}
          >
            {ALARM_CATEGORY_TEXT.allReadText}
          </ReadAll>
        </>
      )}
    </CategoryWrap>
  );
};

const CommonCategoryCss = css<alarmCategoryProps>`
  padding: 12px;
  margin-right: 8px;
  height: 43px;
  border-radius: 21px;
  font-size: 16px;
  background-color: ${(props) =>
    props.activeCategory ? theme.greyScale.blie : theme.greyScale.blueGrey};
  color: ${(props) =>
    props.activeCategory ? theme.main.blueL1 : theme.greyScale.grey9};
  cursor: pointer;
`;

const CategoryWrap = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center; 
  margin-top: 7px;
  padding-top: 7px;
  padding-bottom: 7px;
`;

const Notice = styled.div<alarmCategoryProps>`
  ${CommonCategoryCss}
  margin-left: 24px;
`;

const Survey = styled.div<alarmCategoryProps>`
  ${CommonCategoryCss}
`;

const WithBuy = styled.div<alarmCategoryProps>`
  ${CommonCategoryCss}
`;

const ReadAll = styled.div<alarmCategoryProps>`
  ${CommonCategoryCss}
  margin-left: auto;
  margin-right: 24px;
`;

const WithDevelop = styled.div<alarmCategoryProps>`
  ${CommonCategoryCss}
  margin-left: 24px;
`;
