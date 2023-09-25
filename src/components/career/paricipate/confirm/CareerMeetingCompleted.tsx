import { CONFIRM_WARING_TEXT } from '@/constants'

import styled from 'styled-components'

export const CareerMeetingCompleted = () => {
  const warningText = CONFIRM_WARING_TEXT.map(item => (
    <WarningText key={item}>{item}</WarningText>
  ))

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  return (
    <Container>
      <ParticipantsWrap>
        <ParticipantsImage />
        <NameAndDescription>
          <ParticipantsName>닉네임</ParticipantsName>
          <ParticipantsDescription>
            {truncateText(
              '긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글',
              20
            )}
          </ParticipantsDescription>
        </NameAndDescription>
      </ParticipantsWrap>

      <WarningTextContainer>{warningText}</WarningTextContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;

  @media (max-width: 430px) {
  }
`

const ParticipantsWrap = styled.div`
  max-height: 76px;
  height: 76px;
  display: flex;
  align-items: center;
`

const ParticipantsImage = styled.img`
  width: 52px;
  height: 52px;
  background-color: tomato;
  border-radius: 8px;
  margin-left: 12px;
`
const NameAndDescription = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const ParticipantsName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.greyScale.grey8};
`
const ParticipantsDescription = styled.div`
  font-size: 16px;
  max-width: 227px;
  color: ${props => props.theme.greyScale.grey5};
`

const WarningTextContainer = styled.div`
  max-width: 382px;
  width: 100%;
  min-height: 120px;
  background-color: ${props => props.theme.greyScale.blueGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  gap: 10px;
  margin-top: 20%;
`
const WarningText = styled.div`
  margin-left: 12px;
  font-size: 14px;
  color: ${props => props.theme.greyScale.grey7};
`
