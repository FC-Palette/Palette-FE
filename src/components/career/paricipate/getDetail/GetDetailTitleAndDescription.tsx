import styled from 'styled-components'

export const GetDetailTitleAndDescription = () => {
  const title = 'Fetch TItle'
  const rd = '오피스너 그는 전설이다.'.repeat(30)

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const description = truncateText(rd, 120)

  return (
    <>
      <Container>
        <Title>{title.length > 0 ? title : '모임 제목 미리보기'}</Title>
        <Description>
          {description.length > 0
            ? description
            : '아직 이 모임에 대한 소개가 작성되지 않았어요.'}
        </Description>
      </Container>
    </>
  )
}
// 수정전
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 150px;
//   width: 100%;
// `
// const Title = styled.div`
//   /* margin-left: 24px; */
//   font-size: 18px;
//   margin: 3.5% 6.4% 0;
//   font-size: ${props => props.theme.customSize.xlarge};
//   color: ${props => props.theme.greyScale.grey9};
//   font-weight: 500;
// `
// const Description = styled.div`
//   margin: 3.5% 6.4% 0;
//   /* margin: 12px 24px 0; */
//   line-height: 150%;
//   font-size: ${props => props.theme.customSize.large};
//   color: #3a3a3a;
//   overflow-y: hidden;
// `

// 수정후 (9.23)
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
