import { styled } from 'styled-components'
import { Copy, Edit } from 'iconsax-react'
import { useResetRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { columnise } from 'styles/index'
import { CHATON_TEXTS } from 'constants/index'
import { createNotice } from 'api/index'

/*
POST -REQUEST BODY
{
	"roomId" : "1234",
	"messageId" : "1234"
}
RESPONSE => 상단에 등록(notice)
{
	"status": 201, 
	"success": true,
	"response": 
		{
			"notice" : "공지 확인해주세요",
		}
}
*/

export const MsgActions = ({ $sender, msgRef, message, roomId, msgId }) => {
  const reset = useResetRecoilState(msgActionsState)

  return (
    <Wrapper
      $sender={$sender}
      ref={msgRef}>
      <Tab
        $isTop={true}
        onClick={() => {
          setTimeout(async () => {
            await reset()
            await navigator.clipboard.writeText(message)
          }, 300)
        }}>
        <TabTitle>{CHATON_TEXTS.copy}</TabTitle>
        <TabIcon $isTop={true}>
          <Copy size="18" />
        </TabIcon>
      </Tab>
      <Tab
        $isTop={false}
        onClick={() => {
          setTimeout(async () => {
            await reset()
            await createNotice(roomId, msgId)
          }, 300)
        }}>
        <TabTitle>{CHATON_TEXTS.register}</TabTitle>
        <TabIcon $isTop={false}>
          <Edit size="18" />
        </TabIcon>
      </Tab>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $sender: boolean }>`
  ${columnise};
  position: absolute;
  z-index: 1000;
  user-select: none;
  top: 100%;
  right: ${props => (props.$sender ? 0 : '')};
  left: ${props => (props.$sender ? '' : 0)};
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
