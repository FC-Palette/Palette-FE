import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { ICON_TEXTS } from 'constants/index'

export const Footer = () => {
  return (
    <Wrapper>
      {ICON_TEXTS.map(({ text, icon: IconComponent }) => (
        <IconWrapper key={text}>
          <StyledIcon>
            <IconComponent />
          </StyledIcon>
          <StyledIcon>{text}</StyledIcon>
        </IconWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  justify-content: space-around;
  border-top: 2px solid ${theme.greyScale.grey2};
  z-index: 100;
  position: fixed;
  bottom: 0;
  background-color: ${theme.main.white};
`

const IconWrapper = styled.button`
  width: 82px;
  height: 58px;
  padding-top: 10px;
`

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.customSize.small};
  margin-top: 4px;
`
