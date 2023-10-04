import { Header, ModifyProfileArea } from "@/components"
import { useLocation, useNavigate } from "react-router-dom"
import { ArrowLeft2 } from "iconsax-react"
import { styled } from "styled-components"
import { StyledIcon } from "."
export const ModifyProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const centerText = location.pathname === "/simpleprofile"
    ? "간단 프로필 작성"
    : "프로필 수정하기";
    
  return (
    <ModifyProfileWrap>
      <Header 
        leftIcon={
        <StyledIcon onClick={() => navigate(-1)}>
          <ArrowLeft2 />
        </StyledIcon>}
            centerText={centerText}>
      </Header>
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