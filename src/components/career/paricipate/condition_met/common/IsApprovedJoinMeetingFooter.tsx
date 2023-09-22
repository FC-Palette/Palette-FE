import { Button } from '@/components'
import styled from 'styled-components'

export const IsApprovedJoinMeetingFooter = ({ handleNextStep }) => {
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
          onClick={() => handleNextStep()}
          $btnWidth="100%"
          $btnHeight="60px"
          $fontSize="20px"
          $borderRadius="8px">
          다음
        </Button>
      </BtnWrap>
    </Wrapper>
  )
}
// const BtnContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 282px 24px 32px;
// `

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
  margin: auto 5.5%;
`
