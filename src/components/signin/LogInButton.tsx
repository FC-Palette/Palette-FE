import { SIGNIN_FORM_TEXT } from "constants/signin/signInTexts";
import { Button } from 'components/index'

export const LogInButton = () => {
    return (
        <Button>{SIGNIN_FORM_TEXT.submitButtonText}</Button>
    )
}


export default LogInButton;