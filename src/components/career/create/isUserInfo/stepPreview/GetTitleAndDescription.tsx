import styled from 'styled-components'

interface GetTitleAndDescriptionProps {
  meetupTitle: string
  meetupDescription: string
}

export const GetTitleAndDescription: React.FC<GetTitleAndDescriptionProps> = ({
  meetupTitle,
  meetupDescription
}) => {
  return (
    <>
      <Container>
        <Title>
          {meetupTitle.length > 0 ? meetupTitle : '모임 제목 미리보기'}
        </Title>
        <Description>
          {meetupDescription.length > 0
            ? meetupDescription
            : '아직 이 모임에 대한 소개가 작성되지 않았어요.'}
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
`
const Title = styled.div`
  margin-left: 24px;
  font-size: 18px;
  margin-top: 13px;
  font-size: ${props => props.theme.customSize.xlarge};
  color: ${props => props.theme.greyScale.grey9};
  font-weight: 500;
`
const Description = styled.div`
  margin-top: 12px;
  margin: 12px 24px 0;
  line-height: 26px;
  font-size: ${props => props.theme.customSize.large};
  color: #3a3a3a;
`
