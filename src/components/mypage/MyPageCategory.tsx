import { theme } from "styles/index";
import { css, styled } from "styled-components";
import { useState, useEffect } from "react";
import { CATEGORY_TITLE_TEXTS } from "constants/index";
import { myPageCategoryProps } from "types/index";

export const MyPageCategory = ({ activeTab }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setActiveCategory(0);
  }, [activeTab]);


  return (
    <CategoryWrap>
      {activeTab === 0 && (
        <>
          <AllCategory
            activeCategory={activeCategory === 0} 
            onClick={() => setActiveCategory(0)} 
          >
            {CATEGORY_TITLE_TEXTS.categoryAllText}
          </AllCategory>
          <WithDevelop
            activeCategory={activeCategory === 1} 
            onClick={() => setActiveCategory(1)} 
          >
            {CATEGORY_TITLE_TEXTS.WithDevelopText}
          </WithDevelop>
          <WithBuy
            activeCategory={activeCategory === 2} 
            onClick={() => setActiveCategory(2)} 
          >
            {CATEGORY_TITLE_TEXTS.WithBuyText}
          </WithBuy>
          <MyPost
            activeCategory={activeCategory === 3} 
            onClick={() => setActiveCategory(3)} 
          >
            {CATEGORY_TITLE_TEXTS.MyPostText}
          </MyPost>
        </>
      )}
      {activeTab === 1 && (
        <>
          <AllCategory
            activeCategory={activeCategory === 0} 
            onClick={() => setActiveCategory(0)} 
          >
            {CATEGORY_TITLE_TEXTS.categoryAllText}
          </AllCategory>
          <WithDevelop
            activeCategory={activeCategory === 1} 
            onClick={() => setActiveCategory(1)} 
          >
            {CATEGORY_TITLE_TEXTS.WithDevelopText}
          </WithDevelop>
          <WithBuy
            activeCategory={activeCategory === 2} 
            onClick={() => setActiveCategory(2)} 
          >
            {CATEGORY_TITLE_TEXTS.WithBuyText}
          </WithBuy>
        </>
      )}
    </CategoryWrap>
  );
};


const CommonCategoryCss = css<myPageCategoryProps>`
  padding: 12px;
  margin-right: 8px;
  border-radius: 21px;
  background-color: ${(props) => props.activeCategory ? theme.greyScale.blie: theme.greyScale.blueGrey};
  color: ${(props) => (props.activeCategory ? theme.main.blueL1 : theme.greyScale.grey9)};
    cursor: pointer;
`

const CategoryWrap = styled.div`
  display: flex;
  margin-top: 12px;
  padding-top: 6px;
  padding-bottom: 5px;
`;


const AllCategory = styled.div<myPageCategoryProps>`
  ${CommonCategoryCss}
  margin-left: 24px;
`;

const WithDevelop = styled.div<myPageCategoryProps>`
  ${CommonCategoryCss}
`;

const WithBuy = styled.div<myPageCategoryProps>`
  ${CommonCategoryCss}
`;

const MyPost = styled.div<myPageCategoryProps>`
  ${CommonCategoryCss}
`;


