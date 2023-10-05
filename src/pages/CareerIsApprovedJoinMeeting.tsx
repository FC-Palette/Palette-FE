import {
  IsApprovedJoinMeetingFooter,
  IsApprovedJoinMeetingStepCompleteCard,
  IsApprovedJoinMeetingStepOneCard,
  IsApprovedJoinMeetingStepTwoCard
} from '@/components/career'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { CareerUseParamsProps } from '@/types'
import styled from 'styled-components'
import { decoder } from '@/utils'
import { participateApprovedApi } from '@/api'
import { useRecoilValue } from 'recoil'
import { reasonTextAtom } from '@/recoil'

const CareerIsApprovedJoinMeeting = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const meetingId = location.state.detailid
  const { approvedstepid = '1' } = useParams<CareerUseParamsProps>()
  const isUser = decoder().memberId ? true : false
  const prValue = useRecoilValue(reasonTextAtom)
  const submitPr = prValue

  if (!isUser) {
    navigate('/career')
  }

  const handleNextStep = async () => {
    const nextStep = parseInt(approvedstepid) + 1
    navigate(`/joinmeeting/approved/${nextStep}`, {
      state: { detailid: meetingId }
    })
    if (approvedstepid === '2') {
      const participateRes = await participateApprovedApi(meetingId, submitPr)
      if (participateRes.status === 200)
        navigate(`/joinmeeting/approved/3`, {
          state: { detailid: meetingId }
        })
    }

    if (approvedstepid === '3') {
      navigate('/career')
    }
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
    <>
      <Wrap>{renderContent()}</Wrap>
      {renderFooter()}
    </>
  )
}

const Wrap = styled.div`
  overflow-y: scroll;
`
export default CareerIsApprovedJoinMeeting
