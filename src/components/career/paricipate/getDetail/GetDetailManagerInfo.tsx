import { Button } from '@/components'
import { useState } from 'react'
import styled from 'styled-components'

export const GetDetailManagerInfo = () => {
  const [isFollow, setIsFollow] = useState(false)
  const managerName = '오피스너 매니저'
  const managerIntroduce = '오피스너 그는 전설이다. 오피스너 그는 전설이다. '

  // 대충 구현만 한거고 실제 사용시에는 클릭시마다 api호출 필요할듯
  const handleFollow = () => {
    setIsFollow(!isFollow)
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
        <RoomManagerImage />
        <NameAndIntroduceWrap_Column>
          <RoomManagerName>{managerName}</RoomManagerName>
          <RoomManagerIntroduce>
            {truncateText(managerIntroduce, 12)}
          </RoomManagerIntroduce>
        </NameAndIntroduceWrap_Column>
        <FollowBtn>{checkFollow(isFollow)}</FollowBtn>
      </Container>
    </>
  )
}

// 수정전
// const Container = styled.div`
//   width: 430px;
//   height: 76px;
//   display: flex;
// `

// const RoomManagerImage = styled.div`
//   margin: 12px 0 0 24px;
//   width: 52px;
//   height: 52px;
//   background-color: ${props => props.theme.greyScale.grey5};
//   border-radius: 8px;
// `

// const NameAndIntroduceWrap_Column = styled.div`
//   margin: 18px 0 0 12px;
//   display: flex;
//   flex-direction: column;
// `
// const RoomManagerName = styled.div`
//   color: ${props => props.theme.greyScale.grey8};
// `
// const RoomManagerIntroduce = styled.div`
//   color: ${props => props.theme.greyScale.grey5};
//   overflow: hidden;
//   white-space: nowrap;
//   max-width: 140px;
//   text-overflow: ellipsis;
// `

// const FollowBtn = styled.button`
//   margin-top: 21px;
//   display: flex;

//   margin-right: 24px;
//   justify-content: center;
//   align-items: center;
//   margin-left: 70px;
//   width: 105px;
//   height: 35px;
//   background-color: ${props => props.theme.subColor.blueGrey};
//   color: ${props => props.theme.greyScale.grey5};
//   border-radius: 8px;
// `

// 수정 (9.23)
const Container = styled.div`
  margin: 0 5.7%;
  width: 100%;
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
const RoomManagerImage = styled.div`
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
