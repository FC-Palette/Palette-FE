import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { HeaderProps } from 'types/headerProps'

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
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  height: 80px;
`

const LeftIcon = styled.div`
  position: absolute;
  left: 10%;
`

const CenterText = styled.div`
  text-align: center;
  font-size: 24px;
  display: flex;
  position: absolute;
  align-items: center;
  left: 30%;
  font-weight: 600;
  line-height: 31.2px;
`

const ChatCountWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ChatCount = styled.span`
  font-size: 16px;
  margin-left: 5px;
  color: ${theme.greyScale.grey6};
`

const RightContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10%;
`
