
import { Header, SettingChangePwd } from "@/components"
import { ArrowLeft2 } from "iconsax-react"
import styled from "styled-components"
import { StyledIcon } from "."
import { useNavigate } from "react-router-dom"

export const SettingPassword = () => {
  const navigate = useNavigate()
  return (
    <ServiceWrap>
      <Header 
      leftIcon={
      <StyledIcon onClick={() => navigate(-1)}>
        <ArrowLeft2 />
      </StyledIcon>}
      centerText="비밀번호 변경">
      </Header>


      <SettingListWrap>
        <SettingChangePwd></SettingChangePwd>
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
`