import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { BackgroundModal, ModalButtons } from '@/components'
import {
  MeetingsCreateFooter,
  MeetingsPreviewFooter,
  StepOneCard,
  StepPreviewCard,
  StepThreeCard,
  StepTwoCard
} from '@/components/career'
import {
  careerCreateGlobalState,
  careerImageState,
  modalOnState,
  resetDtoAtom,
  resetFileAtom
} from '@/recoil'
import { CREATE_MODAL_TEXT } from '@/constants'
import { CareerUseParamsProps } from '@/types'
import { careerCreateApi } from '@/api'

export const CareerMeetingsCreate = () => {
  const [modlaOnState, setModalOnState] = useRecoilState(modalOnState)
  const [modalText, setModalText] = useState(CREATE_MODAL_TEXT.create)
  const [dto, setDto] = useRecoilState(careerCreateGlobalState)
  const [file, setFile] = useRecoilState(careerImageState)
  const resetFile = useRecoilValue(resetFileAtom)
  const resetDto = useRecoilValue(resetDtoAtom)
  const navigate = useNavigate()
  const blobImageFiles = file.file
  const { createstepid = '1' } = useParams<CareerUseParamsProps>()

  const handleNextStep = () => {
    const nextStep = parseInt(createstepid) + 1
    navigate(`/create/${nextStep}`)
  }

  // 개설하기
  const handleCreateMeeting = async () => {
    setModalText(CREATE_MODAL_TEXT.create)

    const response = await careerCreateApi(dto, blobImageFiles)

    if (response.status === 200) {
      setModalOnState(true)
      setDto(resetDto)
      setFile(resetFile)
    }
  }

  // 취소하기
  const handleCreateCancel = () => {
    setModalText(CREATE_MODAL_TEXT.cancel)
    setModalOnState(true)
  }

  // 모달 왼쪽 버튼 클릭 시 실행
  const handleConfirmYes = () => {
    if (modalText === CREATE_MODAL_TEXT.create) {
      navigate('/career')
      setModalOnState(false)
    } else if (modalText === CREATE_MODAL_TEXT.cancel) {
      setDto(resetDto)
      setFile(resetFile)
      setModalOnState(false)
    }
  }

  // 모달 오른쪽 버튼 클릭 시 실행
  const handleConfirmNo = () => {
    if (modalText === CREATE_MODAL_TEXT.create) {
      alert('채팅 페이지 이동 로직')
      setModalOnState(false)
    } else if (modalText === CREATE_MODAL_TEXT.cancel) {
      // setModalOnState(false)
      alert('유지')
    }
  }

  const renderContent = () => {
    switch (createstepid) {
      case '1':
        return <StepOneCard />
      case '2':
        return <StepTwoCard />
      case '3':
        return <StepThreeCard />
      case '4':
        return <StepPreviewCard />
      default:
        return <StepOneCard />
    }
  }

  const renderFooter = () => {
    switch (createstepid) {
      case '1':
      case '2':
      case '3':
        return <MeetingsCreateFooter handleNextStep={handleNextStep} />
      case '4':
        return (
          <MeetingsPreviewFooter
            handleCreateMeeting={handleCreateMeeting}
            handleCreateCancel={handleCreateCancel}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      <Wrap>
        {renderContent()}
        {renderFooter()}
      </Wrap>

      {modlaOnState && (
        <BackgroundModal
          title={modalText[0]}
          content={modalText[1]}>
          <ModalButtons
            onLeftClick={handleConfirmYes}
            onRightClick={handleConfirmNo}
            leftBtn={modalText[2]}
            rightBtn={modalText[3]}
          />
        </BackgroundModal>
      )}
    </>
  )
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
`
