import { theme } from "styles/index";
import { css, styled } from "styled-components";
import { useEffect } from "react";
import { getMyPage } from "@/api/mypage/mypageApi";
import { useParams, useLocation, Link } from "react-router-dom";
import { decoder } from "@/utils";
import { PROFILE_EDIT_TEXT } from "@/constants";
import { MyPageSimpleProfileBtn } from "./MyPageSimpleProfileBtn";
import { MyPageChatBtn, MyPageEditBtn } from ".";

export const MyPageIntro = ({ userData, setUserData }) => {
  const { member_id } = useParams();
  const location = useLocation();
  const decodedPayload = decoder();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;

        if (member_id) {
          data = await getMyPage(member_id);
        } else {
          data = await getMyPage(decodedPayload.memberId);
        }

        setUserData(data);
      } catch (error) {
        console.error('사용자 데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [setUserData]);
  


  return (
    <>
    <Container>
      <TextInformation>
        <NickName>{userData?.response?.nickname}</NickName>
        <TextArea>{userData?.response?.bio}</TextArea>
        <CategoryWrap>
          {userData?.response?.job !== null ? (
            <>
              <JobCategory hide={userData?.response?.job === null}>
                {userData?.response?.job}
              </JobCategory>
              <PositionCategory hide={userData?.response?.position === null}>
                {userData?.response?.position}
              </PositionCategory>
            </>
          ) : (
            <BuildingWrap>
              <div>{userData?.response?.building}</div>
              <div>{userData?.response?.wing}</div>
              <div>{userData?.response?.roomNumber}</div>
            </BuildingWrap>
          )}
        </CategoryWrap>
        <FollowUserArea hide={userData?.response?.job === null}>
          <FollowerWrap>
            <Link to={`/friend/${decodedPayload.memberId}`}>
            <Follower>{PROFILE_EDIT_TEXT.profileFollowText}</Follower>
            <FollowingNumber>{userData?.response?.followingCount}</FollowingNumber>
            </Link>
          </FollowerWrap>
          <FollowingWrap>
            <Link to={`/friend/${decodedPayload.memberId}`}>
            <Following>{PROFILE_EDIT_TEXT.profileFollowingText}</Following>
            <FollowerNumber>{userData?.response?.followedCount}</FollowerNumber>
            </Link>
          </FollowingWrap>
        </FollowUserArea>
      </TextInformation>
      <ImageInformation>
        <CircleImage>
          <img src={userData?.response?.image} alt="User Profile" />
        </CircleImage>
      </ImageInformation>
      <MyPageSimpleProfileBtn hide={userData?.response?.job === null && location.pathname === '/mypage'} />
    </Container>
    <BtnWrap>
      <MyPageEditBtn userData={userData} setUserData={setUserData}/>
      <MyPageChatBtn />
    </BtnWrap>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 0 24px;
  max-width: 430px;
`;

const TextInformation = styled.div``;

const NickName = styled.div`
  height: 43px;
  color: ${theme.greyScale.grey9};
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
`;

const TextArea = styled.div`
  word-break: break-all;
  max-width: 293px;
  min-width: 293px;
  color: ${theme.greyScale.grey5};
  font-size: 16px;
  line-height: 19.09px;
  padding-bottom: 8px;
`;

const CategoryWrap = styled.div`
  display: flex;
  div {
    padding-right: 5px;
  }
`;

const JobCategory = styled.div<{ hide: boolean }>`
  color: ${theme.greyScale.grey7};
  background-color: ${theme.greyScale.grey2};
  font-size: 14px;
  border-radius: 4px;
  margin-right: 4px;
  padding: 4px 8px;
  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
`;

const PositionCategory = styled.div<{ hide: boolean }>`
  color: ${theme.greyScale.grey7};
  background-color: ${theme.greyScale.grey2};
  font-size: 14px;
  border-radius: 4px;
  padding: 4px 8px;
  padding-left: 4px;
  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
`;

const FollowUserArea = styled.div<{ hide: boolean }>`
  display: flex;
  padding: 24px 0;
  :link{
    color: inherit;
  }
  :visited{
    color: inherit;
  }
  ${(props) =>
    props.hide &&
    css`
      padding-top: 50px;
    `}
`;

const FollowerWrap = styled.div`
  padding-right: 22px;
`;

const Follower = styled.div`
  font-size: 18px;
  line-height: 27px;
`;

const Following = styled.div`
  font-size: 18px;
  line-height: 27px;
`;

const FollowerNumber = styled.div`
  font-size: 26px;
  font-weight: 600;
  line-height: 36px;
`;

const FollowingNumber = styled.div`
  font-size: 26px;
  font-weight: 600;
  line-height: 36px;
`;

const FollowingWrap = styled.div``;

const ImageInformation = styled.div`
  margin-top: 40.5px;
  padding-left: 14px;
`;

const CircleImage = styled.div`
  background-color: #d9d9d9;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const BuildingWrap = styled.div`
  display: flex;
  color: #6B7280;
  font-size: 16px;
`;


const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 24px;
  margin-bottom: 20px;
  width: 100%;
`
