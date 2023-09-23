import { BackgroundModal, Button, ModalButtons } from '@/components'
import { CREATE_MODAL_TEXT } from '@/constants'
import { modalOnState } from '@/recoil'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

export const GetDetailFooterAndButton = () => {
  const [modal, setModal] = useRecoilState(modalOnState)
  const modalText = CREATE_MODAL_TEXT.condition_not_met
  const isUserJoined = false

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <Wrapper>
        <BtnWrap>
          <Button
            onClick={handleModal}
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            {isUserJoined ? '채팅하기' : '참여하기'}
          </Button>
        </BtnWrap>
      </Wrapper>

      {isUserJoined && (
        <IsUserNotJoined>이미 참여중인 모임입니다.</IsUserNotJoined>
      )}

      {modalOnState && (
        <BackgroundModal
          title={modalText[0]}
          content={modalText[1]}>
          <ModalButtons
            onLeftClick={() => setModal(!modal)}
            onRightClick={() => alert('메세지 보내기 로직 필요')}
            leftBtn={modalText[2]}
            rightBtn={modalText[3]}
          />
        </BackgroundModal>
      )}
    </>
  )
}

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

const IsUserNotJoined = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 80px;
  width: 100%;
  height: 32px;
  font-size: 16px;
  border-radius: 4px;
  background-color: ${props => props.theme.greyScale.grey7};
  color: ${props => props.theme.main.white};
`
