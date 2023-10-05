import styled, { css } from "styled-components"
import { Button } from "../common"
import { PROFILE_EDIT_TEXT } from "@/constants"
import { useNavigate } from "react-router-dom";

export const MyPageSimpleProfileBtn = (props) => {
  const navigate = useNavigate();
  const isMyPage = location.pathname === '/mypage';
  const handleSimpleProfileClick = () => {
    // /simpleprofile로 이동
    navigate("/simpleprofile");
  };

  return (
    <>
      {isMyPage && (
        <SimpleBtnWrap hide={props.hide}>
          {PROFILE_EDIT_TEXT.profileSimpleText}
        <Button onClick={handleSimpleProfileClick}>
          {PROFILE_EDIT_TEXT.profileSimpleBtnText}
        </Button>
        </SimpleBtnWrap>
      )}
      {isMyPage || (
        <></>
      )}
    </>
  );
}


const SimpleBtnWrap = styled.div<{ hide: boolean }>`
  position: absolute;
  display: none;
  padding: 0 15px;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  white-space: break-spaces;
  text-align: center;
  height: 450px;
  width: 100%;
  top: 59%;
  left: 0;
  width: 100%;
  font-size: 14px;
  z-index: 99999;
  background-color: rgba(255, 255, 255, 0.8);
  Button{
    width: 100%;
    max-width: 300px;
    height: 60px;
    margin-top: 12px;
    font-size: 20px;
  }
  ${(props) =>
    props.hide &&
    css`
      display: flex;
    `}
`