import { CareerMeetingConfirmCard } from '@/components/career'
import styled from 'styled-components'

export const CareerMeetingConfirm = () => {
  return (
    <Wrap>
      <CareerMeetingConfirmCard />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  overflow-y: scroll;
`
