import { styled } from 'styled-components'
import { columnise } from 'styles/index'

export const UseAgreeModal = ({ title, subTitle, content, children }) => {
  return (
    <>
      <UseModalBox>
        <UseModalTitle>{title}</UseModalTitle>
        <UseTitle>{subTitle}</UseTitle>
        <UseModalContent>{content}</UseModalContent>
        <Flex>
          <AgreeCheckBox type="checkbox"></AgreeCheckBox>
          <AgreeMsg>동의합니다.</AgreeMsg>
        </Flex>
        {/* 버튼 두개 컴포넌트 혹은 단일 버튼 컴포넌트, checkbox - children */}
        {children}
      </UseModalBox>
    </>
  )
}

const UseModalBox = styled.div`
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
  height: 244px;
  ${columnise};
  border-radius: 16px;
  background-color: ${props => props.theme.main.white};
  padding: 24px;
  box-shadow: 0px 10px 30px 0px rgba(94, 94, 94, 0.4);
`

const UseModalTitle = styled.h3`
  height: 32px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
`

const UseTitle = styled.h3`
  height: 32px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`

const Flex = styled.div`
  display: flex;
`
const AgreeMsg = styled.div`
  margin-left: 6px;
`

const UseModalContent = styled.p`
  width: 263px;
  margin-bottom: 24px;
  font-size: 14px;
`
const AgreeCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-bottom: 6px;
  border: 2px solid ${props => props.theme.main.blue0};
  cursor: pointer;
  transition: background 0.2s;
  &:checked {
  }
`
