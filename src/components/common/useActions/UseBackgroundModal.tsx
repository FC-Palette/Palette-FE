import { styled } from 'styled-components'

import { UseModal } from 'components/common/useActions/index'

import { Flexbox } from 'styles/index'

export const UseBackgroundModal = ({
  title,
  content,
  children,
  modalState
}) => {
  let modalOn = modalState

  return (
    <>
      {modalOn && (
        <UseBackground>
          <UseModal
            title={title}
            content={content}>
            {children}
          </UseModal>
        </UseBackground>
      )}
    </>
  )
}

export const UseBackground = styled(Flexbox)`
  justify-content: flex-end;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.greyScale.greyOpaque};
  z-index: 999;
`
