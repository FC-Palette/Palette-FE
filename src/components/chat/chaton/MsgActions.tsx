import { styled } from 'styled-components'
import { Copy, Edit } from 'iconsax-react'
import { useSetRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useRef, forwardRef, Ref } from 'react'
export const MsgActions = ({ $sender, msgRef }) => {
  const setOpenMsgActionsIndex = useSetRecoilState(msgActionsState)
  const upperTabRef = useRef<HTMLDivElement>()
  const lowerTabRef = useRef<HTMLDivElement>()

  return (
    <Wrapper
      $sender={$sender}
      ref={msgRef}>
      <Tab
        $isTop={true}
        onClick={() => {
          setTimeout(() => {
            setOpenMsgActionsIndex(-1)
          }, 300)
        }}>
        <TabTitle>복사하기</TabTitle>
        <TabIcon $isTop={true}>
          <Copy size="18" />
        </TabIcon>
      </Tab>
      <Tab
        $isTop={false}
        onClick={() => {
          setTimeout(() => {
            setOpenMsgActionsIndex(-1)
          }, 300)
        }}>
        <TabTitle>공지 등록하기</TabTitle>
        <TabIcon $isTop={false}>
          <Edit size="18" />
        </TabIcon>
      </Tab>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $sender: string }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  top: 100%;
  right: ${props => (props.$sender === 'sender' ? 0 : '')};
  left: ${props => (props.$sender === 'sender' ? '' : 0)};
`

const isTop = styled.div<{ $isTop: boolean }>``
const TabIcon = styled(isTop)``
const Tab = styled(isTop)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  width: 236px;
  height: 38px;

  padding: 0 24px;
  margin-top: ${props => (props.$isTop ? '4px' : '')};

  background-color: ${props => props.theme.main.white};
  color: ${props => props.theme.greyScale.grey9};

  border-color: ${props => props.theme.greyScale.grey3};
  border-style: solid;
  border-width: ${props =>
    props.$isTop ? `1px 1px 0 1px` : '1px 1px 1px 1px'};
  border-radius: ${props => (props.$isTop ? '8px 8px 0 0' : '0 0 8px 8px')};
  &:active,
  &:focus {
    background-color: ${props => props.theme.greyScale.blie};
  }
`
const TabTitle = styled.div``
// const Tab = forwardRef<HTMLDivElement, { $isTop: boolean }>((props, ref) => {
//   return (
//     <StyledTab
//       ref={ref as Ref<HTMLDivElement>}
//       {...props}></StyledTab>
//   )
// })
