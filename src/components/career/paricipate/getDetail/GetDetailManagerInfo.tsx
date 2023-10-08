import { checkFollowed, checkFollowing, followAdd, followDelete } from '@/api'
import { Button } from '@/components'
import { fetchDetailGlobalState } from '@/recoil'
import { decoder } from '@/utils'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

const initailFormData = {
  nickname: 'nickname',
  bio: 'bio',
  followingId: 0,
  image: null
}
export const GetDetailManagerInfo = () => {
  const [isFollow, setIsFollow] = useState(false)
  const atom = useRecoilValue(fetchDetailGlobalState)
  const { meetingMemberDto } = atom
  const { nickname, bio, id, image } = meetingMemberDto
  const [profile, setProfile] = useState(initailFormData)
  const loggedUserId = decoder().memberId

  useEffect(() => {
    const fetchFollwData = async () => {
      const res = await checkFollowing(id)
      console.log(res.response)
      const followRes = res.response.filter(item => item.memberId === id)
      console.log(followRes)
    }
    fetchFollwData()
  }, [isFollow])

  useEffect(() => {
    setProfile({
      nickname: nickname,
      bio: bio,
      followingId: id,
      image: image
    })
  }, [meetingMemberDto])

  const handleFollow = async () => {
    console.log('id:', id)
    console.log('profile:', profile)
    if (isFollow) {
      const deleteRes = await followDelete(id)
      if (deleteRes.status === 200) {
        console.log(deleteRes)
        setIsFollow(!isFollow)
      }
    } else {
      const addRes = await followAdd(id, profile)
      if (addRes.status === 200) {
        console.log(addRes)
        setIsFollow(!isFollow)
      }
    }
  }

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const checkFollow = (followInfo: boolean) => {
    return followInfo ? (
      <Button
        onClick={handleFollow}
        color="#6B7280"
        $bgColor="#F5F6FA"
        $borderColor="F5F6FA"
        $btnWidth="105px"
        $btnHeight="35px">
        팔로우 삭제
      </Button>
    ) : (
      <Button
        onClick={handleFollow}
        $bgColor="#2563EB"
        $borderColor="2563EB"
        $btnWidth="105px"
        $btnHeight="35px">
        팔로우
      </Button>
    )
  }

  return (
    <>
      <Container>
        {image && <RoomManagerImage src={image} />}
        <NameAndIntroduceWrap_Column>
          <RoomManagerName>{nickname || ''}</RoomManagerName>
          <RoomManagerIntroduce>
            {truncateText(bio, 12) || ''}
          </RoomManagerIntroduce>
        </NameAndIntroduceWrap_Column>
        <FollowBtn>{checkFollow(isFollow)}</FollowBtn>
      </Container>
    </>
  )
}

const Container = styled.div`
  margin: 0 5.7%;
  width: 100%;
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
const RoomManagerImage = styled.img`
  background-color: ${props => props.theme.greyScale.grey5};
  border-radius: 8px;
  width: 52px;
  height: 52px;
`

const NameAndIntroduceWrap_Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 45%;
`

const RoomManagerName = styled.div`
  font-weight: 600;
  color: ${props => props.theme.main.black};
  white-space: nowrap;
`

const RoomManagerIntroduce = styled.div`
  color: ${props => props.theme.greyScale.grey5};
  display: flex;
  flex-wrap: wrap;
`

const FollowBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 35px;
  background-color: ${props => props.theme.subColor.blueGrey};
  color: ${props => props.theme.greyScale.grey5};
  border-radius: 8px;
  margin-right: 10%;
`
