import {
  IsApprovedJoinMeetingFooter,
  IsApprovedJoinMeetingStepCompleteCard,
  IsApprovedJoinMeetingStepOneCard,
  IsApprovedJoinMeetingStepTwoCard
} from '@/components/career'
import { useNavigate, useParams } from 'react-router-dom'
import { CareerUseParamsProps } from '@/types'

const CareerIsApprovedJoinMeeting = () => {
  const navigate = useNavigate()

  const { approvedstepid = '1' } = useParams<CareerUseParamsProps>()

  const handleNextStep = () => {
    const nextStep = parseInt(approvedstepid) + 1
    navigate(`/joinmeeting/approved/${nextStep}`)
  }

  if (
    approvedstepid !== '1' &&
    approvedstepid !== '2' &&
    approvedstepid !== '3'
  ) {
    navigate('/')
  }

  const handleBtnText = () => {
    switch (approvedstepid) {
      case '1':
      case '2':
        return '동의하기'
      case '3':
        return '다른 모임 구경하기'
      default:
        return '동의하기'
    }
  }

  const renderContent = () => {
    switch (approvedstepid) {
      case '1':
        return <IsApprovedJoinMeetingStepOneCard />
      case '2':
        return <IsApprovedJoinMeetingStepTwoCard />
      case '3':
        return <IsApprovedJoinMeetingStepCompleteCard />
      default:
        return <IsApprovedJoinMeetingStepOneCard />
    }
  }

  const renderFooter = () => {
    switch (approvedstepid) {
      case '1':
      case '2':
        return (
          <IsApprovedJoinMeetingFooter
            handleNextStep={handleNextStep}
            btnText={handleBtnText()}
          />
        )
      default:
        return (
          <IsApprovedJoinMeetingFooter
            handleNextStep={handleNextStep}
            btnText={handleBtnText()}
          />
        )
    }
  }

  return (
    <div>
      {renderContent()}
      {renderFooter()}
    </div>
  )
}

export default CareerIsApprovedJoinMeeting
