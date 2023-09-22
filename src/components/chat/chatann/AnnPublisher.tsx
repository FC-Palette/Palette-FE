import { styled } from 'styled-components'
import { Image } from 'components/index'
export const AnnPublisher = () => {
  return (
    <Wrapper>
      <Image src="https://avatars.githubusercontent.com/u/142562921?s=200&v=4"></Image>
      <AnnInfo>
        <Publisher>고스트 사원</Publisher>
        <Date>7월 12일 오후 12:10</Date>
      </AnnInfo>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  padding: 11px 0 12px 24px;
`
const AnnInfo = styled.div`
  height: 37px;
  padding-left: 12px;
  font-size: 14px;
`
const Publisher = styled.div`
  font-weight: 600;
`
const Date = styled.div`
  padding-top: 4px;
  color: ${props => props.theme.greyScale.grey5};
`
