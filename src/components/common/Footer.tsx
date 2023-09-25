import { theme, centralise } from 'styles/index'
import { styled } from 'styled-components'
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
  max-width: 430px;
  height: 80px;
  justify-content: space-around;
  border-top: 2px solid ${theme.greyScale.grey2};
  z-index: 100;
  position: fixed;
  bottom: 0%;
  /* top: 100%; */
  background-color: ${theme.main.white};
`

const IconWrapper = styled.button`
  width: 82px;
  height: 58px;
  padding-top: 10px;
`

const StyledIcon = styled.div`
  ${centralise};
  font-size: ${theme.customSize.small};
  margin-top: 4px;
`
