import { PROFILE_ENTRY_POINT_TEXT } from '@/constants'
import { Button } from 'components/common'
import styled from 'styled-components'

export const ProfileEnterWrap = () => {
  return (
    <Wrap>
      <TextWrap>
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
  height: 852px;
  width: 430px;
`
const TextWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: 24px;
`

const HeaderText = styled.div`
  position: absolute;
  top: 178px;
  font-size: ${props => props.theme.customSize.xxxlarge};
  line-height: 48px;
  font-weight: 700;
  color: ${props => props.theme.greyScale.grey9};
`
const SmallText = styled.div`
  position: absolute;
  top: 306px;
  color: ${props => props.theme.greyScale.grey5};
  font-size: ${props => props.theme.customSize.xlarge};
  font-weight: 400;
  line-height: 27px;
`

const BtnWrap = styled.div`
  line-height: 26px;
  position: absolute;
  display: flex;
  top: 840px;
  margin-left: 24px;
`
