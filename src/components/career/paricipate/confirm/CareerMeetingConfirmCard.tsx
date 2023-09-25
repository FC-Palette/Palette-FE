import { Header, SubHeader } from '@/components'
import { StyledIcon } from '@/pages'
import { ArrowLeft2 } from 'iconsax-react'
import {
  CareerMeetingCompleted,
  CareerMeetingConfirmTitle,
  CareerMeetingStandby,
  CareerMeetingConfirmButtons
} from '.'
import { CONFIRM_SUBHEADER_TEXT } from '@/constants/career/confirmSubHeaderText'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const CareerMeetingConfirmCard = () => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  const renderContent = () => {
    switch (currentPath) {
      case '/participate/confirm/standby':
        return <CareerMeetingStandby />
      case '/participate/confirm/finished':
        return <CareerMeetingCompleted />
      default:
        return <CareerMeetingStandby />
    }
  }

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
      <SubHeader
        items={CONFIRM_SUBHEADER_TEXT}
        initialItem={'승인 대기'}
      />

      {renderContent()}

      <CareerMeetingConfirmButtons
        leftBtn={'거절하기'}
        rightBtn={'승인하기'}
      />
    </>
  )
}
