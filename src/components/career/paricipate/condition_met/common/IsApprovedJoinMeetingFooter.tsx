import { Button } from '@/components'
import styled from 'styled-components'

export const IsApprovedJoinMeetingFooter = ({ handleNextStep }) => {
  return (
    <BtnContainer>
      <Button
        onClick={handleNextStep}
        $btnHeight="60px"
        $btnWidth="382px">
        동의하기
      </Button>
    </BtnContainer>
  )
}
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 282px 24px 32px;
`
