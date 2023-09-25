import { styled } from 'styled-components'
import { Header, AnnPublisher, AnnContent, Wrapper } from 'components/index'
import { Add, TextalignJustifycenter } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import { Flexbox } from 'styles/index'
export const ChatAnnDetail = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header
        centerText="상세보기"
        leftIcon={
          <Add
            cursor="pointer"
            onClick={() => {
              navigate('/chat')
            }}
          />
        }>
        <ToAnnList
          onClick={() => {
            navigate('/chatannlist')
          }}>
          <TextalignJustifycenter
            size="16"
            // cursor="pointer"
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

const ToAnnList = styled(Flexbox)`
  cursor: pointer;
  align-items: center;
`
