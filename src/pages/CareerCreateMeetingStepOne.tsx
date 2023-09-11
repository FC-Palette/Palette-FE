import { Button, StepProgressBar } from 'components/common'
import { CareerCreateMeetingHeader, StepOne } from '@/components/career'

import styled from 'styled-components'
export const CareerCreateMeetingStepOne = () => {
  return (
    <>
      <CareerCreateMeetingHeader />
      <StepProgressBar $currentPage={1} />
      <StepOne />
      <BtnWrap>
        <Button
          $btnWidth="382px"
          $btnHeight="60px"
          $fontSize="20px"
          $borderRadius="8px">
          다음
        </Button>
      </BtnWrap>
    </>
  )
}

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  margin: 40px 24px 30px;
`
