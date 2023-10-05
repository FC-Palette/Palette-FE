import styled from 'styled-components'
import { JoinMeetingStepOneTitle } from '../common'
import { Button, UseButtons, UseWhiteModal } from '@/components'
import { participateFirstComeApi } from '@/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { JOIN_MEETING_SUCCESS } from '@/constants'

export const IsNotApprovedJoinMeetingStepOneCard = () => {
  const [modalState, setModalState] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const detailId = location.state.detailid

  const movoToCareer = () => {
    navigate('/career')
  }

  const moveToDetail = () => {
    navigate(`/chatlist/g}`)
  }

  const handleMeetingStart = async () => {
    const firstComRes = await participateFirstComeApi(detailId)
    if (firstComRes.status === 200) {
      setModalState(!modalState)
    }
  }
  return (
    <Container>
      <JoinMeetingStepOneTitle />

      <Wrapper>
        <BtnWrap>
          <Button
            onClick={handleMeetingStart}
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            동의하고 시작하기
          </Button>
        </BtnWrap>
      </Wrapper>

      {modalState && (
        <UseWhiteModal
          modalState={modalState}
          title={JOIN_MEETING_SUCCESS[0]}>
          <UseButtons
            modalState={modalState}
            onLeftClick={movoToCareer}
            onRightClick={moveToDetail}
            leftBtn={JOIN_MEETING_SUCCESS[2]}
            rightBtn={JOIN_MEETING_SUCCESS[3]}
          />
        </UseWhiteModal>
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 430px;
  height: 80px;
  z-index: 100;
  bottom: 0;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 0 24px;
`
