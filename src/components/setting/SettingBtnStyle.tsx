import { Button } from "components/index"
import { ArrowRight2 } from "iconsax-react";
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
                <ArrowRight2 />
            </Button>
            {children}
        </ButtonWrap>
    );
};
    
    
const ButtonWrap = styled.div`
    height: 56px;
    margin-bottom: 12px;
    margin-top: 12px;    
    Button{
        box-sizing: border-box;
        width: 100%;
        max-width: 380px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${theme.main.white};
        border-color: ${theme.greyScale.grey3};
        color: ${theme.greyScale.grey9};
        font-size: 16px;
        margin-top: 8px;
    }

    svg{
        color: ${theme.greyScale.grey6};
        width: 20px;
        height: 20px;
        margin-right: 24px;
    }
`



const ButtonText = styled.div`
    margin-left: 24px;
`