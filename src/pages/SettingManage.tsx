


import { Header } from "@/components"
import { ArrowLeft2 } from "iconsax-react"
import styled from "styled-components"
import { StyledIcon } from "."

export const SettingManage = () => {
  return (
    <ServiceWrap>
      <Header 
      leftIcon={
      <StyledIcon>
        <ArrowLeft2 />
      </StyledIcon>}
      centerText="오피스 관리">
      </Header>


      <SettingListWrap></SettingListWrap>
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
`