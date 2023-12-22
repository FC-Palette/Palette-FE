import { Button } from "components/index"
import { theme } from "styles/index"
import { styled } from "styled-components"
import { PROFILE_EDIT_TEXT } from "constants/index"
import { Link, useLocation, useParams } from "react-router-dom"
import { checkFollowed, followAdd, followDelete } from "@/api"
import { useEffect, useState } from "react"
import { decoder } from "@/utils"


export const MyPageEditBtn = ({ userData, setUserData }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const location = useLocation();
  const isMyPage = location.pathname === '/mypage';
  const { member_id } = useParams();
  const followingId = Number(member_id);
  const decodedPayload = decoder();
  const loginUserId = decodedPayload.memberId;
  const bio = userData?.response.bio;
  const nickname = userData?.response.nickname;
  const image = userData?.response.image;

  useEffect(() => {
    async function fetchData() {
      try {
        if (userData) { // userData가 존재하는 경우에만 실행
          const followedData = await checkFollowed(decodedPayload.memberId);
          setIsFollowing(false);
          const userIdArray = followedData.response.map(item => item.memberId);
          const uniqueUserIdArray = Array.from(new Set(userIdArray));
          setIsFollowing(uniqueUserIdArray.includes(followingId));
        }
      } catch (error) {
        console.error("Error checking follow status:", error);
      }
    }
    fetchData(); 
  }, [userData]);

  useEffect(() => {
  }, [userData]);

  const handleFollow = async () => {
    try {
      const profileData = {
        followingId,
        image,
        nickname,
        bio,
      };
      if (isFollowing) {
        const response = await followDelete(followingId);
        console.log('언팔로우 성공:', response);
        const updatedUserData = { ...userData };
        updatedUserData.response.followingCount -= 1;
        setUserData(updatedUserData);
      } else {
        const response = await followAdd(loginUserId, profileData);
        console.log('팔로우 성공:', response);
        const updatedUserData = { ...userData };
        updatedUserData.response.followingCount += 1;
        setUserData(updatedUserData);
      }
      setIsFollowing(prevState => !prevState); // 팔로우 상태 업데이트
    } catch (error) {
      console.error('API 요청 실패:', error);
    }
  };


    return (
      <ButtonWrap>
        {isMyPage && (
          <Link to={'/modifyprofile'}>
            <Button
              color={theme.main.blue0}
              $bgColor={theme.main.white}
              $btnHeight="60px">
              {PROFILE_EDIT_TEXT.profileEditBtnText}
            </Button>
          </Link>)}
        {isMyPage || (
          <FollowWrap>
            <Button
              onClick={handleFollow} 
              $bgColor={isFollowing ? theme.main.white : theme.main.blue0}
              color={isFollowing ? theme.main.blue0 : theme.main.white}>
              {isFollowing ? '팔로우 취소' : '팔로우'}
            </Button>
          </FollowWrap>)}
      </ButtonWrap>
    );
  };


const ButtonWrap = styled.div`
  width: 100%;
  Button{
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }
`
const FollowWrap = styled.div`
`