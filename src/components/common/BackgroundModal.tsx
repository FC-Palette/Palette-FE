import { styled } from 'styled-components'
import { useRecoilState } from 'recoil'
import { modalOnState } from 'recoil/index'
import { Modal } from 'components/index'

export const BackgroundModal = ({ title, content, children }) => {
  //1. 모달 버튼 분기처리
  //2. 바깥영역 클릭시(onClick) 취소X - 디자이너 의도 => 버튼으로만
  const [modalOn, setModalOn] = useRecoilState(modalOnState)
  // const handleModalOn = () => {
  //   setModalOn(!modalOn)
  //   console.log(modalOn)
  // }

  return (
    <>
      {modalOn && (
        <Background>
          <Modal
            title={title}
            content={content}>
            {children}
          </Modal>
        </Background>
      )}
    </>
  )
}

export const Background = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.greyScale.greyOpaque};
  z-index: 999;
`
