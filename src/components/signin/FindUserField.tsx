import { theme } from "styles/index";
import { SIGNIN_FORM_TEXT } from "constants/index";
import { styled } from "styled-components";
import { Link } from "react-router-dom";


export const FindUserField = () => {
  return (
    <FindUserFieldForm>
        <Link to="/findid">
        <FindIdWrap>{SIGNIN_FORM_TEXT.findIdText}</FindIdWrap>
        </Link>
        <Divider />
        <Link to="/findpassword">
        <FindPasswordWrap>{SIGNIN_FORM_TEXT.findPasswordText}</FindPasswordWrap>
        </Link>
    </FindUserFieldForm>
  )
}


const FindUserFieldForm = styled.div`
    display: flex;
    width: 231px;
    height: 35px;
    margin: 0 auto;
`


const FindIdWrap = styled.div`
    display: inline-block;  
    padding: 9px 18px;
    height: 35px;
    font-size: 14px;
    line-height: 16.71px;
    color: ${theme.greyScale.grey5};  
    text-decoration: underline;
    text-underline-position: under;
`

const FindPasswordWrap = styled.div`
    display: inline-block;  
    padding: 9px 12px;
    height: 35px;
    font-size: 14px;
    line-height: 16.71px;
    color: ${theme.greyScale.grey5};   
    text-decoration: underline;
    text-underline-position: under;
`


const Divider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1px;   
    background-color: ${theme.greyScale.grey2};  
    height: 20px; 
    margin: auto 4px;
`