import { Button } from "components/index"
import { theme } from "styles/index"
import { styled } from "styled-components"
import { PROFILE_EDIT_TEXT } from "constants/index"
import { Link, useLocation, useParams } from "react-router-dom"
import { followAdd, followDelete } from "@/api"
import { useEffect, useState } from "react"
import { decoder } from "@/utils"


export const MyPageEditBtn = ({ userData }) => {
  const location = useLocation();
  const isMyPage = location.pathname === '/mypage';

  // memberId를 동적으로 사용하여 API 호출
  // memberId는 현재 경로의 동적 세그먼트에서 가져온 값
  // 예: /mypage/2에서 memberId는 2가 됨
  const { member_id } = useParams();
  const decodedPayload = decoder();
  const followingId = decodedPayload.memberId;
  const bio = userData?.response.bio;
  const nickname = userData?.response.nickname;
  const image = userData?.response.image;
  const [isFollowing, setIsFollowing] = useState(userData ? userData.response.followed : false);

  useEffect(() => {
    if (userData) {
      setIsFollowing(userData.response.followed);}
  }, [userData]);
  console.log(userData);



  const handleFollow = async () => {
    try {
      const profileData = {
        followingId,
        image,
        nickname,
        bio,
      };
  
      if (isFollowing) {
        const response = await followDelete(member_id);
        console.log('언팔로우 성공:', response);
      } else {
        const response = await followAdd(member_id, profileData);
        console.log('팔로우 성공:', response);
      }
  
      setIsFollowing((prevState) => !prevState); // 팔로우 상태 업데이트
      // userData.response.followed 값을 업데이트
      userData.response.followed = !isFollowing;
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