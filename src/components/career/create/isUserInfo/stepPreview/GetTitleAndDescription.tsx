import styled from 'styled-components'

interface GetTitleAndDescriptionProps {
  title: string | null
  description: string | null
  detailText: string | null
}

export const GetTitleAndDescription: React.FC<GetTitleAndDescriptionProps> = ({
  title,
  description,
  detailText
}) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  if (title === null) {
    return
  }
  if (description === null) {
    return
  }

  return (
    <>
      <Container>
        <Title>{title.length > 0 ? title : '모임 제목 미리보기'}</Title>
        <Description>
          {description.length > 0 ? truncateText(description, 150) : detailText}
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
  margin-left: 5.7%;
  font-size: 18px;
  margin-top: 13px;
  font-size: ${props => props.theme.customSize.xlarge};
  color: ${props => props.theme.greyScale.grey9};
  font-weight: 500;
`
const Description = styled.div`
  height: 10%;
  max-height: 96px;
  margin: 1.2% 5.7% 0;
  line-height: 26px;
  font-size: ${props => props.theme.customSize.large};
  color: #3a3a3a;
  text-overflow: ellipsis;
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
`
