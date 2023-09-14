import { Header, ChatAnnListItem } from 'components/index'
import { StyledIcon } from 'pages/index'
import { styled } from 'styled-components'
import { ArrowLeft2, More } from 'iconsax-react'
export const ChatAnnList = () => {
  return (
    <>
      <Header
        centerText="공지목록"
        leftIcon={<ArrowLeft2 />}>
        <StyledIcon>
          <More />
        </StyledIcon>
      </Header>
      <ChatAnnListItem></ChatAnnListItem>
    </>
  )
}
