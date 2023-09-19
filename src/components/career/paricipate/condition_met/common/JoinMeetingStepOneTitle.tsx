import styled from 'styled-components'
import { JOIN_MEETING_HEADER_TEXT } from '@/constants'
export const JoinMeetingStepOneTitle = () => {
  return (
    <>
      <MainTitle>
        {JOIN_MEETING_HEADER_TEXT.mainTitle[0]}
        <span>꼭</span> {JOIN_MEETING_HEADER_TEXT.mainTitle[1]}
      </MainTitle>
      <SubTitle>{JOIN_MEETING_HEADER_TEXT.subTitle[0]}</SubTitle>
      <Text>
        {JOIN_MEETING_HEADER_TEXT.text[0][0]} <br />
        {JOIN_MEETING_HEADER_TEXT.text[0][1]}
      </Text>
      <SubTitle>{JOIN_MEETING_HEADER_TEXT.subTitle[1]}</SubTitle>
      <Text>
        {JOIN_MEETING_HEADER_TEXT.text[1][0]} <br />
        {JOIN_MEETING_HEADER_TEXT.text[1][1]}
      </Text>
      <SubTitle>{JOIN_MEETING_HEADER_TEXT.subTitle[2]}</SubTitle>
      <Text>
        {JOIN_MEETING_HEADER_TEXT.text[2][0]} <br />
        {JOIN_MEETING_HEADER_TEXT.text[2][1]}
      </Text>
    </>
  )
}

const MainTitle = styled.div`
  color: ${props => props.theme.greyScale.grey9};
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  margin: 68px 60px 0 24px;

  & > span {
    color: ${props => props.theme.main.blue0};
  }
`

const SubTitle = styled.div`
  margin: 32px 0 0 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 31.2px;
  color: ${props => props.theme.greyScale.grey9};
`

const Text = styled.div`
  margin: 8px 52px 0 24px;
  font-size: 16px;
  color: ${props => props.theme.greyScale.grey9};
`
