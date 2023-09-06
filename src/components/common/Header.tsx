import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { HeaderProps } from 'types/headerProps'

export const Header: React.FC<HeaderProps> = ({
  leftIcon,
  centerText,
  rightContent,
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
      {rightContent && (
        <RightContent>
          {Array.isArray(rightContent) ? (
            rightContent.map((content, index) => (
              <ContentItem key={index}>{content}</ContentItem>
            ))
          ) : (
            <ContentItem>{rightContent}</ContentItem>
          )}
        </RightContent>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 430px;
  height: 80px;
`

const LeftIcon = styled.div`
  margin-left: 48px;
`

const CenterText = styled.div`
  text-align: center;
  font-size: 24px;
  display: flex;
  align-items: center;
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
  margin-right: 48px;
`

const ContentItem = styled.div`
  margin-left: 10px;
`
