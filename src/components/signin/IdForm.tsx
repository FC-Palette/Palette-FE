import { SIGNIN_FORM_TEXT } from 'constants/index'
import { Input } from 'components/index'
import { styled } from 'styled-components'

export const IdForm = () => {
    return (
    <IdFormWrap>
        {SIGNIN_FORM_TEXT.idFormText}
        <Input ph={SIGNIN_FORM_TEXT.idInputPlaceholderText}></Input>
    </IdFormWrap>
    )
}

const IdFormWrap = styled.div`
    display: flex;
    flex-direction: column;
`


