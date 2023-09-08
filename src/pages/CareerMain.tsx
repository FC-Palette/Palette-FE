import { Footer, Header, SubHeader } from 'components/common/index'
<<<<<<< HEAD
=======
import { theme } from 'styles/index'
>>>>>>> fbf0980 (feat: 성장해요 메인 페이지 컴포넌트 생성)
import { ArrowLeft2, SearchNormal1, Notification } from 'iconsax-react'
import styled from 'styled-components'
import { CAREER_SUBHEADER_TEXT } from 'constants/index'
import { CareerMainCard, CareerMainFilterBar } from '@/components/career'
export const CareerMain = () => {
  return (
    <>
      {/* 헤더 */}
      <Header
        leftIcon={<ArrowLeft2 />}
        centerText="같이 성장해요">
        <IconWrapper>
          <SearchNormal1 />
        </IconWrapper>
        <StyledIcon>
          <Notification />
        </StyledIcon>
      </Header>

      {/* 서브헤더 */}
      <SubHeader
        items={CAREER_SUBHEADER_TEXT}
        initialItem="커리어"
      />
      {/* 필터 바 */}
      <CareerMainFilterBar />

      {/* 메인 출력 콘텐츠 */}
      <CareerMainCard />

      {/* 푸터 */}
      <Footer />
    </>
  )
}

const StyledIcon = styled.button``
const IconWrapper = styled.button`
  margin-right: 10px;
`
