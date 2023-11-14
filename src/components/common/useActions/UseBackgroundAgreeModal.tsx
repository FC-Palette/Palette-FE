import { styled } from 'styled-components'
import { UseAgreeModal } from 'components/index'
import { Flexbox } from 'styles/index'

export const UseBackgroundAgreeModal = ({
  title,
  content,
  children,
  subTitle,
  modalState
}) => {
  let modalOn = modalState

  return (
    <>
      {modalOn && (
        <UseAgreeBackground>
          <UseAgreeModal
            title={title}
            subTitle={subTitle}
            content={content}>
            {children}
          </UseAgreeModal>
        </UseAgreeBackground>
      )}
    </>
  )
}

export const UseAgreeBackground = styled(Flexbox)`
  justify-content: flex-end;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.greyScale.greyOpaque};
  z-index: 999;
`
