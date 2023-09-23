import { PROFILE_ENTRY_POINT_TEXT } from '@/constants'
import { Button, Header } from 'components/common'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'

export const ProfileEnterWrap = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(-1)
  }

  return (
    // dev 기준
    // <Wrap>
    //   <Header
    //     leftIcon={
    //       <StyledIcon onClick={onClickHandler}>
    //         <ArrowLeft2 />
    //       </StyledIcon>
    //     }
    //     centerText="모임을 위한 간단 프로필"
    //   />
    //   <TextWrap>
    //     <FetchTitle>[마케팅] 출근 전 트렌드 분석</FetchTitle>
    //     <HeaderText>
    //       {PROFILE_ENTRY_POINT_TEXT.top[0]}
    //       <br />
    //       {PROFILE_ENTRY_POINT_TEXT.top[1]}
    //     </HeaderText>
    //     <SmallText>
    //       {PROFILE_ENTRY_POINT_TEXT.bottom[0]}
    //       <br />
    //       {PROFILE_ENTRY_POINT_TEXT.bottom[1]}
    //     </SmallText>
    //   </TextWrap>
    //   <BtnWrap>
    //     <Button
    //       $btnWidth="80%"
    //       $btnHeight="60px"
    //       $fontSize="20px"
    //       $borderRadius="8px">
    //       간단 프로필 입력하기
    //     </Button>
    //   </BtnWrap>
    // </Wrap>
    // 수정 (9.23)
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

// dev 기준
// const Wrap = styled.div`
//   min-width: 430px;
// `
// const TextWrap = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   margin: 0 5.7%;
// `
// const FetchTitle = styled.div`
//   margin-top: 14%;
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 26px;
//   color: ${props => props.theme.greyScale.grey9};
// `
// const HeaderText = styled.div`
//   margin-top: 5%;
//   font-size: ${props => props.theme.customSize.xxxlarge};
//   font-weight: 700;
//   color: ${props => props.theme.greyScale.grey9};
// `
// const SmallText = styled.div`
//   margin-top: 5%;
//   color: ${props => props.theme.greyScale.grey5};
//   font-size: ${props => props.theme.customSize.xlarge};
//   font-weight: 400;
// `

// const BtnWrap = styled.div`
//   margin-top: 150%;
//   width: 100%;
//   margin: 15% 5.7%;
// `

// const StyledIcon = styled.button`
//   color: #000;
//   font-size: ${props => props.theme.customSize.xxlarge};
// `


// 수정 (9.23 기준)
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
