import { styled } from 'styled-components'
import { UseModal } from 'components/index'
import { Flexbox } from 'styles/index'

interface ModalType {
  title: string
  content?: string
  modalState: boolean
}

interface UseWhiteModalProps extends ModalType {
  children: React.ReactNode
}

export const UseWhiteModal: React.FC<UseWhiteModalProps> = ({
  title,
  content,
  children,
  modalState
}) => {
  let modalOn = modalState

  return (
    <>
      {modalOn && (
        <UseWhite>
          <UseModal
            title={title}
            content={content}>
            {children}
          </UseModal>
        </UseWhite>
      )}
    </>
  )
}

export const UseWhite = styled(Flexbox)`
  justify-content: flex-end;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.greyScale.greyOpaque};
  z-index: 999;
`