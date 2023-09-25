import styled from 'styled-components'

export const CareerMeetingConfirmTitle = () => {
  const maxLength = 35
  const sliceText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const check =
    ' [마케팅] 출근 전 트렌드 분석[마케팅] 출근 전 트렌드 분석[마케팅] 출근 전  트렌드 분석[마케팅] 출근 전 트렌드 분석[마케팅] 출근 전 트렌드  분석[마케팅] 출근 전 트렌드 분석[마케팅] 출근 전 트렌드 분석[마케팅]  출근 전 트렌드 분석'

  return (
    <Container>
      <FetchTItle>{sliceText(check, maxLength)}</FetchTItle>
      <FixedTitle>승인요청이 왔어요</FixedTitle>
    </Container>
  )
}

const Container = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 28px;
`

const FetchTItle = styled.div`
  max-height: 40px;
  font-size: 20px;
  white-space: wrap;
`

const FixedTitle = styled.div`
  min-width: 310px;
  white-space: nowrap;
  font-size: 36px;
  font-weight: 700;
  line-height: 46px;
  color: ${props => props.theme.greyScale.grey9};
`
