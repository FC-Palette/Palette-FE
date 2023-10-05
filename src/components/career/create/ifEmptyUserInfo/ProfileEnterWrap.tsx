import { PROFILE_ENTRY_POINT_TEXT } from '@/constants'
import { Button, Header } from 'components/common'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'

export const ProfileEnterWrap = () => {
  const navigate = useNavigate()

  const moveToProfile = () => {
    navigate('/modifyprofile')
  }

  const onClickHandler = () => {
    navigate('/career')
  }

  return (
    <Wrap>
      <Header
        leftIcon={
          <StyledIcon onClick={onClickHandler}>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText="모임을 위한 간단 프로필"
      />
      <TextWrap>
        <FetchTitle>[마케팅] 출근 전 트렌드 분석</FetchTitle>
        <HeaderText>
          {PROFILE_ENTRY_POINT_TEXT.top[0]}
          <br />
          {PROFILE_ENTRY_POINT_TEXT.top[1]}
        </HeaderText>
        <SmallText>
          {PROFILE_ENTRY_POINT_TEXT.bottom[0]}
          <br />
          {PROFILE_ENTRY_POINT_TEXT.bottom[1]}
        </SmallText>
      </TextWrap>
      <Wrapper>
        <BtnWrap>
          <Button
            onClick={moveToProfile}
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            간단 프로필 입력하기
          </Button>
        </BtnWrap>
      </Wrapper>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const TextWrap = styled.div`
  margin: 0 5.7% 20%;
  width: 430px;
`
const FetchTitle = styled.div`
  margin-top: 14%;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.greyScale.grey9};
`
const HeaderText = styled.div`
  margin-top: 5%;
  font-size: ${props => props.theme.customSize.xxxlarge};
  font-weight: 700;
  color: ${props => props.theme.greyScale.grey9};
`
const SmallText = styled.div`
  margin-top: 5%;
  color: ${props => props.theme.greyScale.grey5};
  font-size: ${props => props.theme.customSize.xlarge};
  font-weight: 400;
`

const StyledIcon = styled.button`
  color: ${props => props.theme.main.black};
  font-size: ${props => props.theme.customSize.xxlarge};
`
const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  height: 80px;
  z-index: 10;
  bottom: 0;
  background-color: transparent;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
  margin-top: auto;
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: auto 5.7%;
  bottom: 0;
`
