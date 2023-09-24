import { Header } from '@/components'
import { StyledIcon } from '@/pages'
import { ArrowLeft2 } from 'iconsax-react'
import { CareerMeetingConfirmTitle } from '.'

export const CareerMeetingConfirmCard = () => {
  return (
    <>
      <Header
        leftIcon={
          <StyledIcon>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText="모임승인"></Header>
      <CareerMeetingConfirmTitle />
    </>
  )
}
