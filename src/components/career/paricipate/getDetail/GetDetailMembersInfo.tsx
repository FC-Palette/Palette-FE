import { useState } from 'react'
import { CareerCreateMeetingCommonQuestion } from '../..'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { CommonAddIcon } from '@/components'
import { useRecoilValue } from 'recoil'
import { fetchDetailGlobalState, fetchDetailMemberState } from '@/recoil'

export const GetDetailMembersInfo = ({ isAdmin }) => {
  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(false)
  const memberAtom = useRecoilValue(fetchDetailMemberState)
  const meetingRes = useRecoilValue(fetchDetailGlobalState)
  const { msg } = meetingRes
  const isUserJoined = msg === '참여하고 있지않은 모임입니다.' ? false : true

  const maxLength = 20

  const longText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const fetchMembersCount = memberAtom.length

  const handleSeeMoreClick = () => {
    if (isUserJoined || isAdmin) {
      navigate('members')
    } else {
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
      }, 2000)
    }
  }

  return (
    <>
      <TitleContainer>
        <CareerCreateMeetingCommonQuestion>
          멤버 소개 <span> {fetchMembersCount}명 </span>
          <SeeMoreLink onClick={handleSeeMoreClick}>
            <CommonAddIcon size={16} /> 더보기
          </SeeMoreLink>
        </CareerCreateMeetingCommonQuestion>
      </TitleContainer>
      <MembersContainer>
        {memberAtom.map((member, index) => {
          if (member.nickname && member.bio && member.image !== null) {
            return (
              <MemberItem key={index}>
                <MemberImage
                  src={member.image}
                  alt="멤버 이미지"
                />
                <MemberInfo>
                  <MemberNickname>{member.nickname}</MemberNickname>
                  <MemberBio>{longText(member.bio, maxLength)}</MemberBio>
                </MemberInfo>
              </MemberItem>
            )
          }
          // 모든 속성이 없는 경우 렌더링하지 않음
          return null
        })}
      </MembersContainer>
      {showMessage && (
        <MessageContainer>가입 후 멤버들을 확인해주세요</MessageContainer>
      )}
    </>
  )
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  & span {
    color: ${props => props.theme.main.blue0};
  }
`

const SeeMoreLink = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;

  margin-left: 180px;

  @media (max-width: 420px) {
    margin-left: auto;
  }
`

const MembersContainer = styled.div`
  width: auto;
  border-radius: 8px;
  background-color: ${props => props.theme.subColor.blueGrey};
  margin: 2.5% 6.4% 3.5%;
`

const MemberItem = styled.div`
  display: flex;
  align-items: center;
  margin: 4px auto;
  max-height: 76px;
`

const MemberImage = styled.img`
  width: 54px;
  height: 54px;
  background-color: green;
  margin: 12px 10px 12px 24px;
  border-radius: 8px;
`

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`

const MemberNickname = styled.span`
  font-size: 16px;
  color: ${props => props.theme.greyScale.grey8};
`

const MemberBio = styled.span`
  font-size: 16px;
  color: ${props => props.theme.greyScale.grey5};
  width: auto;
  height: 32px;
  white-space: pre-wrap;
  margin-top: 2px;
`

const MessageContainer = styled.div`
  padding: 1% 2%;
  min-width: 200px;
  height: 30px;
  background-color: rgba(55, 65, 81, 0.8);
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  z-index: 9999;
`
