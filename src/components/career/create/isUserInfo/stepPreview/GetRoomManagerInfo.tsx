import styled from 'styled-components'

export const GetRoomManagerInfo = () => {
  return (
    <>
      <ContentsContainer>
        <RoomManagerImage />
        <NameAndIntroduceWrap_Column>
          <RoomManagerName>CEO가 꿈이야</RoomManagerName>
          <RoomManagerNameIntroduce>
            일이삼사오육칠팝구십
          </RoomManagerNameIntroduce>
        </NameAndIntroduceWrap_Column>
        <FollowBtn>팔로우 삭제</FollowBtn>
      </ContentsContainer>
    </>
  )
}

const ContentsContainer = styled.div`
  width: 430px;
  height: 76px;
  display: flex;
  justify-content: space-between;
  background-color: rosybrown;
`

const RoomManagerImage = styled.div`
  margin-top: 12px;
  margin-left: 24px;
  background-color: ${props => props.theme.greyScale.grey5};
  border-radius: 8px;
  width: 52px;
  height: 52px;
`
const NameAndIntroduceWrap_Column = styled.div`
  margin-top: 18px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`
const RoomManagerName = styled.div`
  color: ${props => props.theme.greyScale.grey8};
`
const RoomManagerNameIntroduce = styled.div`
  color: ${props => props.theme.greyScale.grey5};
`

const FollowBtn = styled.button`
  margin-top: 21px;
  display: flex;
  margin-right: 24px;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
  width: 105px;
  height: 35px;
  background-color: ${props => props.theme.subColor.blueGrey};
  color: ${props => props.theme.greyScale.grey5};
  border-radius: 8px;
`

