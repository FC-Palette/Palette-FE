import { PROFILE_ENTRY_POINT_TEXT } from '@/constants'
import { Button } from 'components/common'
import styled from 'styled-components'

export const ProfileEnterWrap = () => {
  return (
    <Wrap>
      <TextWrap>
        <PostTitle>[마케팅] 출근 전 트렌드 분석</PostTitle>
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
      <BtnWrap>
        <Button
          $btnWidth="382px"
          $btnHeight="60px"
          $fontSize="20px"
          $borderRadius="8px">
          간단 프로필 입력하기
        </Button>
      </BtnWrap>
    </Wrap>
  )
}
const Wrap = styled.div`
  width: 430px;
  height: 850px;
  position: relative;
`
const TextWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
const PostTitle = styled.div`
  margin-top: 64px;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.greyScale.grey9};
`
const HeaderText = styled.div`
  top: 180px;
  margin-top: 8px;
  font-size: ${props => props.theme.customSize.xxxlarge};
  font-weight: 700;
  color: ${props => props.theme.greyScale.grey9};
`
const SmallText = styled.div`
  color: ${props => props.theme.greyScale.grey5};
  font-size: ${props => props.theme.customSize.xlarge};
  font-weight: 400;
  margin-top: 12px;
`

const BtnWrap = styled.div`
  line-height: 26px;
  margin: 760px 24px 32px;
`