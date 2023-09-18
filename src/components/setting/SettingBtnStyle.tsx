import { Button } from "components/index"
import { styled } from "styled-components"
import { theme } from "styles/index"
import { SettingBtnProps } from "types/index";


export const SettingBtnStyle = ({ text, children }:SettingBtnProps) => {
    return (
        <ButtonWrap>
            <Button>
            <ButtonText>
            {text}
            </ButtonText>
            </Button>
            {children}
        </ButtonWrap>
    );
};
    
    
    const ButtonWrap = styled.div`
        margin: 0 24px;
        height: 56px;
        margin-bottom: 12px;
                margin-top: 8px;    

        Button{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: ${theme.main.white};
        border-color: ${theme.greyScale.grey2};
        color: ${theme.greyScale.grey9};
        font-size: 16px;
        margin-top: 8px;
        }
    `


const ButtonText = styled.div`
    margin-left: 24px;
`