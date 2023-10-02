import styled from 'styled-components'

export const GetDetailTitleAndDescription = ({ title, description }) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const maxDescription = truncateText(description, 10)

  return (
    <>
      <Container>
        <Title>{title.length > 0 ? title : '모임 제목 미리보기'}</Title>
        <Description>
          {maxDescription.length > 0
            ? maxDescription
            : '아직 이 모임에 대한 소개가 작성되지 않았어요.'}
        </Description>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  width: 100%;
`
const Title = styled.div`
  font-size: 18px;
  margin: 3.5% 6.4% 0;
  font-size: ${props => props.theme.customSize.xlarge};
  color: ${props => props.theme.greyScale.grey9};
  font-weight: 500;
`
const Description = styled.div`
  margin: 3.5% 6.4% 0;

  line-height: 150%;
  font-size: ${props => props.theme.customSize.large};
  color: #3a3a3a;
  overflow-y: hidden;
`
