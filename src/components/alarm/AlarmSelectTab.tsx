import { ALARM_SELECT_TAB_TEXT } from "@/constants";
import { theme } from "@/styles";
import { alarmSelectTabProps } from "@/types";
import { useState } from "react";
import styled from "styled-components"
import { AlarmCategory } from ".";

export const AlarmSelectTab = () => {
const [activeTab, setActiveTab] = useState(0);
const handleTabClick = (tabIndex) => {
setActiveTab(tabIndex);
};

return (
<>
    <SelectWrap>
        <Tab
            onClick={() => handleTabClick(0)}
            active={activeTab === 0} 
        >
        {ALARM_SELECT_TAB_TEXT.buildingNoticeText}
        </Tab>
        <Tab
            onClick={() => handleTabClick(1)}
            active={activeTab === 1}
        >
        {ALARM_SELECT_TAB_TEXT.communicationText}
        </Tab>
        <Tab
            onClick={() => handleTabClick(2)}
            active={activeTab === 2}
        >
        {ALARM_SELECT_TAB_TEXT.followText}
        </Tab>
    </SelectWrap>
    <AlarmCategory activeTab={activeTab} />
</>
)
}


const SelectWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-bottom: 1px solid ${theme.greyScale.grey2};
    margin-top: 23px;
`

const Tab = styled.div<alarmSelectTabProps>`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 127px;
    height: 50px;
    font-size: 18px;
    font-weight: ${(props) => props.active ? 700 : 400};
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
