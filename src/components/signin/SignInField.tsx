import { useState } from 'react';
import { styled } from 'styled-components';
import { theme } from 'styles/index';
import { SIGNIN_FORM_TEXT, SIGNIN_REGEX_TEXT } from 'constants/index';
import { Input, Button, RegIcon } from 'components/index';
import { login, tokenPayloadState } from 'api/index';
import { useSetRecoilState } from 'recoil';
import { decoder } from '@/utils';

export const SignInField = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const defaultBorderColor = theme.greyScale.grey4;
  const emailRegex = SIGNIN_REGEX_TEXT.idCondition;
  const passwordRegex = SIGNIN_REGEX_TEXT.pwdCondition;
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);
  const setTokenPayload = useSetRecoilState(tokenPayloadState); 
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log('로그인 성공:', response);
      alert('로그인 성공 테스트 메세지');

      const decodedPayload = decoder();
      console.log('Decoded Token Payload:', decodedPayload);

      setTokenPayload(decodedPayload);


    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

    const renderEmailErrorMessage = () => {
      if (!email) {
        return null; 
      }
      if (!isValidEmail) {
        return SIGNIN_REGEX_TEXT.wrongId;
      }
      return null;
    };
    
    const renderPasswordErrorMessage = () => {
      if (!password) {
        return null; 
      }
      if (!passwordRegex.test(password)) {
        if (!SIGNIN_REGEX_TEXT.engInPwd.test(password)) {
          return SIGNIN_REGEX_TEXT.pwdReqEng;
        }
    
        if (!SIGNIN_REGEX_TEXT.numInPwd.test(password)) {
          return SIGNIN_REGEX_TEXT.pwdReqNum;
        }
    
        // 특수문자 포함 정규식 추가 필요 
    
        if (password.length < 8) {
          return SIGNIN_REGEX_TEXT.pwdLengLeast;
        }
      }
      return null;
    };

  return (
    <SignInFieldWrap>
      <IdFieldWrap>
        <IdText>{SIGNIN_FORM_TEXT.idFormText}</IdText>
        <Input
          ph={SIGNIN_FORM_TEXT.idInputPlaceholderText}
          $inputWidth={"100%"}
          $borderColor={
            isValidEmail
              ? theme.greyScale.grey4
              : email
              ? theme.subColor.redD2
              : defaultBorderColor
          }
          value={email}
          onChange={handleEmailChange}
        ></Input>
        <IdRexErrorMessage>
          {renderEmailErrorMessage() && (
            <ErrorMessage>
              <RegIcon />
              {renderEmailErrorMessage()}
            </ErrorMessage>
          )}
        </IdRexErrorMessage>
      </IdFieldWrap>
      <PasswordFieldWrap>
        <PasswordText>{SIGNIN_FORM_TEXT.passwordFormText}</PasswordText>
        <Input
          type="password"
          ph={SIGNIN_FORM_TEXT.passwordInputPlaceholderText}
          $inputWidth={"100%"}
          $borderColor={
            isValidPassword
              ? theme.greyScale.grey4
              : password
              ? theme.subColor.redD2
              : defaultBorderColor
          }
          value={password}
          onChange={handlePasswordChange}
        ></Input>
        <PasswordRexErrorMessage>
          {renderPasswordErrorMessage() && (
            <ErrorMessage>
              <RegIcon />
              {renderPasswordErrorMessage()}
            </ErrorMessage>
          )}
        </PasswordRexErrorMessage>
      </PasswordFieldWrap>
      <Button
        $btnWidth={"100%"}
        $fontSize={"20px"}
        disabled={!isValidEmail || !isValidPassword}
        onClick={handleLogin} 
      >
        {SIGNIN_FORM_TEXT.submitButtonText}
      </Button>
    </SignInFieldWrap>
  );
};

const SignInFieldWrap = styled.div`
    margin: 0 auto;
    max-width: 100%;
    width: 382px;
    margin-bottom: 16px;
    margin-top: 4px;
`


const IdFieldWrap = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    :focus{
        border: 1px solid ${theme.main.blue0};
    }
`

const PasswordFieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 17px;
    :focus{
        border: 1px solid ${theme.main.blue0};
    }
`

const IdText = styled.div`
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.48px;
    color: ${theme.greyScale.grey6};   
`
const PasswordText = styled.div`
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.48px;
    color: ${theme.greyScale.grey6};    
`

const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
`


const IdRexErrorMessage = styled.div`
    height: 28px;
    color: ${theme.subColor.redD2};
    font-size: 12px;
    line-height: 28px;
    svg{
        margin-right: 3px;
    }

`

const PasswordRexErrorMessage = styled.div`
    height: 28px;
    color: ${theme.subColor.redD2};
    font-size: 12px;
    line-height: 28px;
    svg{
        margin-right: 3px;
    }
`