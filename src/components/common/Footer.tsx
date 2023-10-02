import { theme, centralise } from 'styles/index'
import { styled } from 'styled-components'
import { ICON_TEXTS } from 'constants/index'
import { useNavigate, useLocation } from 'react-router-dom'
import { MyPageFooterIcon } from 'components/index'

export const Footer = ({ $fixed = true }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleIconClick = path => {
    navigate(path)
  }

  return (
    <Wrapper $fixed={$fixed}>
      {ICON_TEXTS.map(({ text, icon: IconComponent, path }) => (
        <IconWrapper
          key={text}
          onClick={() => handleIconClick(path)}>
          <StyledIcon>
            {(location.pathname === '/mypage' ||
              location.pathname === '/alarm') &&
            path === '/mypage' ? (
              <MyPageFooterIcon />
            ) : (
              <IconComponent />
            )}
          </StyledIcon>
          <StyledIcon>{text}</StyledIcon>
        </IconWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.footer<{ $fixed: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 430px;
  height: 80px;
  justify-content: space-around;
  border-top: 2px solid ${theme.greyScale.grey2};
  z-index: 100;
  position: ${props => (props.$fixed ? 'fixed' : 'sticky')};
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
