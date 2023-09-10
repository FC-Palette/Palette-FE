import { styled } from "styled-components"
import { theme } from "styles/index"
import { SIGNIN_FORM_TEXT, SIGNIN_REGEX_TEXT } from 'constants/index'
import { Input, Button } from "components/index"
import { useState } from "react"

export const SignInField = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRegex = SIGNIN_REGEX_TEXT.idRegexCondition;
    const isValidEmail = emailRegex.test(email);

    const passwordRegex = SIGNIN_REGEX_TEXT.passwordRegexCondition;
    const isValidPassword = passwordRegex.test(password);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    

    const renderEmailErrorMessage = () => {
        if (!email) {
            return SIGNIN_REGEX_TEXT.idInsertRegText;
        } else if (!isValidEmail) {
            return SIGNIN_REGEX_TEXT.idFormatRegText;
        }
        return null;
    };

    const renderPasswordErrorMessage = () => {
        if (!password) {
            return SIGNIN_REGEX_TEXT.passwordInsertRegText;
        } else if (!passwordRegex.test(password)) {
            if (!SIGNIN_REGEX_TEXT.passwordIncludeEngRegText.test(password)) {
                return SIGNIN_REGEX_TEXT.passwordIncludeEngText;
            } else if (!SIGNIN_REGEX_TEXT.passwordIncludeNumRegText.test(password)) {
                return SIGNIN_REGEX_TEXT.passwordIncludeNumText;
            } else if (!SIGNIN_REGEX_TEXT.passwordIncludeSymRegText.test(password)) {
                return SIGNIN_REGEX_TEXT.passwordIncludeSymbolText;
            } else if (password.length < 8) {
                return SIGNIN_REGEX_TEXT.passwordGreaterNumText;
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
                $inputWidth={'100%'}
                $borderColor={isValidEmail ? theme.greyScale.grey4 : theme.customSize.danger}
                value={email}
                onChange={handleEmailChange}>
                </Input>
                <IdRexErrorMessage>
                    {renderEmailErrorMessage() && (<ErrorMessage>{renderEmailErrorMessage()}</ErrorMessage>)}
                </IdRexErrorMessage>
            </IdFieldWrap>  
            <PasswordFieldWrap>
                <PasswordText>{SIGNIN_FORM_TEXT.passwordFormText}</PasswordText>
                <Input 
                type="password"
                ph={SIGNIN_FORM_TEXT.passwordInputPlaceholderText}
                $inputWidth={'100%'}             
                $borderColor={isValidPassword ? theme.greyScale.grey4 : theme.customSize.danger}
                value={password}
                onChange={handlePasswordChange}>
                </Input>
                <PasswordRexErrorMessage>
                    {renderPasswordErrorMessage() && (<ErrorMessage>{renderPasswordErrorMessage()}</ErrorMessage>)}
                </PasswordRexErrorMessage>
            </PasswordFieldWrap>              
                
                <Button 
                $btnWidth={'100%'}
                $fontSize={'20px'}
                disabled={!isValidEmail || !isValidPassword}>
                {SIGNIN_FORM_TEXT.submitButtonText}
                </Button>
        </SignInFieldWrap>
    )
}

const SignInFieldWrap = styled.div`
    margin: 0 auto;
    width: 382px;
    margin-bottom: 16px;
    margin-top: 4px;
`


const IdFieldWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    :focus{
        border: 1px solid ${theme.main.blue0};
    }
`

const PasswordFieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
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
`


const IdRexErrorMessage = styled.div`
    color: ${theme.customSize.danger};
    font-size: 12px;
    line-height: 28px;

`

const PasswordRexErrorMessage = styled.div`
    color: ${theme.customSize.danger};
    font-size: 12px;
    line-height: 28px;
`
