import { Button, Header, Input } from "@/components";
import { useNavigate } from "react-router-dom";
import { StyledIcon } from ".";
import { ArrowLeft2 } from "iconsax-react";
import styled from "styled-components";
import { FIND_DATA_TEXT } from "@/constants";
import { theme } from "@/styles";

export const FindPassword = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Header
        leftIcon={
          <StyledIcon onClick={() => navigate(-1)}>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText="비밀번호 찾기"
      >
       </Header>
      <FindField>
        <InputWrap>
          {FIND_DATA_TEXT.findNameText}<Input ph={FIND_DATA_TEXT.findRealNameText}/>
        </InputWrap>
        <InputWrap>
          {FIND_DATA_TEXT.findPhoneNumberText}
          <PhoneWrap>
            <Input ph={FIND_DATA_TEXT.findInputNumberText}/>
            <Button disabled>{FIND_DATA_TEXT.findCertificationText}</Button>
          </PhoneWrap>
        </InputWrap>
        <Input ph={FIND_DATA_TEXT.certificationNumberText}/>
        <ButtonWrap>
          <Button disabled>{FIND_DATA_TEXT.findPasswordText}</Button>
        </ButtonWrap>
      </FindField>
    </Wrap>
  )
}


const Wrap = styled.div`
  
`

const FindField = styled.div`
  position: relative;
  padding: 0 12px;
  margin-top: 20px;
  height: 100vh;
  Button{
    width: 100%;
    padding: 0;
    color: ${theme.greyScale.grey5};
    font-size: 15px;
  }
  Input{
    width: 100%;
    padding: 0;
    padding-left: 10px;
  }
`

const InputWrap = styled.div`
  position: relative;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  
  Input{
    margin-top: 5px;
    width: 100%;
    flex-direction: row;
  }
  Button{
    width: 20%;
    color: ${theme.greyScale.grey5};
    font-size: 15px;
  }
`

const ButtonWrap = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  top: 50%;
`

const PhoneWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 3px;
  label{
    width: 100%;
    margin-right: 5px;
  }
  Input{
    margin: 0;
  }
`