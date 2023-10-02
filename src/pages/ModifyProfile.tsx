import { ChangeProfilImage, Header, Input, ModifyProfileArea } from "@/components"
import { StyledIcon } from "."
import { useNavigate } from "react-router-dom"
import { ArrowLeft2 } from "iconsax-react"
import styled from "styled-components"
import { theme } from "@/styles"

export const ModifyProfile = () => {
  const navigate = useNavigate()
  return (
    <ModifyProfileWrap>
      <Header 
        leftIcon={
        <StyledIcon onClick={() => navigate(-1)}>
          <ArrowLeft2 />
        </StyledIcon>}
        centerText="프로필 수정하기">
      </Header>
      <ImageWrap>
        <ChangeProfilImage />
      </ImageWrap>
      <ModifyProfileArea/>

    </ModifyProfileWrap>
  )
}

const ModifyProfileWrap = styled.div`
margin: 0 auto;
height: 100vh;
overflow-y: scroll;
position: relative;
width: 100%;
`


const ImageWrap = styled.div`
  width: 122px;
  height: 122px;
  background-color: ${theme.greyScale.grey1};
  margin: 0 auto;
  border-radius: 50%;
  margin-top: 22px;
  margin-bottom: 46px;
  svg{
    position: relative;
    margin: 49px;
  }
`


