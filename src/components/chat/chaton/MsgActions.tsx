import { styled } from 'styled-components'
import { Copy, Edit } from 'iconsax-react'

export const MsgActions = ({ $sender, ref }) => {
  return (
    <Wrapper $sender={$sender}>
      <Tab $isTop={true}>
        <TabTitle>복사하기</TabTitle>
        <TabIcon $isTop={true}>
          <Copy size="18" />
        </TabIcon>
      </Tab>
      <Tab $isTop={false}>
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
  z-index: 1;
  top: 100%;
  right: ${props => (props.$sender === 'sender' ? 0 : '')};

  left: ${props => (props.$sender === 'sender' ? '' : 0)};
`

const isTop = styled.div<{ $isTop: boolean }>``

const Tab = styled(isTop)`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`
const TabTitle = styled.div``
const TabIcon = styled(isTop)``
