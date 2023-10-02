import { theme } from "styles/index";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { getMyPage, getOtherUserPage } from "@/api/mypage/mypageApi";
import { useParams } from "react-router-dom";
import { myPageIntroProps } from "@/types";

export const MyPageIntro = () => {
  const { member_id } = useParams();
  const [userData, setUserData] = useState<myPageIntroProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;

        if (member_id) {
          data = await getOtherUserPage(member_id);
        } else {
          data = await getMyPage(member_id);
        }

        setUserData(data);
        console.log(data);
      } catch (error) {
        let data;
        console.error('사용자 데이터 가져오기 오류:', error);
        console.log(data);
      }
    };

    fetchData();
  }, [member_id]); 

  return (
    <Container>
      <TextInformation>
      <NickName>{userData?.response?.nickname}</NickName>
        <TextArea>{userData?.response?.bio}</TextArea>
        <CategoryWrap>
          <JobCategory>{userData?.response?.job}</JobCategory>
          <PositionCategory>{userData?.response?.position}</PositionCategory>
        </CategoryWrap>
        <FollowUserArea>
          <FollowerWrap>
            <Follower>팔로워</Follower>
            <FollowerNumber>{userData?.response?.followedCount}</FollowerNumber>
          </FollowerWrap>
          <FollowingWrap>
            <Following>팔로잉</Following>
            <FollowingNumber>{userData?.response?.followingCount}</FollowingNumber>
          </FollowingWrap>
        </FollowUserArea>
      </TextInformation>

      <ImageInformation>
        <CircleImage></CircleImage>
      </ImageInformation>
    </Container>
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
`;

const JobCategory = styled.div`
  color: ${theme.greyScale.grey7};
  background-color: ${theme.greyScale.grey2};
  font-size: 14px;
  border-radius: 4px;
  margin-right: 4px;
  padding: 4px 8px;
`;

const PositionCategory = styled.div`
  color: ${theme.greyScale.grey7};
  background-color: ${theme.greyScale.grey2};
  font-size: 14px;
  border-radius: 4px;
  padding: 4px 8px;
  padding-left: 4px;
`;

const FollowUserArea = styled.div`
  display: flex;
  padding: 12px 0;
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
`;
