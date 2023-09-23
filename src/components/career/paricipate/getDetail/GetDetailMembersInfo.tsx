import { useState } from 'react'
import { CareerCreateMeetingCommonQuestion } from '../..'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { CommonAddIcon } from '@/components'
export const GetDetailMembersInfo = () => {
  const isUserJoined = false
  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(false)

  const maxLength = 20
  const longText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const dummyFetchData = {
    response: true,
    members: [
      {
        nickname: '요한이1',
        bio: '안녕하세요',
        image: null
      },
      {
        nickname: '요한이2',
        bio: '안녕하세요 처음보는 사람들도 안녕하세요 어~~~우어워어 어~~~우어워어 어~~~우어워어 어~~~우어워어',
        image: null
      },
      {
        nickname: '요한이3',
        bio: '안녕하세요',
        image: null
      },
      {
        nickname: '요한이1',
        bio: '안녕하세요',
        image: null
      },
      {
        nickname: '요한이2',
        bio: '안녕하세요',
        image: null
      },
      {
        nickname: '요한이3',
        bio: '안녕하세요',
        image: null
      }
    ]
  }

  const fetchMembersCount = dummyFetchData.members.length

  const handleSeeMoreClick = () => {
    if (isUserJoined) {
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
        {dummyFetchData.members.slice(0, 3).map((member, index) => (
          <MemberItem key={index}>
            <MemberImage
              src={
                member.image ??
                'data:image/png;base64,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'
              }
              alt="멤버 이미지"
            />
            <MemberInfo>
              <MemberNickname>{member.nickname}</MemberNickname>
              <MemberBio>{longText(member.bio, maxLength)}</MemberBio>
            </MemberInfo>
          </MemberItem>
        ))}
      </MembersContainer>
      {showMessage && (
        <MessageContainer>가입 후 멤버들을 확인해주세요</MessageContainer>
      )}
    </>
  )
}

// 수정전
// const TitleContainer = styled.div`
//   display: flex;
//   width: 382px;
//   margin: 0 24px 0;
//   color: ${props => props.theme.greyScale.grey9};

//   & span {
//     color: ${props => props.theme.main.blue0};
//   }
// `

// const SeeMoreLink = styled.span`
//   font-size: 14px;
//   color: ${props => props.theme.main.blue0};
//   margin-left: 205px;
//   cursor: pointer;
// `

// const MembersContainer = styled.div`
//   width: 382px;
//   height: 244px;
//   border-radius: 8px;
//   background-color: ${props => props.theme.subColor.blueGrey};
//   margin: 8px 24px 0;
// `

// const MemberItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 8px;
//   height: 76px;
// `

// const MemberImage = styled.img`
//   width: 54px;
//   height: 54px;
//   background-color: green;
//   margin: 12px 10px 12px 24px;
//   border-radius: 8px;
// `

// const MemberInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 12px;
// `

// const MemberNickname = styled.span`
//   font-size: 16px;
//   color: ${props => props.theme.greyScale.grey8};
// `

// const MemberBio = styled.span`
//   font-size: 16px;
//   color: ${props => props.theme.greyScale.grey5};
//   width: 250px;
//   height: 32px;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   margin-top: 2px;
// `

// const MessageContainer = styled.div`
//   width: 200px;
//   height: 37px;
//   background-color: rgba(55, 65, 81, 0.8);
//   font-size: 14px;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   top: 30%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   border-radius: 4px;
//   z-index: 9999;
// `

// 수정 후 (9.23)
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

  margin-left: 190px;

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
