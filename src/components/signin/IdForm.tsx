import { SIGNIN_FORM_TEXT } from 'constants/signin/signInTexts'
import { Input } from 'components/index'
import { styled } from 'styled-components'

export const IdForm = () => {
    return (
    <IdFormWrap>
        {SIGNIN_FORM_TEXT.idFormText}
        <Input></Input>
    </IdFormWrap>
    )
}

const IdFormWrap = styled.div`
    display: flex;
    flex-direction: column;
`


export default IdForm;