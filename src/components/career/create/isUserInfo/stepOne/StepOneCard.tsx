import styled from 'styled-components'
import { Button } from 'components/common'
import { useNavigate } from 'react-router-dom'
import {
  MeetupTypeSelector1,
  MeetupTypeSelector2,
  RoleAndGenderSelector
} from '.'

export const StepOneCard = () => {
  const navigate = useNavigate()

  return (
    <Wrap>
      <MeetupTypeSelector1 />
      <MeetupTypeSelector2 />
      <RoleAndGenderSelector />

      <BtnWrap onClick={() => navigate('/createMeeting-2')}>
        <Button
          $btnWidth="382px"
          $btnHeight="60px"
          $fontSize="20px"
          $borderRadius="8px">
          다음
        </Button>
      </BtnWrap>
    </Wrap>
  )
}

// 전체 랩
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin: 0 23px;
  gap: 8px;
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 40px 0 20px;
`
