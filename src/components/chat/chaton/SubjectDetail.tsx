import { subjectProps } from 'types/index'
import { styled } from 'styled-components'
import { columnise, Flexbox } from 'styles/index'

export const SubjectDetail = ({
  $shared,
  src,
  title,
  week,
  price,
  isBuying
}: subjectProps) => {
  return (
    <Wrapper $shared={$shared}>
      <SubjectImg src={src} />
      <SubjectText>
        <SubjectTitle isBuying={isBuying}>{title}</SubjectTitle>
        <SubjectInfo isBuying={isBuying}>
          {isBuying && price && price.toLocaleString()}원{!isBuying && week}
        </SubjectInfo>
      </SubjectText>
    </Wrapper>
  )
}

const Wrapper = styled(Flexbox)<{ $shared: boolean }>`
  padding: ${props => (props.$shared ? '0' : '16px 24px')};
  background-color: ${props =>
    props.$shared ? '' : props.theme.greyScale.bluegrey};
`
const SubjectImg = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-size: cover;
  min-width: 100px;
  height: 80px;
  border-radius: 8px;
`

const SubjectText = styled.div`
  overflow-wrap: break-word;
  overflow-x: hidden;
  ${columnise};
  justify-content: center;
  box-sizing: content-box;
  margin-left: 12px;
  width: 100%;
`

//하단 컴포넌트들 isBuying(boolean, 모임,상품정보)에 따라 유동적 변경
const SubjectTitle = styled.div<{ isBuying?: boolean }>`
  font-size: ${props => (props.isBuying ? '16px' : '20px')};
  font-weight: ${props => (props.isBuying ? '400' : '500')};
`
const SubjectInfo = styled.div<{ isBuying?: boolean }>`
  font-size: ${props => (props.isBuying ? '26px' : '16px')};
  font-weight: ${props => (props.isBuying ? '600' : '400')};
  line-height: ${props => (props.isBuying ? '36px' : 'normal')};
`
