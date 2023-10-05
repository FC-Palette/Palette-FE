import { participateListApi } from '@/api'
import { CommonArrowDown } from '@/components'
import { CONFIRM_WARING_TEXT } from '@/constants'
import { paricipateListAtom } from '@/recoil'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

export const CareerMeetingStandby = () => {
  const [letter, setLetter] = useState<{ [key: string]: boolean }>({})
  const [list, setList] = useRecoilState(paricipateListAtom)
  const meetingId = String(48)

  useEffect(() => {
    const fetchList = async () => {
      const listRes = await participateListApi(meetingId)
      if (listRes.status === 200) {
        setList(listRes.response)
      } else {
        alert('올바른 호출이 아닙니다.')
      }
    }
    fetchList()
  }, [meetingId])

  const handleToggle = (itemId: string) => {
    setLetter(prevLetter => ({
      ...prevLetter,
      [itemId]: !prevLetter[itemId]
    }))
  }

  const warningText = CONFIRM_WARING_TEXT.map(item => (
    <WarningText key={item}>{item}</WarningText>
  ))

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const fetchParticipantsInfo = list.map(item => (
    <>
      <ParticipantsWrap key={item.id}>
        <ParticipantsCheckBox type="checkbox" />
        <ParticipantsImage />
        <NameAndDescription>
          <ParticipantsName>{item.nickname}</ParticipantsName>
          <ParticipantsDescription>
            {truncateText(item.bio, 20)}
          </ParticipantsDescription>
        </NameAndDescription>
        <ParticipantsArrow
          onClick={() => handleToggle(String(item.id))}
          key={item.id}>
          <CommonArrowDown size={24} />
        </ParticipantsArrow>
      </ParticipantsWrap>
      {letter[item.id] && (
        <ParticipantsLetter key={item.id}>
          {/* {truncateText(item.pr, 83)} */}

          {item.pr}
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
  width: 300px;
  max-width: 300px;
  height: auto;
  max-height: 147px;
  padding: 12px 16px 15px 16px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey3};
  background-color: ${props => props.theme.main.white};
  word-break: break-all;
  line-height: normal;
  overflow: hidden;
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
