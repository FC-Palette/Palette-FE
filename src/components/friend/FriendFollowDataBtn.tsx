import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Button } from '..'
import { theme } from '@/styles'
import { followDelete, followAdd, checkFollowed } from '@/api'
import { decoder } from '@/utils'

export const FollowDataBtn = ({ isfollowedItem }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const decodedPayload = decoder();
  const loginUserId = decodedPayload.memberId;
  const followingId = isfollowedItem?.memberId;
  const memberId = isfollowedItem?.memberId;
  const bio = isfollowedItem?.bio;
  const nickname = isfollowedItem?.nickname;
  const image = isfollowedItem?.image;



  useEffect(() => {
    async function fetchData() {
      try {
        if (isfollowedItem) { // userData가 존재하는 경우에만 실행
          const followedData = await checkFollowed(decodedPayload.memberId);
          setIsFollowing(false);
  
          const userIdArray = followedData.response.map(item => item.memberId);
          const uniqueUserIdArray = Array.from(new Set(userIdArray));

          setIsFollowing(uniqueUserIdArray.includes(memberId));
        }
      } catch (error) {
        console.error("Error checking follow status:", error);
      }
    }
    fetchData(); 
  }, [isfollowedItem]);
  
  const handleFollow = async () => {
    try {
      const profileData = {
        followingId,
        image,
        nickname,
        bio,
      };
      if (isFollowing) {
        const response = await followDelete(memberId);
        console.log('언팔로우 성공:', response);
      } else {
        const response = await followAdd(loginUserId, profileData);
        console.log('팔로우 성공:', response);
      }
      setIsFollowing(prevState => !prevState); // 팔로우 상태 업데이트
    } catch (error) {
      console.error('API 요청 실패:', error);
    }
  };


  return (
    <FollowWrap>
      <Button
        onClick={handleFollow} 
        $bgColor={isFollowing ? theme.main.white : theme.main.blue0}
        color={isFollowing ? theme.main.blue0 : theme.main.white}>
        {isFollowing ? '팔로우 취소' : '팔로우'}
      </Button>
    </FollowWrap>
)
}


const FollowWrap = styled.div`
`