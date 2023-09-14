import { styled } from 'styled-components'
export const Modal = ({ title, content, children }) => {
  return (
    <>
      <ModalBox>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{content}</ModalContent>
        {/* 버튼 두개 컴포넌트 혹은 단일 버튼 컴포넌트, checkbox - children */}
        {children}
      </ModalBox>
    </>
  )
}

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  //상위 속성들 화면중앙정렬
  width: 311px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px 10px 30px 0px ${props => props.theme.main.greyShadow};
  padding: 24px;
`

const ModalTitle = styled.h3`
  height: 32px;
  font-size: 24px;
`

const ModalContent = styled.p``
