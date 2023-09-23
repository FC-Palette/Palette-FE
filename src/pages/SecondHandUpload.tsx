import {
  SecondHandStepOne,
  SecondHandPre
} from 'components/trades/preview/index'
import { useNavigate, useParams } from 'react-router-dom'
import { UploadFooter } from 'components/trades/upload/index'

interface Params {
  [key: string]: string | undefined
}

export const SecondHandUpload = ({}) => {
  const navigate = useNavigate()
  const { stepId = '1' } = useParams<Params>()

  const handleNextStep = () => {
    const nextStep = parseInt(stepId) + 1
    navigate(`/secondhandUpload/${nextStep}`)
  }

  // const handleCreateMeeting = () => {
  //   setModalText(CREATE_MODAL_TEXT.create)
  //   setModalOnState(true)
  //   // 채팅창 생성하는 로직 여기 넣어야함
  // }

  // const handleCreateCancel = () => {
  //   setModalText(CREATE_MODAL_TEXT.cancel)
  //   setModalOnState(true)
  // }

  const renderContent = () => {
    switch (stepId) {
      case '1':
        return <SecondHandStepOne />
      case '2':
        return <SecondHandPre />
      default:
        return <SecondHandStepOne />
    }
  }

  const renderFooter = () => {
    switch (stepId) {
      case '1':
        return <UploadFooter handleNextStep={handleNextStep} />
      case '2':
        return (
          // <MeetingsPreviewFooter
          //   handleCreateMeeting={handleCreateMeeting}
          //   handleCreateCancel={handleCreateCancel}
          // />
          <UploadFooter handleNextStep={handleNextStep} />
        )

      default:
        return null
    }
  }

  return (
    <>
      {renderContent()}
      {renderFooter()}
    </>
  )
}
