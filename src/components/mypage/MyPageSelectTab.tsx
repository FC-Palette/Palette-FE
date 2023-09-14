import { useState } from "react";
import { theme } from "styles/index";
import { styled } from "styled-components";
import { SELECT_TAB_TEXT } from "constants/index";
import { MyPageCategory } from "components/index";
import { myPageSelectTabProps } from "types/index";

export const MyPageSelectTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <TabWrap>
        <Tab
          onClick={() => handleTabClick(0)}
          active={activeTab === 0} 
        >
        {SELECT_TAB_TEXT.selectActiveText}
        </Tab>
        <Tab
          onClick={() => handleTabClick(1)}
          active={activeTab === 1}
        >
        {SELECT_TAB_TEXT.selectWishListText}
        </Tab>
      </TabWrap>
      <MyPageCategory activeTab={activeTab} />
    </>
  );
};

const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.greyScale.grey2};
`;

const Tab = styled.div<myPageSelectTabProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 191px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  color: ${(props) =>
    props.active ? theme.main.blue0 : theme.greyScale.grey5};
  cursor: pointer;

  &::after {
    content: "";
    display: ${(props) => (props.active ? "block" : "none")};
    width: 60px;
    border-bottom: 4px solid ${theme.main.blue0};
    border-radius: 4px;
    position: absolute;
    bottom: 0;
    left: 50%;
    bottom: -5%;
    transform: translateX(-50%);
  }
`
