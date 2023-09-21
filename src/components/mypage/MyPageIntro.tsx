import { theme } from "styles/index"
import styled from "styled-components"

export const MyPageIntro = () => {
  return (
    <Container>
        <TextInformation>
            <NickName>김사원</NickName>
            <TextArea>최대 80자까지 입력 가능합니다. 얼마나 입력했는지에 따라 아래 값들의 위치가 변화됩니다. 개발팀에서 확인해주세요.
            </TextArea>
            <CategoryWrap>
                <JobCategory>커뮤니케이션</JobCategory>
                <PositionCategory>대리</PositionCategory>
            </CategoryWrap>
            <FollowUserArea>
                <FollowerWrap>
                    <Follower>팔로워</Follower>
                    <FollowerNumber>150</FollowerNumber>
                </FollowerWrap>
                <FollowingWrap>
                    <Following>팔로잉</Following>
                    <FollowingNumber>67</FollowingNumber>
                </FollowingWrap>
            </FollowUserArea>
        </TextInformation>


        <ImageInformation>
            <CircleImage></CircleImage>
        </ImageInformation>
    </Container>
  )
}



const Container = styled.div`
    position: relative;
    display: flex;
    padding: 0 24px;
    width: 430px;
`

const TextInformation = styled.div`
`

const NickName = styled.div`
    width: 282px;
    height: 43px;
    color: ${theme.greyScale.grey9};
    font-size: 32px;
    font-weight: 600;
    line-height: 36px;
`

const TextArea = styled.div`
    width: 293px;
    color: ${theme.greyScale.grey5};
    font-size: 16px;
    line-height: 19.09px;
    padding-bottom: 8px;
`

const CategoryWrap = styled.div`
    display: flex;
`


const JobCategory = styled.div`
    color: ${theme.greyScale.grey7};
    background-color: ${theme.greyScale.grey2};
    font-size: 14px;
    border-radius: 4px;
    padding: 4px 8px;
`

const PositionCategory = styled.div`
    color: ${theme.greyScale.grey7};
    background-color: ${theme.greyScale.grey2};
    font-size: 14px;
    border-radius: 4px;
    padding: 4px 8px;
    padding-left: 4px;
`

const FollowUserArea = styled.div`
    display: flex;
    padding: 12px 0;
`


const FollowerWrap = styled.div`
    padding-right: 22px;
`
//공통 css 분리 필요
const Follower = styled.div`
    font-size: 18px;
    line-height: 27px;
`


const Following = styled.div`
    font-size: 18px;
    line-height: 27px;
`


//공통 css 분리 필요
const FollowerNumber = styled.div`
    font-size: 26px;
    font-weight: 600;
    line-height: 36px;
`


const FollowingNumber = styled.div`
    font-size: 26px;
    font-weight: 600;
    line-height: 36px;
`

const FollowingWrap = styled.div`
`

const ImageInformation = styled.div`
    margin-top: 40.5px;
    padding-left: 14px;

`
const CircleImage = styled.div`
    background-color: #d9d9d9;
    width: 75px;
    height: 75px;
    border-radius: 50%;
`

