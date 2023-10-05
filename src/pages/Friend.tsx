import { checkFollowed, checkFollowing } from "@/api";
import { Footer, Header } from "@/components";
import { decoder } from "@/utils";
import { useState, useEffect } from "react";
import styled from "styled-components";



export const Friend = () => {
  const decodedPayload = decoder();
  console.log(decodedPayload.memberId);

  const [activeTab, setActiveTab] = useState("followers");
  const [isFollowed, setIsFollowed] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);



  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const followed = await checkFollowed(decodedPayload.memberId);
        const following = await checkFollowing(decodedPayload.memberId);

        setIsFollowed(followed);
        setIsFollowing(following);
        console.log(followed.response);
        console.log(following.response)
      } catch (error) {
        console.error("Error checking follow status:", error);
      }
    }

    fetchData();
  }, [decodedPayload.memberId]);

  const FriendTabs = ({ activeTab }) => {
    return (
      <div>
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
      </div>
    );
  };

  return (
    <Wrap>
      <Header centerText="친구 목록" />
      <BodyWrap>
        <FriendTabs activeTab={activeTab} />
        <SetItems></SetItems>
      </BodyWrap>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  /* Wrap 스타일 정의 */
`;

const BodyWrap = styled.div`
  /* BodyWrap 스타일 정의 */
`;

const TabButton = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${({ isActive }) => (isActive ? "blue" : "transparent")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  border: 1px solid blue;
  border-radius: 5px;
  margin-right: 10px;
`;

const SetItems = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
`