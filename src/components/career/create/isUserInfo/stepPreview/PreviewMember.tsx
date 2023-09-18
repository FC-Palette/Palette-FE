import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { Button } from '@/components'
import { useNavigate } from 'react-router-dom'

export const PreviewMember = () => {
  const navigate = useNavigate()

  return (
    <>
      <TitleContainer>
        <CareerCreateMeetingCommonQuestion>
          멤버 소개 <NumOfMembers>1명</NumOfMembers>
        </CareerCreateMeetingCommonQuestion>
      </TitleContainer>
      <ContentsContainer>
        <MemberImage />
        <NameAndIntroduceWrap_Column>
          <MemberName>멤버 이름 미리보기</MemberName>
          <MemberIntroduce>멤버 소개 미리보기</MemberIntroduce>
        </NameAndIntroduceWrap_Column>
      </ContentsContainer>
      <BtnWrap>
        <Button
          $bgColor="#fff"
          $btnWidth="187px"
          $btnHeight="60px"
          $borderRadius="8px"
          onClick={() => navigate('/createMeeting-preview')}>
          <BlueText>취소하기</BlueText>
        </Button>
        <Button
          $btnWidth="187px"
          $btnHeight="60px"
          $borderRadius="8px"
          onClick={() => navigate('/createMeeting-preview')}>
          개설하기
        </Button>
      </BtnWrap>
    </>
  )
}
const TitleContainer = styled.div`
  width: 382px;
  margin: 0 24px 0;
`

const NumOfMembers = styled.span`
  color: ${props => props.theme.main.blue0};
`

const ContentsContainer = styled.div`
  display: flex;
  width: 382px;
  height: 92px;
  margin: 17px 24px 0;
  border-radius: 8px;
  background-color: ${props => props.theme.subColor.blueGrey};
`

const MemberImage = styled.div`
  margin-top: 20px;
  margin-left: 24px;
  background-color: ${props => props.theme.greyScale.grey5};
  border-radius: 8px;
  width: 52px;
  height: 52px;
`
const NameAndIntroduceWrap_Column = styled.div`
  margin-top: 26px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`
const MemberName = styled.div`
  color: ${props => props.theme.greyScale.grey8};
`
const MemberIntroduce = styled.div`
  color: ${props => props.theme.greyScale.grey5};
`
const BtnWrap = styled.div`
  width: 382px;
  margin: 49px 24px 32px;
  display: flex;
  gap: 11px;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  color: ${props => props.theme.greyScale.grey3};
`
const BlueText = styled.span`
  color: ${props => props.theme.main.blue0};
`
