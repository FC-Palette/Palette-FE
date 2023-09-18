import { styled } from 'styled-components'
import { modalOnState } from 'recoil/index'
import { useRecoilValue } from 'recoil'
import { Modal } from 'components/index'

export const BackgroundModal = ({ title, content, children }) => {
  const modalOn = useRecoilValue(modalOnState)
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
