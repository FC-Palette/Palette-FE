import { checkFollowed, checkFollowing } from "@/api";
import { useState, useEffect } from "react";
import { Footer, FriendFollowingBtn, FriendListSearch, Header } from "@/components";
import { decoder } from "@/utils";
import { styled } from "styled-components";
import { followPageDataProps } from "@/types";
import { theme } from "@/styles";
import { Link } from "react-router-dom";

  

  export const Friend = () => {
    const decodedPayload = decoder();
    console.log(decodedPayload.memberId)
    const [activeTab, setActiveTab] = useState("followers"); 
    const [isFollowed, setIsFollowed] = useState<followPageDataProps[] | null>(null);
    const [isFollowing, setIsFollowing] = useState<followPageDataProps[] | null>(null);
    
    useEffect(() => {
      async function fetchData() {
        try {
          if (activeTab === "followers") {
            const followedData = await checkFollowed(decodedPayload.memberId);
            setIsFollowed(followedData.response) 
            console.log(followedData.response)
          } 
          else if (activeTab === "following") {
            const followingData  = await checkFollowing(decodedPayload.memberId);
            setIsFollowing(followingData.response)
            console.log(followingData.response)
          }
        } catch (error) {
          console.error("Error checking follow status:", error);
        }
      }
      fetchData();
    }, [decodedPayload.memberId, activeTab]);

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

  

    const FriendTabs = ({ activeTab }) => {
      return (
        <TabWrap>
          <TabButton
            onClick={() => handleTabChange("followers")}
            isActive={activeTab === "followers"}
          >
            팔로워
          </TabButton>
          <TabButton
            onClick={() => handleTabChange("following")}
            isActive={activeTab === "following"}
          >
            팔로잉
          </TabButton>
        </TabWrap>
      );
    };
    
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    console.log(inputValue);


    return (
      <Wrap>
        <Header centerText="친구 목록" />
        <BodyWrap>
          <FriendTabs activeTab={activeTab} />
          <FriendListSearch inputValue={inputValue} handleInputChange={handleInputChange} followingData={activeTab === 'followers' ? isFollowed : activeTab === 'following' ? isFollowing : null} />
          <FriendListWrap>
          {activeTab === 'followers' && isFollowed !== null ? 
          (isFollowed.length > 0 
          ? 
          (isFollowed.map((isfollowedItem, index) => (
            <SetItems key={index}>
              <Link to={`/mypage/${isfollowedItem.memberId}`}>
                <UserImage>
                  {<img src={isfollowedItem.image} alt="User Profile" />}
                </UserImage>
                <UserInfoWrap>
                  <UserNickname>{isfollowedItem.nickname}</UserNickname>
                  <UserBio>{isfollowedItem.bio}</UserBio>
                </UserInfoWrap>
              </Link>
            </SetItems>
          ))
          ) : (<NoData>데이터가 없습니다.</NoData>)
          ) : activeTab === 'following' && isFollowing !== null ? (
        isFollowing.length > 0 ? (
          isFollowing
          .filter(
            (item) =>
              (item.nickname ? item.nickname.toLowerCase().includes(inputValue.toLowerCase()) : item.name.toLowerCase().includes(inputValue.toLowerCase()))
          ).map((isfollowingItem, index) => (
            <SetItems key={index}>
              <Link to={`/mypage/${isfollowingItem.memberId}`}>
                <UserImage>
                  {<img src={isfollowingItem.image} alt="User Profile" />}
                </UserImage>
                <UserInfoWrap>
                  <UserNickname>
                    {isfollowingItem.nickname ? isfollowingItem.nickname : isfollowingItem.name}
                  </UserNickname>
                  <UserBio>{isfollowingItem.bio}</UserBio>
                </UserInfoWrap>
              </Link>
              <FriendFollowingBtn />
            </SetItems>
          ))
        ) : (
          <NoData>데이터가 없습니다.</NoData>
        )
      ) : (
        <NoData>데이터가 없습니다.</NoData>
      )}
          </FriendListWrap> 
        </BodyWrap>
        <Footer />
      </Wrap>
    );
  };

  const Wrap = styled.div`
  margin: 0 auto;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  width: 100%;
  `;

  const BodyWrap = styled.div`
  
  `;

  const TabWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    border-bottom: 1px solid ${theme.greyScale.grey2};
  `

  const TabButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 191px;
    height: 50px;
    cursor: pointer;
    padding: 10px 20px;
    color: ${({ isActive }) => (isActive ? theme.main.blue0 : theme.greyScale.grey5)};
    font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
    border-radius: 5px;
    font-size: 18px;
    &::after {
    content: "";
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    width: 60px;
    border-bottom: 4px solid ${theme.main.blue0};
    border-radius: 4px;
    position: absolute;
    transform: translateY(25px);
  }
  `;

  const FriendListWrap = styled.div`
  background-color: ${theme.main.white};
    `


  const SetItems = styled.div`
    display: flex;
    align-items: center;
    height: 76px;
    margin-bottom: 5px;
    padding: 0 24px;
    font-size: 16px;
    a{
      display: flex;
      align-items: center;
    }
      Button{
        font-size: 14px;
        color: ${theme.greyScale.grey5};
        width: 105px;
        height: 35px;
        cursor: pointer;
      }
  `

  const UserImage = styled.div`
  padding-right: 12px;
    img{
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }
  `

  const UserNickname = styled.div`
    color: ${theme.greyScale.grey8};
    padding-bottom: 2px;
    font-weight: 700;
  `

  const UserBio = styled.div`
    color: ${theme.greyScale.grey5};
    width: 201px;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `
  const UserInfoWrap = styled.div`
    padding-right: 12px;
  `

  const NoData = styled.div`
    text-align: center;
    padding-top: 20px;
  `

