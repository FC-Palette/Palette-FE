import { Button } from '@/components'
import styled from 'styled-components'

export const IsApprovedJoinMeetingFooter = ({ handleNextStep, btnText }) => {
  return (
    // <BtnContainer>
    //   <Button
    //     onClick={handleNextStep}
    //     $btnHeight="60px"
    //     $btnWidth="382px">
    //     동의하기
    //   </Button>
    // </BtnContainer>

    <Wrapper>
      <BtnWrap>
        <Button
          onClick={handleNextStep}
          $btnWidth="100%"
          $btnHeight="60px"
          $fontSize="20px"
          $borderRadius="8px">
          {btnText}
        </Button>
      </BtnWrap>
    </Wrapper>
  )
}
// 수정 전
// const BtnContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 282px 24px 32px;
// `

// 수정 후 (9.23)
const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 430px;
  height: 80px;
  z-index: 100;
  bottom: 0;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 0 24px;
`
