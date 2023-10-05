//
import { Button, Header } from '@/components'
import { fetchDetailMemberState } from '@/recoil'
import { ArrowLeft2 } from 'iconsax-react'
// import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
export const GetDetailMemberSeeMore = () => {
  const navigate = useNavigate()
  const memeberAtom = useRecoilValue(fetchDetailMemberState)

  if (!memeberAtom) {
    return
  }

  const longText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }
  return (
    <Wrap>
      <HeaderWrap>
        <Header
          leftIcon={
            <StyledIcon onClick={() => navigate(-1)}>
              <ArrowLeft2 />
            </StyledIcon>
          }
          centerText={'참여 멤버'}
        />
      </HeaderWrap>

      <MembersContainer>
        {memeberAtom.map((member, index) => (
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
              <MemberBio>{longText(member.bio, 20)}</MemberBio>
            </MemberInfo>
            <FollowButtonContainer>
              {member ? (
                <Button
                  // onClick={() => handleFollow(index)}
                  color="#6B7280"
                  $bgColor="#F5F6FA"
                  $borderColor="F5F6FA"
                  $btnWidth="100%"
                  $btnHeight="35px">
                  팔로우 삭제
                </Button>
              ) : (
                <Button
                  // onClick={() => handleFollow(index)}
                  $bgColor="#2563EB"
                  $borderColor="2563EB"
                  $btnWidth="100%"
                  $btnHeight="35px">
                  팔로우
                </Button>
              )}
            </FollowButtonContainer>
          </MemberItem>
        ))}
      </MembersContainer>
    </Wrap>
  )
}

const HeaderWrap = styled.div`
  width: 100%;
`

const Wrap = styled.div`
  max-width: 430px;
  min-height: 100vh;
  overflow-y: scroll;
  padding-bottom: 20px;

  @media (max-width: 430px) {
    max-width: 100%;
    padding: 16px;
  }
`

const MembersContainer = styled.div`
  width: 100%;
  border-radius: 8px;
`

const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`

const MemberItem = styled.div`
  display: flex;
  align-items: center;
  max-height: 76px;
  width: 100%;
  max-width: 430px;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 8px;
  @media (max-width: 430px) {
    max-width: 100%;
  }
`

const MemberImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 54px;
  max-height: 54px;
  margin: 8px 12px 8px 0;
  border-radius: 8px;
`

const MemberInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MemberNickname = styled.span`
  font-size: 16px;
  color: ${props => props.theme.greyScale.grey8};
`

const MemberBio = styled.span`
  font-size: 16px;
  color: ${props => props.theme.greyScale.grey5};
  white-space: wrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 2px;
`

const FollowButtonContainer = styled.div`
  max-width: 99px;
  margin-left: 16px;
  width: 100%;

  @media (max-width: 430px) {
    margin-left: 0;
    width: 100%;
  }
`

// <MembersContainer>
// {dummyFetchData.members.map((member, index) => (
//   <MemberItem key={index}>
//     <MemberImage
//       src={
//         member.image ??
//         'data:image/png;base64,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'
//       }
//       alt="멤버 이미지"
//     />
//     <MemberInfo>
//       <MemberNickname>{member.nickname}</MemberNickname>
//       <MemberBio>{longText(member.bio, 20)}</MemberBio>
//     </MemberInfo>
//     <FollowButtonContainer>
//       {member.isFollow ? (
//         <Button
//           // onClick={() => handleFollow(index)}
//           color="#6B7280"
//           $bgColor="#F5F6FA"
//           $borderColor="F5F6FA"
//           $btnWidth="100%"
//           $btnHeight="35px">
//           팔로우 삭제
//         </Button>
//       ) : (
//         <Button
//           // onClick={() => handleFollow(index)}
//           $bgColor="#2563EB"
//           $borderColor="2563EB"
//           $btnWidth="100%"
//           $btnHeight="35px">
//           팔로우
//         </Button>
//       )}
//     </FollowButtonContainer>
//   </MemberItem>
// ))}
// </MembersContainer>
