import { Button, Modal, ModalButtons } from '@/components'
import { useState } from 'react'
import styled from 'styled-components'

export const GetDetailFooterAndButton = () => {
  const [isModal, setIsModal] = useState(false)
  const isUserJoined = false

  const handleModal = () => {
    isUserJoined ? null : setIsModal(true)
  }

  return (
    <>
      {isUserJoined ? (
        <IsUserNotJoined>이미 참여중인 모임입니다.</IsUserNotJoined>
      ) : null}
      <Wrapper>
        <BtnWrap>
          <Button
            onClick={() => handleModal()}
            $btnWidth="382px"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            {isUserJoined ? '채팅하기' : '참여하기'}
          </Button>
        </BtnWrap>

        {isModal ? (
          <Modal
            title="가입요건이 맞지 않아요"
            content="아쉽지만 가입요건이 충족되지 않았어요
            꼭 참여하고 싶은 모임이라면
            주최자에게 메시지를 보내보세요!">
            <ModalButtons
              onLeftClick={() => setIsModal(false)}
              onRightClick={() => alert('메세지 보내기 로직 필요')}
              leftBtn={'취소하기'}
              rightBtn={'메시지보내기'}
            />
          </Modal>
        ) : null}
      </Wrapper>
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
