import { PROFILE_ENTRY_POINT_TEXT } from '@/constants'
import { Button } from 'components/common'
import styled from 'styled-components'

export const ProfileEnterWrap = () => {
  return (
    <>
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
    </>
  )
}
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const HeaderText = styled.div`
  margin-top: 178px;
  font-size: ${props => props.theme.customSize.xxxlarge};
  font-weight: 700;
  color: ${props => props.theme.greyScale.grey9};
`
const SmallText = styled.div`
  color: ${props => props.theme.greyScale.grey5};
  font-size: ${props => props.theme.customSize.xlarge};
  font-weight: 400;
  margin-top: 28px;
`

const BtnWrap = styled.div`
  display: flex;
  line-height: 26px;
  justify-content: center;
  margin-top: 390px;
`

console.log(window.outerHeight)
