import styled from 'styled-components'

export const GetRoomManagerInfo = () => {
  return (
    <>
      <ContentsContainer>
        <RoomManagerImage />
        <NameAndIntroduceWrap_Column>
          <RoomManagerName>매니저명 미리보기</RoomManagerName>
          <RoomManagerIntroduce>매니저 소개 미리보기</RoomManagerIntroduce>
        </NameAndIntroduceWrap_Column>
        <FollowBtn>팔로우 삭제</FollowBtn>
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
