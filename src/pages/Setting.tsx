import { Header } from "components/index"
import { ArrowLeft2 } from "iconsax-react"
import { styled } from "styled-components"
import { SettingMenuList } from "components/setting"
import { useNavigate } from "react-router-dom"


export const Setting = () => {
  const navigate = useNavigate()
  return (
    <SettingContainer>
      <Header 
        leftIcon={
        <StyledIcon onClick={() => navigate(-1)}>
          <ArrowLeft2 />
        </StyledIcon>}
        centerText="설정">
      </Header>
      <SettingListWrap>
          <SettingMenuList></SettingMenuList>
      </SettingListWrap>
    </SettingContainer>
  )
}


const SettingContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  position: relative;
  width: 100%;
  svg{
    cursor: pointer;
  }
`

const StyledIcon = styled.div`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`

const SettingListWrap = styled.div`
  width: 430px;
  max-width: 100%;
  padding: 0 24px;
`