import { styled } from 'styled-components'
import { Header, AnnPublisher, AnnContent, Wrapper } from 'components/index'
import { Add, TextalignJustifycenter } from 'iconsax-react'

export const ChatAnnDetail = () => {
  return (
    <>
      <Header
        centerText="상세보기"
        leftIcon={<Add cursor="pointer" />}>
        <ToAnnList>
          <TextalignJustifycenter
            size="16"
            cursor="pointer"
          />
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

const ToAnnList = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`
