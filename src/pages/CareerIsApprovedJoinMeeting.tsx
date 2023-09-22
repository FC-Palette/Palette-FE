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
        return <IsApprovedJoinMeetingFooter handleNextStep={handleNextStep} />
      default:
        return null
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
