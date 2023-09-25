import { CommonArrowDown } from '@/components'
import { CONFIRM_WARING_TEXT } from '@/constants'
import { useState } from 'react'
import styled from 'styled-components'

export const CareerMeetingStandby = () => {
  const [letter, setLetter] = useState(false)

  const handleToggle = () => {
    setLetter(!letter)
  }
  const warningText = CONFIRM_WARING_TEXT.map(item => (
    <WarningText key={item}>{item}</WarningText>
  ))

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const dummyFetch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const fetchParticipantsInfo = dummyFetch.map(item => (
    <>
      <ParticipantsWrap key={item}>
        <ParticipantsCheckBox type="checkbox" />
        <ParticipantsImage />
        <NameAndDescription>
          <ParticipantsName>{item}</ParticipantsName>
          <ParticipantsDescription>
            {truncateText(
              '긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글',
              20
            )}
          </ParticipantsDescription>
        </NameAndDescription>
        <ParticipantsArrow
          onClick={handleToggle}
          key={item}>
          <CommonArrowDown size={24} />
        </ParticipantsArrow>
      </ParticipantsWrap>
      {letter && (
        <ParticipantsLetter key={item}>
          안녕하세요. 저번달에 갓 입사한 샌애기 마케터입니다. 스터디를 꼭 해보고
          싶었는데 좋은 기회일 것 같아 신청합니다...! ESTJ라 성실하게 임할 수
          있습니다 ^_^ 감사합니다.
        </ParticipantsLetter>
      )}
    </>
  ))
  return (
    <Container>
      {fetchParticipantsInfo}
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

const ParticipantsCheckBox = styled.input`
  width: 24px;
  height: 24px;
`
const ParticipantsArrow = styled.button`
  right: 16px;
  position: absolute;
`

const ParticipantsLetter = styled.button`
  margin-left: 36px;
  max-width: 300px;
  max-height: 147px;
  padding: 12px 16px 15px 16px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey3};
  background-color: ${props => props.theme.main.white};
`

const WarningTextContainer = styled.div`
  position: sticky;
  margin: 10% auto 25%;
  max-width: 382px;
  width: 100%;
  min-height: 120px;
  background-color: ${props => props.theme.greyScale.blueGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  gap: 10px;
`
const WarningText = styled.div`
  margin-left: 12px;
  font-size: 14px;
  color: ${props => props.theme.greyScale.grey7};
`
