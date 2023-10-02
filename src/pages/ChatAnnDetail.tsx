import { styled } from 'styled-components'
import { Header, AnnPublisher, AnnContent, Wrapper } from 'components/index'
import { useNavigate } from 'react-router-dom'
import { Flexbox } from 'styles/index'
import { AlignIcon, CloseIcon } from 'components/index'
export const ChatAnnDetail = () => {
  const navigate = useNavigate()
  const backToChat = () => {
    navigate('/chat')
  }
  const backToChatList = () => {
    navigate('/chatannlist')
  }
  return (
    <>
      <Header
        centerText="상세보기"
        leftIcon={<CloseIcon />}
        cancelClick={backToChat}>
        <ToAnnList onClick={backToChatList}>
          <AlignIcon></AlignIcon>
          <Text>공지목록</Text>
        </ToAnnList>
      </Header>

      <Wrapper>
        <AnnPublisher />
        <AnnContent />
      </Wrapper>
    </>
  )
}

const Text = styled.div`
  padding-left: 2px;
  padding-top: 1px;
`

const ToAnnList = styled(Flexbox)`
  cursor: pointer;
  align-items: center;
`
