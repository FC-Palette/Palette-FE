import { theme } from "styles/index";
import { NAVIGATION_PATH, SIGNIN_FORM_TEXT } from "constants/index";
import { styled, css } from "styled-components";
import { Link } from "react-router-dom";


export const FindUserField = () => {
  return (
    <FindUserFieldForm>
      <Link {...NAVIGATION_PATH.navigatorFindIdPage}>
        <FindIdWrap>{SIGNIN_FORM_TEXT.findIdText}</FindIdWrap>
      </Link>
      <Divider />
      <Link {...NAVIGATION_PATH.navigatorFindPasswordPage}>
        <FindPasswordWrap>{SIGNIN_FORM_TEXT.findPasswordText}</FindPasswordWrap>
      </Link>
    </FindUserFieldForm>
  );
}

const FindUserFieldForm = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  width: 231px;
  height: 35px;
  margin: 0 auto;
`;

const commonLinkStyles = css`
  display: inline-block;
  font-size: 14px;
  line-height: 16.71px;
  color: ${theme.greyScale.grey5};
  text-decoration: underline;
  text-underline-position: under;
`;

const FindIdWrap = styled.div`
  ${commonLinkStyles} 
  padding:0 18px;
`;

const FindPasswordWrap = styled.div`
  ${commonLinkStyles}
  padding: 0 12px;
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1px;
  background-color: ${theme.greyScale.grey2};
  height: 20px;
  margin: auto 4px;
`;
