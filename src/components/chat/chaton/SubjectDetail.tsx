import { styled } from 'styled-components'
import { isBuyingState } from 'recoil/index'
import { useRecoilValue } from 'recoil'

const price = 9000
export const SubjectDetail = ({ $shared }) => {
  const isBuying = useRecoilValue(isBuyingState)

  return (
    <Wrapper $shared={$shared}>
      <SubjectImg />
      <SubjectText>
        <SubjectTitle $isBuying={isBuying}>
          asdasdasdasdasdasdad asdasdasdasdasd이쯤?
        </SubjectTitle>
        <SubjectInfo $isBuying={isBuying}>
          {price.toLocaleString()}원
        </SubjectInfo>
      </SubjectText>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $shared: boolean }>`
  display: flex;
  padding: ${props => (props.$shared ? '0' : '16px 24px')};
  background-color: ${props =>
    props.$shared ? '' : props.theme.greyScale.bluegrey};
`
const SubjectImg = styled.div`
  background-color: black;
  min-width: 100px;
  height: 80px;
  border-radius: 8px;
`

const SubjectText = styled.div`
  overflow-wrap: break-word;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  margin-left: 12px;
  width: 100%;
`

//하단 컴포넌트들 isBuying(boolean, 모임,상품정보)에 따라 유동적 변경
const SubjectTitle = styled.div<{ $isBuying: boolean }>`
  font-size: ${props => (props.$isBuying ? '16px' : '20px')};
  font-weight: ${props => (props.$isBuying ? '400' : '500')};
`
const SubjectInfo = styled.div<{ $isBuying: boolean }>`
  font-size: ${props => (props.$isBuying ? '26px' : '16px')};
  font-weight: ${props => (props.$isBuying ? '600' : '400')};
  line-height: ${props => (props.$isBuying ? '36px' : 'normal')};
`
