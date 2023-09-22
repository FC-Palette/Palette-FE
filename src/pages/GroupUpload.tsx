import { useNavigate, useParams } from 'react-router-dom'
import {
  PurchaseStepOne,
  PurchasePreview
} from 'components/trades/previewtrades/index'
import { UploadFooter } from 'components/trades/uploadproduct/UploadFooter'

interface Params {
  [key: string]: string | undefined
}

export const GroupUpload = () => {
  const navigate = useNavigate()
  const { stepId = '1' } = useParams<Params>()

  const handleNextStep = () => {
    const nextStep = parseInt(stepId) + 1
    navigate(`/GroupUpload/${nextStep}`)
  }

  // const handleCreateMeeting = () => {
  //   console.log('생성')
  // }

  // const handleCreateCancel = () => {
  //   console.log('취소')
  // }

  const renderContent = () => {
    switch (stepId) {
      case '1':
        return <PurchaseStepOne />
      case '2':
        return <PurchasePreview />
      default:
        return <PurchaseStepOne />
    }
  }

  const renderFooter = () => {
    switch (stepId) {
      case '1':
        return <UploadFooter handleNextStep={handleNextStep} />
      case '2':
        return <UploadFooter handleNextStep={handleNextStep} />
      //   return (
      //     <MeetingsPreviewFooter
      //       handleCreateMeeting={handleCreateMeeting}
      //       handleCreateCancel={handleCreateCancel}
      //     />
      //   )
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
