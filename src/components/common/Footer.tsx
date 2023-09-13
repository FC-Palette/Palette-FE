import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { ICON_TEXTS } from 'constants/index'
import { useNavigate } from 'react-router-dom'

export const Footer = () => {
  const navigate = useNavigate()
  const handleIconClick = path => {
    navigate(path)
  }

  return (
    <Wrapper>
      {ICON_TEXTS.map(({ text, icon: IconComponent, path }) => (
        <IconWrapper
          key={text}
          onClick={() => handleIconClick(path)}>
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
  position: sticky;
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
