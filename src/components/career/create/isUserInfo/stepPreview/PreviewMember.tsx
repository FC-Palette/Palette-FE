import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'

export const PreviewMember = () => {
  return (
    <>
      <CareerCreateMeetingCommonQuestion>
        멤버 소개 <NumOfMembers>1명</NumOfMembers>
      </CareerCreateMeetingCommonQuestion>

      <ContentsContainer>
        <MemberImage />
        <NameAndIntroduceWrap_Column>
          <MemberName>멤버 이름 미리보기</MemberName>
          <MemberIntroduce>멤버 소개 미리보기</MemberIntroduce>
        </NameAndIntroduceWrap_Column>
      </ContentsContainer>
    </>
  )
}

const NumOfMembers = styled.span`
  color: ${props => props.theme.main.blue0};
`

const ContentsContainer = styled.div`
  display: flex;
  height: 92px;
  margin: 1.2% 5.7% 0;
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
