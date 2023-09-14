import { styled } from 'styled-components'
import { useRecoilState } from 'recoil'
import { modalOnState } from 'recoil/index'

export const Modal = ({ title, content, children }) => {
  //1. 모달 버튼 분기처리
  //2. 바깥영역 클릭시(onClick) 취소
  const [modalOn, setModalOn] = useRecoilState(modalOnState)
  const handleModalOn = () => {
    setModalOn(!modalOn)
    console.log(modalOn)
  }

  return (
    <>
      {modalOn && (
        <Background>
          <ModalBox>
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{content}</ModalContent>
            {/* 버튼 두개 컴포넌트 혹은 단일 버튼 컴포넌트 - children */}
            {children}
          </ModalBox>
        </Background>
      )}
    </>
  )
}

export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.main.black};
  opacity: 0.5;
  z-index: 999;
`

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 311px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px 10px 30px 0px ${props => props.theme.main.greyShadow};
`

const ModalTitle = styled.h3`
  height: 32px;
`

const ModalContent = styled.p``
