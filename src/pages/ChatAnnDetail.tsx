import { Header, AnnPublisher, AnnContent, Wrapper } from 'components/index'
import { Add, TextalignJustifycenter } from 'iconsax-react'

export const ChatAnnDetail = () => {
  return (
    <>
      <Header
        centerText="상세보기"
        leftIcon={<Add />}>
        <TextalignJustifycenter size='16'/>
        공지목록
      </Header>
      <Wrapper>
        <AnnPublisher />
        <AnnContent />
      </Wrapper>
    </>
  )
}
