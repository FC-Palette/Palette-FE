import { CareerCreateMeetingCommonQuestion } from 'components/career/create/index'
import styled from 'styled-components'
import { PREVIEW_ICON_INFO } from 'constants/trades/index'
import { Profile2User, Timer1, Calendar } from 'iconsax-react'

const iconMapping = {
  마감일자: <Calendar />,
  남은시간: <Timer1 />,
  모집인원: <Profile2User />
}

export const PurchaseInfo = ({
  startDay,
  endDay,
  timeRemaining,
  headCount
}) => {
  const icons = PREVIEW_ICON_INFO.map((iconKey, idx) => (
    <IconZone key={idx}>
      <Icon>{iconMapping[iconKey]}</Icon>
      <div>{iconKey}</div>
    </IconZone>
  ))

  const infos = (
    <InfoZone>
      <Info>
        {startDay} ~ {endDay}
      </Info>
      <Info>{timeRemaining}</Info>
      <Info>{headCount}명</Info>
    </InfoZone>
  )

  return (
    <>
      <CareerCreateMeetingCommonQuestion>
        모임정보
      </CareerCreateMeetingCommonQuestion>
      <ContentsFielContainer>
        <ContentsFieldL>{icons}</ContentsFieldL>
        <ContentsFieldR>{infos}</ContentsFieldR>
      </ContentsFielContainer>
    </>
  )
}

const ContentsFielContainer = styled.div`
  display: flex;
`
const ContentsFieldL = styled.div`
  margin-left: 5.7%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 120px;
  height: 138px;
  margin-top: 1.2%;
  padding: 19px 16px 19px 19px;
  background-color: ${props => props.theme.subColor.blueGrey};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

const ContentsFieldR = styled.div`
  margin-right: 5.7%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 262px;
  height: 138px;
  margin-top: 1.2%;
  padding: 19px 19px 19px 0;
  background-color: ${props => props.theme.subColor.blueGrey};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

const Icon = styled.div`
  width: 24px;
  height: 24px;
`

const IconZone = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  line-height: 16.71px;
  width: 80px;
`

const InfoZone = styled.div`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;
  line-height: 16.71px;
  color: ${props => props.theme.greyScale.grey9};
`

const Info = styled.div`
  height: 24px;
`
