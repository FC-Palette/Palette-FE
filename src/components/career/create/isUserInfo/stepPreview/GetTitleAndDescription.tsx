import styled from 'styled-components'

export const GetTitleAndDescription = () => {
  return (
    <>
      <Container>
        <Title>모임 제목이 들어갈 자리</Title>
        <Description>
          매주 한번, 이주의 트렌드를 나누는 오프라인 스터디입니다. 이대로는 만년
          주니어로 남을 것 같아 모임을 만들게 되었습니다. 진행방식은 모임원들과
          함께 만들어나갈 예정입니다 :D 병아리 마케터들 모여주세요...
        </Description>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 430px;
  background-color: royalblue;
`
const Title = styled.div`
  margin-left: 24px;
  margin-top: 12px;
  font-size: ${props => props.theme.customSize.xlarge};
  color: ${props => props.theme.greyScale.grey9};
  font-weight: 500;
`
const Description = styled.div`
  margin-top: 12px;
  margin: 0 24px;
  line-height: 26px;
  font-size: ${props => props.theme.customSize.large};
  color: #3a3a3a;
`
