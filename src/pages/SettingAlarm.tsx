
import { Header } from "@/components"
import { ArrowLeft2 } from "iconsax-react"
import styled from "styled-components"
import { StyledIcon } from "."

export const SettingAlarm = () => {
  return (
    <ServiceWrap>
      <Header 
      leftIcon={
      <StyledIcon>
        <ArrowLeft2 />
      </StyledIcon>}
      centerText="알림 설정">
      </Header>


      <SettingListWrap>
        <AllList>전체</AllList>
        <AlarmList>공지사항 및 일정</AlarmList>
        <AlarmList>공용시설</AlarmList>
        <AlarmList>불편접수</AlarmList>
        <AlarmList>설문조사</AlarmList>
        <AlarmList>관리비 조회</AlarmList>
      </SettingListWrap>
    </ServiceWrap>
  )
}


const ServiceWrap = styled.div`
  margin: 0 auto;
  height: 100vh;
  position: relative;
  width: 100%;
  max-width: 430px;
`


const SettingListWrap = styled.div`
  width: 430px;
  max-width: 100%;
  padding-left: 19px;
  padding-right: 28px;
`

const AllList = styled.div`
  font-size: 16px;
  padding: 13px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 11px;
`

const AlarmList = styled.div`
  padding-top: 11px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-family: inter;
`