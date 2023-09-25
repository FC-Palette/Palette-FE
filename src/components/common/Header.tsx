import { theme, centralise } from 'styles/index'
import { styled } from 'styled-components'
import { HeaderProps } from 'types/headerProps'
import {} from 'iconsax-react'

export const Header: React.FC<HeaderProps> = ({
  leftIcon,
  centerText,
  children,
  chatCount
}) => {
  return (
    <Wrapper>
      {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
      <CenterText>
        {centerText}
        {chatCount !== undefined && chatCount > 0 && (
          <ChatCountWrapper>
            <ChatCount>{chatCount}</ChatCount>
          </ChatCountWrapper>
        )}
      </CenterText>
      <RightContent>{children}</RightContent>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  max-width: 430px;
  min-height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${theme.main.white};
  ${centralise}
`

const LeftIcon = styled.div`
  position: absolute;
  left: 5%;
`

const CenterText = styled.div`
  text-align: center;
  font-size: ${theme.customSize.xxlarge};
  display: flex;
  position: absolute;
  align-items: center;
  font-weight: 600;
`

const ChatCountWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ChatCount = styled.span`
  font-size: ${theme.customSize.large};
  margin-left: 5px;
  color: ${theme.greyScale.grey6};
`

const RightContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 5%;
`
