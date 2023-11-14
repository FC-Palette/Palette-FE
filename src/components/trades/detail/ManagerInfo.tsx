import styled from 'styled-components'
import { followAdd, followDelete } from 'api/index'
import { useState } from 'react'
import { Button } from 'components/index'

export const ManagerInfo = ({
  managerName,
  managerInfo,
  managerImg,
  id,
  profile
}) => {
  const [isFollow, setIsFollow] = useState(false)

  const handleFollow = async () => {
    if (isFollow) {
      const deleteRes = await followDelete(id)
      if (deleteRes.status === 200) {
        setIsFollow(!isFollow)
      }
    } else {
      const addRes = await followAdd(id, profile)
      if (addRes.status === 200) {
        setIsFollow(!isFollow)
      }
    }
  }
  const truncateManagerInfo = info => {
    if (info.length > 15) {
      return info.substring(0, 15) + '...'
    }
    return info
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
      <ContentsContainer>
        <RoomManagerImage>
          <img
            src={managerImg}
            alt={'이미지없음'}
          />
        </RoomManagerImage>
        <NameAndIntroduceWrap_Column>
          <RoomManagerName>{managerName}</RoomManagerName>
          <RoomManagerIntroduce>
            {truncateManagerInfo(managerInfo)}
          </RoomManagerIntroduce>
        </NameAndIntroduceWrap_Column>
        <FollowBtn>{checkFollow(isFollow)}</FollowBtn>
      </ContentsContainer>
    </>
  )
}

const ContentsContainer = styled.div`
  margin: 0 5.7%;
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RoomManagerImage = styled.div`
  background-color: transparent;
  border-radius: 8px;
  width: 52px;
  height: 52px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const NameAndIntroduceWrap_Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 45%;
  height: 45%;
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

const FollowBtn = styled.button`
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
